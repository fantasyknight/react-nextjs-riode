import React from 'react';

import ALink from '~/components/features/custom-link';
import Countdown from '~/components/features/countdown';

import { toDecimal } from '~/utils';
function DetailLeft( props ) {
    const { data, isSticky = false, adClass = "mb-4" } = props;
    let product = data && data.product;

    return (
        <div className={ `product-details p-0 ${ isSticky ? 'p-sticky' : '' } ${ adClass }` }>
            <h2 className="product-name mt-3">{ product.data.name }</h2>

            <div className='product-meta'>
                SKU: <span className='product-sku'>{ product.data.sku }</span>
                CATEGORIES: <span className='product-brand'>
                    {
                        product.data.categories.map( ( item, index ) =>
                            <React.Fragment key={ item.name + '-' + index }>
                                <ALink href={ { pathname: '/shop', query: { category: item.slug } } }>
                                    { item.name }
                                </ALink>
                                { index < product.data.categories.length - 1 ? ', ' : '' }
                            </React.Fragment>
                        ) }
                </span>
            </div>

            <div className="product-price">
                {
                    product.data.price[ 0 ] !== product.data.price[ 1 ] ?
                        product.data.variants.length === 0 || ( product.data.variants.length > 0 && !product.data.variants[ 0 ].price ) ?
                            <>
                                <ins className="new-price">${ toDecimal( product.data.price[ 0 ] ) }</ins>
                                <del className="old-price">${ toDecimal( product.data.price[ 1 ] ) }</del>
                            </>
                            :
                            < del className="new-price">${ toDecimal( product.data.price[ 0 ] ) } – ${ toDecimal( product.data.price[ 1 ] ) }</del>
                        : <ins className="new-price">${ toDecimal( product.data.price[ 0 ] ) }</ins>
                }
            </div>

            {
                product.data.price[ 0 ] !== product.data.price[ 1 ] && product.data.variants.length === 0 ?
                    <Countdown type={ 2 } /> : ''
            }

            <div className="ratings-container">
                <div className="ratings-full">
                    <span className="ratings" style={ { width: 20 * product.data.ratings + '%' } }></span>
                    <span className="tooltiptext tooltip-top">{ toDecimal( product.data.ratings ) }</span>
                </div>

                <ALink href="#" className="rating-reviews">( { product.data.reviews } reviews )</ALink>
            </div>

            <p className="product-short-desc">{ product.data.short_description }</p>
        </div >
    )
}

export default ( DetailLeft );
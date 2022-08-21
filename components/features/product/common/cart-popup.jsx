import React from 'react';

import ALink from '~/components/features/custom-link';

import { toDecimal } from '~/utils';

export default function CartPopup ( props ) {
    const { product } = props;

    return (
        <div className="minipopup-area">
            <div className="minipopup-box show" style={ { top: "0" } }>
                <p className="minipopup-title">Successfully added.</p>

                <div className="product product-purchased  product-cart mb-0">
                    <figure className="product-media pure-media">
                        <ALink href={ `/product/default/${ product.slug }` }>
                            <img
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url }
                                alt="product"
                                width="90"
                                height="90"
                            />
                        </ALink>
                    </figure>
                    <div className="product-detail">
                        <ALink href={ `/product/default/${ product.slug }` } className="product-name">{ product.name }</ALink>
                        <span className="price-box">
                            <span className="product-quantity">{ product.qty }</span>
                            <span className="product-price">${ toDecimal( product.price ) }</span>
                        </span>
                    </div>
                </div>

                <div className="action-group d-flex">
                    <ALink href="/pages/cart" className="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</ALink>
                    <ALink href="/pages/checkout" className="btn btn-sm btn-primary btn-rounded">Check Out</ALink>
                </div>
            </div>
        </div>
    )
}
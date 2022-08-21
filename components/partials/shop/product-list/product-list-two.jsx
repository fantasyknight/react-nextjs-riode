import { useEffect, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';

import ToolBox from '~/components/partials/shop/toolbox';
import ProductTwo from '~/components/features/product/product-two';
import ProductEight from '~/components/features/product/product-eight';

function ProductListTwo( props ) {
    const router = useRouter();
    const query = router.query;
    const [ products, setProducts ] = useState( [] );
    const [ getInitData, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [ loadMoreProducts, { data: newData } ] = useLazyQuery( GET_PRODUCTS, { fetchPolicy: 'no-cache' } );
    const perPage = query.per_page ? parseInt( query.per_page ) : 12;
    const [ loadedCount, setLoadedCount ] = useState( perPage );
    const totalCount = data && data.products.total;
    const gridType = query.type ? query.type : 'grid';

    useEffect( () => {
        setLoadedCount( perPage );
    }, [ query ] )

    useEffect( () => {
        getInitData( {
            variables: {
                search: query.search,
                colors: query.colors ? query.colors.split( ',' ) : [],
                sizes: query.sizes ? query.sizes.split( ',' ) : [],
                brands: query.brands ? query.brands.split( ',' ) : [],
                min_price: parseInt( query.min_price ),
                max_price: parseInt( query.max_price ),
                category: query.category,
                tag: query.tag,
                sortBy: query.sortby,
                from: 0,
                to: loadedCount
            }
        } );
    }, [ query ] )

    useLayoutEffect( () => {
        data && setProducts( data.products.data );
    }, [ data ] )

    useEffect( () => {
        let newProducts = newData ? newData.products.data : [];
        setProducts( [ ...products, ...newProducts ] );
    }, [ newData ] )

    const productLoadHandler = () => {
        setTimeout( () => {
            loadMoreProducts( {
                variables: {
                    search: query.search,
                    colors: query.colors ? query.colors.split( ',' ) : [],
                    sizes: query.sizes ? query.sizes.split( ',' ) : [],
                    brands: query.brands ? query.brands.split( ',' ) : [],
                    min_price: parseInt( query.min_price ),
                    max_price: parseInt( query.max_price ),
                    category: query.category,
                    tag: query.tag,
                    sortBy: query.sortby,
                    from: products.length,
                    to: products.length + 3
                }
            } );
        }, 1500 );
    }

    return (
        <>
            <ToolBox />

            <InfiniteScroll
                dataLength={ products ? products.length : 0 }
                next={ productLoadHandler }
                style={ { overflow: "visible" } }
                hasMore={ products.length >= totalCount ? false : true }
                loader={ <div className="d-loading"></div> }
            >
                {
                    loading ?
                        gridType === 'grid' ?
                            <div className={ `row product-wrapper cols-2 cols-sm-3` }>
                                {
                                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </div> :
                            <div className="row product-wrapper skeleton-body cols-1">
                                {
                                    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                        <div className="skel-pro skel-pro-list mb-4" key={ 'list-skel-' + item }></div>
                                    )
                                }
                            </div>
                        : ''
                }
                {
                    gridType === 'grid' ?
                        <div className={ `row product-wrapper cols-2 cols-sm-3` }>
                            { products.length > 0 && products.map( item =>
                                <div className="product-wrap" key={ 'shop-' + item.slug }>
                                    <ProductTwo product={ item } adClass="" />
                                </div>
                            ) }
                        </div>
                        :
                        <div className="product-lists product-wrapper">
                            { products.length > 0 && products.map( item =>
                                <ProductEight product={ item } key={ 'shop-list-' + item.slug } />
                            ) }
                        </div>
                }

                {
                    products && products.length === 0 ?
                        <p className="ml-1">No products were found matching your selection.</p> : ''
                }

            </InfiniteScroll>
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductListTwo );
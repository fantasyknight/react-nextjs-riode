import React from 'react';
import Reveal from 'react-awesome-reveal';

import SmallProduct from '~/components/features/product/product-sm';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function SmallCollection ( props ) {
    const { featured, latest, bestSelling, onSale, loading } = props;

    return (
        <section className="product-widget-wrapper pb-2 pb-md-10 skeleton-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <h2 className="widget-title border-no lh-1 font-weight-bold">Sale Products</h2>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'sale-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            onSale && onSale.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `sale-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <h2 className="widget-title border-no lh-1 font-weight-bold">Latest Products</h2>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'latest-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            latest && latest.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `latest-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <h2 className="widget-title border-no lh-1 font-weight-bold">Best of the Week</h2>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'best-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            bestSelling && bestSelling.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `best-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">

                        <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="widget widget-products">
                                <h2 className="widget-title border-no lh-1 font-weight-bold">Popular</h2>

                                <div className="products-col">
                                    {
                                        loading ?
                                            <>
                                                {
                                                    [ 1, 2, 3 ].map( ( item ) =>
                                                        <div className="skel-pro-list mb-4" key={ 'featured-small-skel-' + item }></div>
                                                    )
                                                }
                                            </> :
                                            featured && featured.slice( 0, 3 ).map( ( item, index ) => (
                                                <SmallProduct
                                                    product={ item }
                                                    key={ `featured-sm-product-${ index }` }
                                                    isReviewCount={ false }
                                                />
                                            ) )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( SmallCollection );
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import MediaSix from '~/components/partials/product/media/media-six';
import DetailLeft from '~/components/partials/product/detail/detail-left';
import DetailRight from '~/components/partials/product/detail/detail-right';
import DescOne from '~/components/partials/product/desc/desc-one';
import RelatedProducts from '~/components/partials/product/related-products';
import ProductNav from '~/components/partials/product/product-nav';

import { mainSlider17 } from '~/utils/data/carousel';

function ProductStickyBoth() {
    const slug = useRouter().query.slug;

    if ( !slug ) return '';

    const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    const [ loaded, setLoadingState ] = useState( false );
    const product = data && data.product.data;
    const related = data && data.product.related;

    useEffect( () => {
        if ( !loading && product )
            imagesLoaded( 'main' ).on( 'done', function () {
                setLoadingState( true );
            } ).on( 'progress', function () {
                setLoadingState( false );
            } );
        if ( loading )
            setLoadingState( false )
    }, [ loading, product ] )

    return (
        <main className="main single-product product-sticky-both">
            <Helmet>
                <title>Riode React eCommerce Template | Product Sticky Both</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Sticky Both</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product-navigation">
                                <ul className="breadcrumb breadcrumb-lg">
                                    <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                                    <li><ALink href="#" className="active">Products</ALink></li>
                                    <li>Detail</li>
                                </ul>

                                <ProductNav product={ data.product } />
                            </div>

                            <div className="product product-single product-sticky-both mb-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <MediaSix product={ product } adClass="col-lg-12 col-sm-6" />
                                    </div>

                                    <div className="col-lg-3 col-md-6 order-lg-first">
                                        <DetailLeft data={ data } isSticky={ true } />
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <DetailRight data={ data } isSticky={ true } />
                                    </div>
                                </div>
                            </div>

                            <DescOne product={ product } />

                            <RelatedProducts products={ related } adClass="pt-3 mt-2" />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body sticky-both container mt-10 pt-3 mb-10">
                        <div className="row p-relative">
                            <div className="woocommerce-product-gallery sticky col-lg-6 mt-3">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="product-details sticky">
                                <div className="skel-pro-summary mt-4 mt-md-0"></div>
                            </div>
                        </div>

                        <div className="skel-pro-tabs"></div>

                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                        <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductStickyBoth );
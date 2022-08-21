import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import OwlCarousel from '~/components/features/owl-carousel';

import MediaSix from '~/components/partials/product/media/media-six';
import DetailFive from '~/components/partials/product/detail/detail-five';
import RelatedProducts from '~/components/partials/product/related-products';

import { mainSlider17 } from '~/utils/data/carousel';

function ProductStickyInfo() {
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
        <main className="main mt-6 single-product product-sticky-info">
            <Helmet>
                <title>Riode React eCommerce Template | Product Sticky Info</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Sticky Info</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product product-single row">
                                <div className="col-md-6">
                                    <MediaSix product={ product } />
                                </div>

                                <div className="col-md-6">
                                    <DetailFive data={ data } isDesc={ true } isGuide={ true } isSticky={ true } />
                                </div>
                            </div>

                            <RelatedProducts products={ related } adClass="pt-3 mt-2" />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body sticky-info container mb-10">
                        <div className="row">
                            <div className="col-md-6 sticky-sidebar-wrapper">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="product-details sticky">
                                    <div className="skel-pro-summary mt-4 mt-md-0"></div>
                                    <div className="skel-pro-tabs"></div>
                                </div>
                            </div>
                        </div>

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

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductStickyInfo );
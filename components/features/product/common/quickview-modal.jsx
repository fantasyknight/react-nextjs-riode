import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { Magnifier } from 'react-image-magnifiers';
import Modal from 'react-modal';
import imagesLoaded from 'imagesloaded';

import { GET_PRODUCT } from '~/server/queries';
import withApollo from '~/server/apollo';

import OwlCarousel from '~/components/features/owl-carousel';

import DetailOne from '~/components/partials/product/detail/detail-one';

import { modalActions } from '~/store/modal';

import { mainSlider3 } from '~/utils/data/carousel';

const customStyles = {
    content: {
        position: "relative"
    },
    overlay: {
        background: 'rgba(0,0,0,.4)',
        zIndex: '10000',
        overflowX: 'hidden',
        overflowY: 'auto'
    }
}

Modal.setAppElement( '#__next' );

function Quickview( props ) {
    const { slug, closeQuickview, isOpen } = props;

    if ( !isOpen ) return <div></div>;

    const [ loaded, setLoadingState ] = useState( false );

    const { data, loading } = useQuery( GET_PRODUCT, { variables: { slug, onlyData: true } } );
    const product = data && data.product;

    useEffect( () => {
        setTimeout( () => {
            if ( !loading && data && isOpen && document.querySelector( '.quickview-modal' ) )
                imagesLoaded( '.quickview-modal' ).on( 'done', function () {
                    setLoadingState( true );
                    window.jQuery( '.quickview-modal .product-single-carousel' ).trigger( 'refresh.owl.carousel' );
                } ).on( 'progress', function () {
                    setLoadingState( false );
                } );
        }, 200 );
    }, [ data, isOpen ] );

    if ( slug === '' || !product || !product.data ) return '';

    const closeQuick = () => {
        document.querySelector( ".ReactModal__Overlay" ).classList.add( 'removed' );
        document.querySelector( '.quickview-modal' ).classList.add( 'removed' );
        setLoadingState( false )
        setTimeout( () => {
            closeQuickview();
        }, 330 );
    }

    return (
        <Modal
            isOpen={ isOpen }
            contentLabel="QuickView"
            onRequestClose={ closeQuick }
            shouldFocusAfterRender={ false }
            style={ customStyles }
            className="product product-single row product-popup quickview-modal" id="product-quickview"
        >
            <>
                <div className={ `row p-0 m-0 ${ loaded ? '' : 'd-none' }` } >
                    <div className="col-md-6">
                        <div className="product-gallery mb-md-0 pb-0">
                            <div className="product-label-group">
                                { product.data.is_new ? <label className="product-label label-new">New</label> : '' }
                                { product.data.is_top ? <label className="product-label label-top">Top</label> : '' }
                                {
                                    product.data.discount > 0 ?
                                        product.data.variants.length === 0 ?
                                            <label className="product-label label-sale">{ product.data.discount }% OFF</label>
                                            : <label className="product-label label-sale">Sale</label>
                                        : ''
                                }
                            </div>

                            <OwlCarousel adClass="product-single-carousel owl-theme owl-nav-inner" options={ mainSlider3 }>
                                {
                                    product && product.data && product.data.large_pictures.map( ( item, index ) =>
                                        <Magnifier
                                            key={ 'quickview-image-' + index }
                                            imageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                            imageAlt="magnifier"
                                            largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + item.url }
                                            dragToMove={ false }
                                            mouseActivation="hover"
                                            cursorStyleActive="crosshair"
                                            className="product-image large-image"
                                        />
                                    )
                                }
                            </OwlCarousel>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <DetailOne data={ data } adClass="scrollable pr-3" isNav={ false } />
                    </div>
                </div>

                <button title="Close (Esc)" type="button" className="mfp-close p-0" onClick={ closeQuick } ><span>×</span></button>
            </>
            {
                loaded ? '' : <div className="product row p-0 m-0 skeleton-body mfp-product" >
                    <div className="col-md-6">
                        <div className="skel-pro-gallery">
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="skel-pro-summary"></div>
                    </div>
                </div>
            }
        </Modal>
    )
}

function mapStateToProps( state ) {
    return {
        slug: state.modal.singleSlug,
        isOpen: state.modal.quickview
    }
}

export default withApollo( { ssr: typeof window === 'undefined' } )( connect( mapStateToProps, { closeQuickview: modalActions.closeQuickview } )( Quickview ) );
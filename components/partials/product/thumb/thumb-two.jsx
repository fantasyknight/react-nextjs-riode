import React, { useEffect, useState } from 'react';

import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider15 } from '~/utils/data/carousel';

function ThumbTwo ( props ) {
    const { product, index = 0 } = props;
    let thumbs = product.pictures;
    const [ thumbRef, setThumbRef ] = useState( null );

    useEffect( () => {
        if ( thumbRef !== null && index >= 0 ) {
            thumbRef.current.$car.to( index, 300, true );

            if ( document.querySelector( '.product-thumbs' ) ) {
                document.querySelector( '.product-thumbs .owl-stage' ).querySelector( '.product-thumb.active' ) && document.querySelector( '.product-thumbs .owl-stage' ).querySelector( '.product-thumb.active' ).classList.remove( 'active' );
                document.querySelector( '.product-thumbs .owl-stage' ).querySelectorAll( '.owl-item' )[ index ] && document.querySelector( '.product-thumbs .owl-stage' ).querySelectorAll( '.owl-item' )[ index ] && document.querySelector( '.product-thumbs .owl-stage' ).querySelectorAll( '.owl-item' )[ index ].querySelector( '.product-thumb' ).classList.add( 'active' );
            }
        }
    }, [ index ] )

    const thumbActiveHandler = ( e, thumbIndex ) => {
        props.onChangeIndex( thumbIndex );
        document.querySelector( '.product-thumbs' ) && document.querySelector( '.product-thumbs .owl-stage' ).querySelector( '.product-thumb.active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
        // window.jQuery( '.quickview-modal .product-single-carousel' ).trigger( 'to.owl.carousel', [ thumbIndex, 100, true ] );
    }

    const changeRefHandler = ( carRef ) => {
        if ( carRef.current !== undefined && thumbRef === null ) {
            setThumbRef( carRef );
        }
    }

    return (
        <div className="product-thumbs-wrap product-thumbs-two">
            <OwlCarousel adClass="product-thumbs product-thumb-carousel" options={ mainSlider15 } onChangeRef={ changeRefHandler }>
                {
                    thumbs.map( ( thumb, index ) => (
                        <div className={ `product-thumb ${ index === 0 ? 'active' : '' }` } onClick={ ( e ) => { thumbActiveHandler( e, index ) } } key={ thumb + '-2-' + index }>
                            <img src={ process.env.NEXT_PUBLIC_ASSET_URI + thumb.url } alt="product thumbnail" width="137" height="137" />
                        </div>
                    ) )
                }
            </OwlCarousel>
        </div >
    )
}

export default React.memo( ThumbTwo );
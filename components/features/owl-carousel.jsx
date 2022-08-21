import React, { useRef, useEffect } from 'react';
import Carousel from 'react-owl-carousel2';

// let prevPath;
function OwlCarousel ( props ) {
    const { adClass, options } = props;
    const carouselRef = useRef( null );
    const defaultOptions = {
        items: 1,
        loop: false,
        margin: 0,
        responsiveClass: "true",
        nav: true,
        navText: [ '<i class="d-icon-angle-left">', '<i class="d-icon-angle-right">' ],
        navElement: "button",
        dots: true,
        smartSpeed: 400,
        autoplay: false,
        autoHeight: false
        // autoplayTimeout: 5000,
    };

    useEffect( () => {
        if ( props.onChangeRef ) {
            props.onChangeRef( carouselRef );
        }
    }, [ carouselRef ] )

    let events = {
        onTranslated: function ( e ) {
            if ( !e.target ) return;
            if ( props.onChangeIndex ) {
                props.onChangeIndex( e.item.index );
            }
        }
    }

    events = Object.assign( {}, events, props.events );
    let settings = Object.assign( {}, defaultOptions, options );

    return (
        props.children ?
            props.children.length > 0 || ( props.children && props.children.length === undefined ) ?
                <Carousel ref={ carouselRef } className={ `owl-carousel ${ adClass }` } options={ settings } events={ events }>
                    { props.children }
                </Carousel >
                : ""
            : ""
    );
}

export default React.memo( OwlCarousel );
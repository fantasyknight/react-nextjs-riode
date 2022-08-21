import { useState, useEffect } from 'react';

export default function ThumbOne( props ) {
    const { index, product } = props;
    const [ pos, setPos ] = useState( 0 );
    const [ term, setTerm ] = useState( 4 );

    useEffect( () => {
        window.addEventListener( 'resize', initCarouselHanlder );

        setTimeout( () => {
            let productThumb = document.querySelector( '.product-thumb' );
            let wrapperHeight = document.querySelector( '.product-thumbs-one' ).offsetHeight;
            let thumbSpace = parseInt( window.getComputedStyle( productThumb ).getPropertyValue( "margin-bottom" ) );
            let transformUnit = productThumb.offsetHeight + thumbSpace;
            // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );
            let newTerm = ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) );
            newTerm = parseInt( newTerm / transformUnit );
            if ( newTerm !== term ) {
                setTerm( newTerm );
            }
        }, 300 );

        return () => {
            window.removeEventListener( 'resize', initCarouselHanlder );
        }
    }, [] )

    // initial settings
    useEffect( () => {
        let productThumbs = document.querySelector( '.product-thumbs-one' );

        if ( window.innerWidth < 992 ) {
            document.querySelector( '.product-thumbs-one' ).style.display = 'none';
            document.querySelector( '.product-thumbs-two' ).style.display = 'block';
            window.jQuery( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
        } else {
            document.querySelector( '.product-thumbs-one' ).style.display = 'block';
            document.querySelector( '.product-thumbs-two' ).style.display = 'none';
        }

        setPos( 0 );

        if ( term < product.pictures.length ) {
            productThumbs.querySelector( '.thumb-down' ).classList.remove( 'disabled' );
        } else {
            productThumbs.querySelector( '.thumb-down' ).classList.add( 'disabled' );
        }

        if ( document.querySelector( '.product-thumbs' ) ) {
            activeItem( 0 );
            productThumbs.querySelector( '.thumb-up' ).classList.add( 'disabled' );
            document.querySelector( '.product-thumbs' ).style.top = 0;
        }
    }, [ product ] )

    // change the pos and top when the media carousel is translated 
    useEffect( () => {
        if ( pos + term - 1 < index ) {
            moveThumb( "down" );
            setPos( pos + 1 );
        }

        if ( index < pos ) {
            moveThumb( "up" );
            setPos( pos - 1 );
        }

        activeItem( index );
    }, [ index ] )

    useEffect( () => {
        let productThumbs = document.querySelector( '.product-thumbs-one' );
        if ( pos + term < product.pictures.length ) {
            productThumbs.querySelector( '.thumb-down' ).classList.remove( 'disabled' );
        } else {
            productThumbs.querySelector( '.thumb-down' ).classList.add( 'disabled' );
        }

        if ( pos + term === product.pictures.length ) {
            // moveThumb( "down" );
            // setPos( pos + 1 );
        }

        if ( index < pos ) {
            // moveThumb( "up" );
            // setPos( pos - 1 );
        }
    }, [ term ] )

    useEffect( () => {
        let productThumbs = document.querySelector( '.product-thumbs-one' );
        if ( productThumbs ) {
            if ( pos > 0 ) {
                productThumbs.querySelector( '.thumb-up' ).classList.remove( 'disabled' );
            } else {
                productThumbs.querySelector( '.thumb-up' ).classList.add( 'disabled' );
            }

            if ( pos + term < product.pictures.length ) {
                productThumbs.querySelector( '.thumb-down' ).classList.remove( 'disabled' );
            } else {
                productThumbs.querySelector( '.thumb-down' ).classList.add( 'disabled' );
            }
        }
    }, [ pos ] )

    // move thumb pos
    function moveThumb( type = "up" ) {
        let sign = type === "up" ? 1 : -1;
        let productThumb = document.querySelector( '.product-thumb' );
        let wrapperHeight = document.querySelector( '.product-thumbs-one' ).offsetHeight;
        let transformUnit = productThumb.offsetHeight + parseInt( window.getComputedStyle( productThumb ).getPropertyValue( "margin-bottom" ) );
        if ( type === 'down' ) {
            document.querySelector( '.product-thumbs' ).style.top = -transformUnit * ( pos - sign ) + ( wrapperHeight - transformUnit * term ) + parseInt( window.getComputedStyle( productThumb ).getPropertyValue( "margin-bottom" ) ) + 'px';
        } else {
            document.querySelector( '.product-thumbs' ).style.top = -transformUnit * ( pos - sign ) + 'px';
        }
    }

    // active selected item
    function activeItem( index ) {
        if ( document.querySelector( '.product-thumbs' ).querySelector( '.active.product-thumb' ) ) {
            let activeItems = document.querySelector( '.product-thumbs' ).querySelectorAll( '.active.product-thumb' );
            activeItems.forEach( item => {
                item.classList.remove( 'active' );
            } )
        }
        document.querySelector( '.product-thumbs' ).querySelectorAll( '.product-thumb' )[ index ].classList.add( 'active' );
    }

    // init and destroy thumb carousel in 992px
    const initCarouselHanlder = () => {
        if ( window.innerWidth < 992 ) {
            document.querySelector( '.product-thumbs-one' ).style.display = 'none';
            document.querySelector( '.product-thumbs-two' ).style.display = 'block';
            window.jQuery( '.owl-carousel' ).trigger( 'refresh.owl.carousel' );
        } else {
            document.querySelector( '.product-thumbs-one' ).style.display = 'block';
            document.querySelector( '.product-thumbs-two' ).style.display = 'none';
            setTermHandler();
        }
    }

    // change the items displayed once in sidebar
    const setTermHandler = () => {
        setTimeout( () => {
            let productThumb = document.querySelector( '.product-thumb' );
            let wrapperHeight = document.querySelector( '.product-thumbs-one' ).offsetHeight;
            let thumbSpace = parseInt( window.getComputedStyle( productThumb ).getPropertyValue( "margin-bottom" ) );
            let transformUnit = productThumb.offsetHeight + thumbSpace;
            // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );
            let newTerm = ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) );
            newTerm = parseInt( newTerm / transformUnit );
            console.log( "new term is", newTerm, window.innerWidth );
            if ( newTerm !== term ) {
                setTerm( newTerm );
            }

            let thumbContainer = document.querySelector( '.product-thumbs-one' );
            if ( product.pictures.length <= newTerm ) {
                setTimeout( () => {
                    thumbContainer.querySelector( '.product-thumbs' ).style.top = 0;
                }, 100 );
            } else {
                let currentTop = parseInt( window.getComputedStyle( thumbContainer.querySelector( '.product-thumbs' ) ).getPropertyValue( 'top' ) );
                let offset = currentTop + transformUnit * product.pictures.length - thumbSpace;
                let temp = wrapperHeight - offset;

                if ( ( index > newTerm - 1 || temp >= 0 ) && product.pictures.length > newTerm ) {
                    thumbContainer.querySelector( '.product-thumbs' ).style.top = currentTop + temp + 'px';
                }
            }
        }, 300 );
    }

    // set the top on clicking prev
    const prevPosHandler = () => {
        setPos( pos - 1 );
        moveThumb( "up" );
    }

    // set the top on clicking next
    const nextPosHandler = () => {
        setPos( pos + 1 );
        moveThumb( "down" );
    }

    // active the thumb which is currently selected
    const activeHandler = ( e, index ) => {
        if ( props.onChangeIndex ) {
            props.onChangeIndex( index );
        }

        activeItem( index );
    }

    return (
        <div className="product-thumbs-wrap product-thumbs-one">
            <div className="product-thumbs" id="product-thumbs">
                {
                    product.pictures.map( ( item, index ) => (
                        <div className={ `product-thumb` } key={ "thumb - " + index } onClick={ ( e ) => activeHandler( e, index ) }>
                            <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url } alt="product thumbnail"
                                width="109" height="122" />
                        </div>
                    ) )
                }
            </div>

            <button className="thumb-up" onClick={ prevPosHandler }><i className="fas fa-chevron-left"></i></button>
            <button className="thumb-down" onClick={ nextPosHandler }><i className="fas fa-chevron-right"></i></button>
        </div >
    )
}
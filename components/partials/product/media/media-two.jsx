import { useState, useEffect } from 'react';
import { Magnifier } from 'react-image-magnifiers';

import MediaLightBox from '~/components/partials/product/light-box';

export default function MediaTwo( props ) {
    const { product } = props;
    const [ index, setIndex ] = useState( 0 );
    const [ isOpen, setOpenState ] = useState( false );

    let lgImages = product.large_pictures ? product.large_pictures : product.pictures;

    useEffect( () => {
        setIndex( 0 );
    }, [ window.location.pathname ] )

    const changeOpenState = openState => {
        setOpenState( openState );
    }

    const openLightBox = ( e ) => {
        e.preventDefault();
        setIndex( parseInt( e.currentTarget.getAttribute( "index" ) ) );
        setOpenState( true );
    }

    return (
        <>
            <div className="product-gallery row cols-sm-2">
                {
                    lgImages.slice( 0, 4 ).map( ( image, index ) =>
                        <figure className="product-image mb-4" key={ 'image' + index }>
                            <Magnifier
                                imageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                imageAlt="magnifier"
                                largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                dragToMove={ false }
                                mouseActivation="hover"
                                cursorStyleActive="crosshair"
                                className="product-image large-image"

                            />

                            {
                                index === 0 ?
                                    <div className="product-label-group">
                                        {
                                            product.stock === 0 ?
                                                <label className="product-label label-out">out</label> : ""
                                        }

                                        {
                                            product.is_top ?
                                                <label className="product-label label-top">top</label> : ""
                                        }

                                        {
                                            product.is_new ?
                                                <label className="product-label label-new">new</label> : ""
                                        }

                                        {
                                            product.discount ?
                                                <label className="product-label label-sale">sale</label> : ""
                                        }
                                    </div>
                                    : ''
                            }

                            <a href="#" className="product-image-full" onClick={ openLightBox } index={ index }><i className="d-icon-zoom"></i></a>
                        </figure>
                    ) }
            </div>

            <MediaLightBox images={ lgImages.slice( 0, 4 ) } isOpen={ isOpen } changeOpenState={ changeOpenState } index={ index } product={ product } />
        </>
    )
}
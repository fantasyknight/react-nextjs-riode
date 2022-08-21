import { useState } from 'react';
import { Magnifier } from 'react-image-magnifiers';

import OwlCarousel from '~/components/features/owl-carousel';

import MediaLightBox from '~/components/partials/product/light-box';

import { mainSlider18 } from '~/utils/data/carousel';

export default function MediaFour( props ) {
    const { product } = props;
    const [ isOpen, setOpenState ] = useState( false );
    const [ index, setIndex ] = useState( 0 );

    let lgImages = product.large_pictures ? product.large_pictures : product.pictures;

    const changeOpenState = openState => {
        setOpenState( openState );
    }

    const openLightBox = ( e ) => {
        e.preventDefault();
        setIndex( parseInt( e.currentTarget.getAttribute( "index" ) ) );
        setOpenState( true );
    }

    return (
        <div className="product-gallery product-extended mb-6">
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

            <OwlCarousel adClass="product-gallery-carousel owl-nav-full owl-theme"
                options={ mainSlider18 }
            >
                {
                    lgImages.map( ( image, index ) =>
                        <div key={ image + '-' + index }>
                            <Magnifier
                                imageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                imageAlt="magnifier"
                                largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + image.url }
                                dragToMove={ false }
                                mouseActivation="hover"
                                cursorStyleActive="crosshair"
                                className="product-image large-image"

                            />

                            <a href="#" className="product-image-full" onClick={ openLightBox } index={ index }><i className="d-icon-zoom"></i></a>
                        </div>
                    ) }
            </OwlCarousel>

            <MediaLightBox images={ lgImages } isOpen={ isOpen } changeOpenState={ changeOpenState } index={ index } product={ product } />
        </div>
    )
}
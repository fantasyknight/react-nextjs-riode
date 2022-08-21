import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import { blurIn } from '~/utils/data/keyframes';

function CtaSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner banner-background parallax text-center" data-option="{'speed': 4}" style={ { backgroundImage: `url(./images/parallax.jpg)`, backgroundColor: "#313237" } }>
            <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white font-weight-bold ls-l">
                            Extra<span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">30% Off</span>Online
                        </h4>

                        <h3 className="banner-title font-weight-bold text-white">Summer Season Sale</h3>

                        <p className="text-white ls-s">Free shipping on orders over $99</p>

                        <ALink href="/shop" className="btn btn-primary btn-rounded btn-icon-right">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( CtaSection );
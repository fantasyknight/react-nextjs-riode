import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox ( props ) {
    return (
        <div className="container mt-6">
            <div className="service-list">
                <OwlCarousel adClass="owl-theme" options={ serviceSlider }>
                    <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                        <div className="icon-box icon-box-side icon-box1">
                            <i className="icon-box-icon d-icon-truck"></i>

                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-capitalize ls-normal lh-1">Free Shipping &amp; Return</h4>

                                <p className="ls-s lh-1">Free shipping on orders over $99</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                        <div className="icon-box icon-box-side icon-box2">
                            <i className="icon-box-icon d-icon-service"></i>

                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-capitalize ls-normal lh-1">Customer Support 24/7</h4>

                                <p className="ls-s lh-1">Instant access to perfect support</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="icon-box icon-box-side icon-box3">
                            <i className="icon-box-icon d-icon-secure"></i>

                            <div className="icon-box-content">
                                <h4 className="icon-box-title text-capitalize ls-normal lh-1">100% Secure Payment</h4>

                                <p className="ls-s lh-1">We ensure secure payment!</p>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default React.memo( ServiceBox );
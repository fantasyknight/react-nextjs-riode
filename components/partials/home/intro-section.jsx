import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn, fadeInUp, fadeInRight } from '~/utils/data/keyframes';

function IntroSection( props ) {
    return (
        <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white intro-slider animation-slider" options={ introSlider }>
            <div className="banner banner-fixed intro-slide1" style={ { backgroundColor: "#46b2e8" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/slide1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 630 }
                    />
                </figure>

                <div className="container">
                    <div className="banner-content y-50">
                        <h4 className="banner-subtitle font-weight-bold ls-l d-flex align-items-center">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <span className="d-inline-block">Buy 2 Get</span>
                            </Reveal>

                            <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1000 }>
                                <span className="d-inline-block label-star bg-white text-primary">1 Free</span>
                            </Reveal>
                        </h4>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                            <h2 className="banner-title font-weight-bold text-white lh-1 ls-md">Fashionable</h2>

                            <h3 className="font-weight-normal lh-1 ls-l text-white">Collection</h3>

                            <p className="text-white ls-s mb-7">Get Free Shipping on all orders over $99.00</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-rounded" >Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#dddee0" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/slide2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 630 }
                    />
                </figure>

                <div className="container">
                    <div className="banner-content y-50 ml-auto text-right">
                        <Reveal keyframes={ fadeInUp } delay={ 200 } duration={ 700 }>
                            <h4 className="banner-subtitle ls-s mb-1">
                                <span className="d-block text-uppercase mb-2">Coming soon</span>

                                <strong className="font-weight-semi-bold ls-m">Riode Birthday</strong>
                            </h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInRight } delay={ 500 } duration={ 1200 }>
                            <h2 className="banner-title mb-2 d-inline-block font-weight-bold text-primary">Sale</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 1200 } duration={ 1000 }>
                            <p className="font-primary ls-s text-dark mb-4">
                                Up to 70% off on all products <br />online &amp; Free Shipping over $90
                            </p>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 1400 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="banner banner-fixed video-banner intro-slide3" style={ { backgroundColor: "#dddee0" } }>
                <figure>
                    <video src={ process.env.NEXT_PUBLIC_ASSET_URI + "/uploads/video/video-1.mp4" } width="1903" height="630" autoPlay={ true } muted loop></video>
                </figure>

                <div className="container">
                    <div className="banner-content x-50 y-50 text-center">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 700 }>
                            <h4 className="banner-subtitle text-white text-uppercase mb-3 ls-normal">Check out our</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 500 } duration={ 700 }>
                            <h2 className="banner-title mb-3 text-white font-weight-bold text-uppercase ls-m">Summer Season's</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 800 } duration={ 1000 }>
                            <p className="mb-7 text-white ls-s font-primary">Up to 50% Off this Season’s &amp; Get free shipping<br />on all orders over $199.00</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1500 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark btn-rounded mb-1">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo( IntroSection );
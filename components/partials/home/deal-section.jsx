import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function DealSection () {
    return (
        <section className="banner-group mt-4">
            <div className="container">
                <h2 className="title d-none">Banner Group</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-3 banner-fixed banner-radius content-middle overlay-zoom">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/banners/banner1.jpg"
                                        alt="Banner Image"
                                        effect="opacity, transform"
                                        width={ 100 }
                                        height={ 220 }
                                    />
                                </figure>

                                <div className="banner-content">
                                    <h3 className="banner-title text-white mb-1">For Men's</h3>

                                    <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">Starting at $29</h4>

                                    <hr className="banner-divider" />

                                    <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-4 mb-4 order-lg-auto order-sm-last">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-4 banner-fixed banner-radius content-middle content-center overlay-effect-two">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/banners/banner2.jpg"
                                        alt="Banner Image"
                                        effect="opacity"
                                        width={ 100 }
                                        height={ 220 }
                                    />
                                </figure>

                                <div className="banner-content d-flex align-items-center w-100 text-left">
                                    <div className="mr-auto mb-4 mb-md-0">
                                        <h4 className="banner-subtitle text-white">Up to 20% Off<br /><span className="ls-l">Black Friday</span></h4>
                                        <h3 className="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
                                    </div>
                                    <ALink href="/shop" className="btn btn-primary btn-outline btn-rounded font-weight-bold text-white">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-4 col-sm-6 mb-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-5 banner-fixed banner-radius content-middle overlay-zoom">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/banners/banner3.jpg"
                                        alt="Banner Image"
                                        effect="opacity, transform"
                                        width={ 100 }
                                        height={ 220 }
                                    />
                                </figure>

                                <div className="banner-content">
                                    <h3 className="banner-title text-white mb-1">Fashions</h3>
                                    <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">30% Off</h4>
                                    <hr className="banner-divider" />
                                    <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default React.memo( DealSection );
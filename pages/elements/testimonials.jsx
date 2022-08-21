import Helmet from 'react-helmet';
import React, { useEffect } from 'react';

import Breadcrumb from '~/components/features/breadcrumb';
import OwlCarousel from '~/components/features/owl-carousel';

import ElementsList from '~/components/partials/elements/elements-list';

import { mainSlider4, mainSlider6, mainSlider7 } from '~/utils/data/carousel';
import { parallaxHandler } from '~/utils';


function ElementTabs () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Testimonials</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Testimonials</h1>

            <Breadcrumb subTitle="Elements" title="Element Tabs" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-8">
                    <div className="container">
                        <h2 className="title title-center mb-5">Default</h2>
                        <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                            <div className="testimonial">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/1.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/2.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/3.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-6">
                    <div className="container">
                        <h2 className="title title-center">Inversed</h2>
                        <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                            <div className="testimonial testimonial-inversed">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/1.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-inversed">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/2.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-inversed">
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
                                    nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/3.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-6">
                    <div className="container">
                        <h2 className="title title-center">Centered</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                            <div className="testimonial testimonial-centered">
                                <div className="testimonial-info">
                                    <h3 className="testimonial-title">What they say about us</h3>
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/4.jpg" alt="user" width="40" height="40" />
                                    </figure>
                                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                                    <cite>
                                        Herman Beck
                                        <span>Customer</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-centered testimonial-border">
                                <div className="testimonial-info">
                                    <h3 className="testimonial-title">What they say about us</h3>
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/4.jpg" alt="user" width="40" height="40" />
                                    </figure>
                                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                                    <cite>
                                        Mary Adams
                                        <span>Customer</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-centered">
                                <div className="testimonial-info">
                                    <h3 className="testimonial-title">What they say about us</h3>
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/5.jpg" alt="user" width="40" height="40" />
                                    </figure>
                                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                                    <cite>
                                        Owen Hunt
                                        <span>Customer</span>
                                    </cite>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-6 mb-8 pb-2">
                    <div className="container">
                        <h2 className="title title-center">Slider</h2>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <OwlCarousel adClass="owl-nav-bottom" options={ mainSlider7 }>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                        </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/1.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                        </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/2.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                        </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/3.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>

                            <div className="col-md-6 mb-6">
                                <OwlCarousel adClass="owl-nav-bottom" options={ mainSlider7 }>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                            </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/1.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                    <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                            </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/2.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                    <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
                                        eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
                                        consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
                                            </blockquote>
                                        <div className="testimonial-info">
                                            <figure className="testimonial-author-thumbnail">
                                                <img src="./images/agents/3.jpg" alt="user" width="50" height="50" />
                                            </figure>
                                            <cite>
                                                Herman Beck
                                                    <span>Investor</span>
                                            </cite>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-10 parallax" style={ {
                    backgroundImage: "url('./images/banner.jpg')"
                } } >
                    <div className="container mt-4 mb-4">
                        <h2 className="title title-center title-white mb-0">Centered on background</h2>

                        <OwlCarousel adClass="owl-theme owl-dot-white" options={ mainSlider4 }>
                            <div className="testimonial testimonial-centered testimonial-bg">
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/4.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                    mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
                                        placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
                                    <cite>
                                        Charly Simth
                                        <span>Customer</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-centered testimonial-bg">
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/5.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                    mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
                                        placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="testimonial testimonial-centered testimonial-bg">
                                <div className="testimonial-info">
                                    <figure className="testimonial-author-thumbnail">
                                        <img src="./images/agents/2.jpg" alt="user" width="50" height="50" />
                                    </figure>
                                    <blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                    mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
                                        placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
                                    <cite>
                                        Herman Beck
                                        <span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <ElementsList adClass="bg-white mt-10" />
            </div>
        </>
    )
}

export default React.memo( ElementTabs );
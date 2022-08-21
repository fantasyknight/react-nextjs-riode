import React from 'react';
import Helmet from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import Breadcrumb from '~/components/features/breadcrumb';
import OwlCarousel from '~/components/features/owl-carousel';

import ElementsList from '~/components/partials/elements/elements-list';

import { mainSlider8, mainSlider9 } from '~/utils/data/carousel';

function Instagrams () {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Instagrams</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Instagrams</h1>

            <Breadcrumb subTitle="Elements" title="Element Instagram" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-8 mb-10 pb-4">
                    <div className="container">
                        <h2 className="title title-center">Default</h2>
                        <OwlCarousel adClass="owl-theme" options={ mainSlider9 }>

                            <figure className="instagram">
                                <ALink href="#">
                                    <LazyLoadImage
                                        src="./images/instagram/1.jpg"
                                        alt="Instagram"
                                        width="220"
                                        height="220"
                                        effect="opacity; transform"
                                        style={ { backgroundColor: "#BDD0DE" } }
                                    />
                                </ALink>
                            </figure>
                            <figure className="instagram">
                                <ALink href="#">
                                    <LazyLoadImage
                                        src="./images/instagram/2.jpg"
                                        alt="Instagram"
                                        width="220"
                                        height="220"
                                        effect="opacity; transform"
                                        style={ { backgroundColor: "#BDD0DE" } }
                                    />
                                </ALink>
                            </figure>
                            <figure className="instagram">
                                <ALink href="#">
                                    <LazyLoadImage
                                        src="./images/instagram/3.jpg"
                                        alt="Instagram"
                                        width="220"
                                        height="220"
                                        effect="opacity; transform"
                                        style={ { backgroundColor: "#BDD0DE" } }
                                    />
                                </ALink>
                            </figure>
                            <figure className="instagram">
                                <ALink href="#">
                                    <LazyLoadImage
                                        src="./images/instagram/4.jpg"
                                        alt="Instagram"
                                        width="220"
                                        height="220"
                                        effect="opacity; transform"
                                        style={ { backgroundColor: "#BDD0DE" } }
                                    />
                                </ALink>
                            </figure>
                            <figure className="instagram">
                                <ALink href="#">
                                    <LazyLoadImage
                                        src="./images/instagram/5.jpg"
                                        alt="Instagram"
                                        width="220"
                                        height="220"
                                        effect="opacity; transform"
                                        style={ { backgroundColor: "#BDD0DE" } }
                                    />
                                </ALink>
                            </figure>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4">
                        <h2 className="title title-center">Full Width</h2>
                    </div>

                    <OwlCarousel adClass="owl-theme gutter-no mb-4" options={ mainSlider8 }>
                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/6.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>136</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>136</ALink>
                            </div>
                        </figure>

                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/7.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>47</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>42</ALink>
                            </div>
                        </figure>

                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/8.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>6</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>11</ALink>
                            </div>
                        </figure>

                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/9.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>9</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>25</ALink>
                            </div>
                        </figure>

                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/10.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>11</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>11</ALink>
                            </div>
                        </figure>

                        <figure className="instagram instagram-info">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/instagram/11.jpg"
                                    alt="Instagram"
                                    width="220"
                                    height="220"
                                    effect="opacity; transform"
                                    style={ { backgroundColor: "#BDD0DE" } }
                                />
                            </ALink>

                            <div className="instagram-content">
                                <ALink href="#"><i className="d-icon-heart"></i>8</ALink>
                                <ALink href="#"><i className="d-icon-comments"></i>17</ALink>
                            </div>
                        </figure>
                    </OwlCarousel>
                </section>

                <section className="mt-10 pt-4 mb-10 pb-4">
                    <div className="container">
                        <h2 className="title title-center">Masonry</h2>

                        <div className="row grid instagram-masonry">
                            <div className="grid-item height-x2">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/12.jpg"
                                            alt="Instagram"
                                            width="580"
                                            height="346"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x15">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/13.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="249"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x1">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/14.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="188"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x2">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/15.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="322"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x25">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/16.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="465"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x2">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/17.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="367"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x1">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/18.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="176"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x1">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/19.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="176"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                            <div className="grid-item height-x1">
                                <figure className="instagram">
                                    <ALink href="#">
                                        <LazyLoadImage
                                            src="./images/instagram/20.jpg"
                                            alt="Instagram"
                                            width="280"
                                            height="188"
                                            effect="opacity; transform"
                                            style={ { backgroundColor: "#f4f4f4" } }
                                        />
                                    </ALink>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                <ElementsList adClass="mt-9" />
            </div>
        </>
    )
}

export default React.memo( Instagrams );
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import ALink from '~/components/features/custom-link';
import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

import { parallaxHandler } from '~/utils';

function Buttons() {
    useEffect(() => {
        window.addEventListener('scroll', parallaxHandler, true);

        return () => {
            window.removeEventListener('scroll', parallaxHandler, true);
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Buttons</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Buttons</h1>

            <Breadcrumb subTitle="Elements" title="Element Buttons" parentUrl="/elements" />

            <div className="page-content mt-10 pt-10">
                <section className="section-buttons">
                    <div className="container">
                        <div className="mb-10 pb-2">
                            <div className="title-wrapper">
                                <h2 className="title title-center">Default Style</h2>
                                <p className="text-center">Select between any button styles and color you want.</p>
                            </div>

                            <div className="row">
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block">Default</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-primary btn-block">Primary Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-secondary btn-block">Secondary Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-alert btn-block">Alert Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-success btn-block">Success Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-dark btn-block">Dark Color</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb-10">
                                <h2 className="title title-sm title-center ">Default Border</h2>
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-outline btn-block">Default</ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-outline btn-primary btn-block">Primary Color</ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-outline btn-secondary btn-block">Secondary Color</ALink>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 mb-10">
                                <h2 className="title title-sm title-center">Light Border</h2>
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-outline btn-outline-light btn-alert btn-block">Alert
                                            Color</ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-outline btn-outline-light btn-success btn-block">Success
                                            Color</ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-outline btn-outline-light btn-dark btn-block">Dark
                                            Color</ALink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-buttons grey-section pt-10">
                    <div className="container">
                        <div className="mb-10 mt-4 pb-2">
                            <div className="title-wrapper">
                                <h2 className="title title-center">Flat With Icon</h2>
                                <p className="text-center">Add included Riode icons to default buttons, using any color.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-icon-left btn-slide-left"><i
                                        className="d-icon-arrow-left"></i><span>Slide Left</span></ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-icon-left btn-slide-right"><i
                                        className="d-icon-arrow-right"></i><span>Slide Right</span></ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-icon-left btn-slide-up"><i
                                        className="d-icon-arrow-up"></i><span>Slide Up</span></ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-icon-left btn-slide-down"><i
                                        className="d-icon-arrow-down"></i><span>Slide Down</span></ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-reveal-left"><i
                                        className="d-icon-arrow-left"></i><span>Reveal Left</span></ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-reveal-right"><span>Reveal Right</span><i
                                        className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb-10">
                                <h2 className="title title-sm title-center">Shadow</h2>
                                <div className="row">
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-shadow-sm btn-white btn-block"><span>Shadow1</span></ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#" className="btn btn-shadow btn-white btn-block"><span>Shadow2</span></ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-shadow-lg btn-white btn-block"><span>Shadow3</span></ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-primary btn-shadow-lg btn-rounded btn-block"><span>Rounded</span></ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-primary btn-shadow-lg btn-ellipse btn-block"><span>Ellipse</span></ALink>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                        <ALink href="#"
                                            className="btn btn-shadow btn-disabled btn-block "><span>Disabled</span></ALink>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 mb-10">
                                <h2 className="title title-sm title-center">Block With Icon</h2>
                                <ALink className="btn btn-outline btn-block" href="#">Full Width</ALink>
                                <ALink className="btn btn-primary btn-block btn-icon-right" href="#">Full Width</ALink>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-buttons pt-10">
                    <div className="container">
                        <div className="btn-simple-wrapper mb-10 mt-4 pb-1">
                            <h2 className="title title-center mb-7">Simple Button</h2>

                            <div className="row align-items-center">
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-underline sm btn-link">Underline 1</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-underline btn-link">Underline 2</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-underline lg btn-link">Underline 3</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-primary btn-link">Primary Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-secondary btn-link">Secondary Color</ALink>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <ALink href="#" className="btn btn-block btn-success btn-link">Success Color</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10 pb-1">
                            <div className="title-wrapper">
                                <h2 className="title title-center">Shape & Size</h2>
                                <p className="text-center mb-2">Size might vary from smaller screen to a larger screen.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 btn-wrapper">
                                    <ALink href="#" className="btn btn-outline btn-lg">Large Size</ALink>

                                    <ALink href="#" className="btn btn-outline">Normal Size</ALink>

                                    <ALink href="#" className="btn btn-outline btn-md">Medium Size</ALink>

                                    <ALink href="#" className="btn btn-outline btn-sm">Small Size</ALink>
                                </div>
                                <div className="col-lg-6 btn-wrapper">
                                    <ALink href="#" className="btn btn-block btn-outline">Rectangle</ALink>

                                    <ALink href="#" className="btn btn-block btn-outline btn-rounded">Rounded</ALink>

                                    <ALink href="#" className="btn btn-block btn-outline btn-ellipse">Ellipse</ALink>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section-buttons background-section parallax" data-option="{'speed': 1}"
                    style={{ backgroundImage: 'url(./images/buttons/banner.jpg)' }}>
                    <div className="container">
                        <div className="title-wrapper title-white">
                            <h2 className="title title-center">On Background</h2>
                            <p className="text-center">These are the Button Style on dark Background.</p>
                        </div>

                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-block">Default</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-primary btn-block">Primary Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-secondary btn-block">Secondary Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-alert btn-block">Alert Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-success btn-block">Success Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-dark btn-block">Dark Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-block btn-bg">Default</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-primary btn-block">Primary Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-secondary btn-block">Secondary Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-alert btn-block">Alert Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-success btn-block">Success Color</ALink>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <ALink href="#" className="btn btn-outline btn-block btn-white">White Color</ALink>
                            </div>
                        </div>
                    </div>
                </section>

                <ElementsList />
            </div >
        </>
    )
}

export default React.memo(Buttons);
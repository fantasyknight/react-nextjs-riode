import React from 'react';
import Helmet from 'react-helmet';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import Accordion from '~/components/features/accordion/accordion';
import Card from '~/components/features/accordion/card';

import { fadeIn } from '~/utils/data/keyframes';

function ComingSoon() {
    return (
        <main className="main faq">
            <Helmet>
                <title>Riode React eCommerce Template | FAQs</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - FAQs</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </nav>

            <div className="page-header" style={ { backgroundImage: 'url(images/page-header/faq.jpg)' } }>
                <h3 className="page-subtitle lh-1">Frequently</h3>
                <h1 className="page-title font-weight-bold text-capitalize lh-1">Asked Questions</h1>
            </div>

            <div className="page-content mb-10 pb-8">
                <Reveal keyframes={ fadeIn } delay="100" duration="1000" triggerOnce>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m text-left">Customer Management</h2>

                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <Card title="How can add vendor role to the customer?" expanded={ true }>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
                                        </Card>

                                        <Card title="What benefits a customer can take?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                                    justo eget felis facilisis fermentum.</p>
                                        </Card>

                                        <Card title="How to change customer's address?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                    </Accordion>
                                </div>

                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m">Product Type</h2>
                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <Card title="What is difference between simple & variable product?" expanded={ true }>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>

                                        <Card title="How to buy several products at once?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                                    justo eget felis facilisis fermentum.</p>
                                        </Card>

                                        <Card title="How to add downloadable product?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                                    justo eget felis facilisis fermentum.</p>
                                        </Card>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="100" duration="1000" triggerOnce>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m">Ordering Products</h2>

                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <Card title="How can a guest order the product?" expanded={ true }>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>

                                        <Card title="What kind of payment methods are available?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="What is benefit of paypal payment?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="How to register as a customer?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="What is the preferable way to buy product?">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="col-md-6 mt-10">
                                    <h2 className="title pl-2 pr-2 ls-m">The Others</h2>

                                    <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                        <Card title="How can I return an purchased item online?" expanded={ true }>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="How to add coupon code?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="How can I find theme style?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                        <Card title="What are the delivery types you can use?">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                        </Card>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </div>
        </main >
    )
}

export default React.memo( ComingSoon );
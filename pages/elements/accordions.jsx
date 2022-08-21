import React from 'react';
import Helmet from 'react-helmet';

import Breadcrumb from '~/components/features/breadcrumb';
import Accordion from '~/components/features/accordion/accordion';
import Card from '~/components/features/accordion/card';

import ElementList from '~/components/partials/elements/elements-list';

function Accordions() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Accordions</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Accordions</h1>

            <Breadcrumb subTitle="Elements" title="Element Accordions" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-6 pt-10 pb-10 mb-7">
                    <div className="container">
                        <h2 className="title title-center mb-5">Simple</h2>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <Accordion adClass="accordion-simple">
                                    <Card title="First Header" expanded={ true } adClass="border-no">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                        justo eget felis facilisis fermentum.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                        justo eget felis facilisis fermentum.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                        justo eget felis facilisis fermentum.</p>
                                    </Card>
                                </Accordion>
                            </div>

                            <div className="col-md-6 mb-6">
                                <Accordion adClass="accordion-border accordion-boxed accordion-plus">
                                    <Card title="First Header" expanded={ true }>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget felis facilisis fermentum.</p>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-8 grey-section">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <h2 className="title title-sm title-center mb-5">On Background</h2>
                                <Accordion adClass="accordion-boxed accordion-plus accordion-gutter-md">
                                    <Card title="First Header" expanded={ true }>
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="col-md-6 mb-6">
                                <h2 className="title title-sm title-center mb-5">Drop Shadow</h2>
                                <Accordion adClass="accordion accordion-dropshadow accordion-boxed accordion-plus accordion-gutter-sm">
                                    <Card title="First Header" expanded={ true }>
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-4 pt-10 pb-8">
                    <div className="container">
                        <h2 className="title title-center">Color</h2>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <Accordion adClass="accordion accordion-card-bg accordion-boxed accordion-plus accordion-gutter-md">
                                    <Card title="First Header" expanded={ true }>
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="col-md-6 mb-6">
                                <Accordion adClass="accordion accordion-card-bg accordion-primary accordion-boxed accordion-plus accordion-gutter-md">
                                    <Card title="First Header" expanded={ true }>
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Second Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>

                                    <Card title="Third Header">
                                        <p className="mb-0">De moveat laudatur vestra parum doloribus labitur
                                        sentire partes, eripuit praesenti congressus ostendit alienae,
                                        voluptati ornateque accusamus clamat reperietur convicia albucius,
                                        veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
                                            Aeternum animadversionis.</p>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container pt-4 pb-4">
                        <h2 className="title title-center">With icon</h2>
                        <Accordion adClass="accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm">
                            <Card title="First Header" expanded={ true } iconClass="far fa-heart">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.</p>
                            </Card>

                            <Card title="Second Header" iconClass="far fa-star">
                                <div className="card-body">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.</p>
                                </div>
                            </Card>

                            <Card title="Third Header" iconClass="la la-info-circle mr-2">
                                <div className="card-body">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.</p>
                                </div>
                            </Card>
                        </Accordion>
                    </div>
                </section>

                <ElementList adClass="bg-white" />
            </div>
        </>
    )
}

export default React.memo( Accordions );
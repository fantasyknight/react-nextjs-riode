import React from 'react';
import Helmet from 'react-helmet';

import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

function Typography() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Typography</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Typography</h1>

            <Breadcrumb subTitle="Elements" title="Element Typography" parentUrl="/elements" />

            <div className="page-content">
                <div className="container">
                    <section className="mt-10 pt-3">
                        <div className="title-wrapper">
                            <h2 className="title title-center mb-2">Headers</h2>
                            <p className="text-body text-center mb-2">We provide some basic styling to header tags. For
                                example,<br /> you can see 6 header tags' different sizes.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="text-uppercase mb-3">Heading h1</h1>
                                <p className="mb-6">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                                    lacinia arcu eget </p>
                                <h2 className="text-uppercase">Heading h2</h2>
                                <h3 className="text-uppercase">Heading h3</h3>
                                <h4 className="text-uppercase">Heading h4</h4>
                                <h5 className="text-uppercase">Heading h5</h5>
                                <h6 className="text-uppercase">Heading h6</h6>
                            </div>
                            <div className="col-md-6">
                                <h1 className="font-weight-bold mb-3">Heading h1</h1>
                                <p className="mb-6">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                                    lacinia arcu eget </p>
                                <h2 className="font-weight-bold">Heading h2</h2>
                                <h3 className="font-weight-bold">Heading h3</h3>
                                <h4 className="font-weight-bold">Heading h4</h4>
                                <h5 className="font-weight-bold">Heading h5</h5>
                                <h6 className="font-weight-bold">Heading h6</h6>
                            </div>
                        </div>
                    </section>
                    <section className="mt-8">
                        <h2 className="title title-center mb-4">Description With List</h2>
                        <div className="font-primary ">
                            <p className="mb-3">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                            mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                            eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Curabitur sodales ligula in libero. Vestibulum lacinia arcu eget
                                nulla. Class aptent taciti sociosqu </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list list-type-check mb-4">
                                        <li>Praesent id enim sit amet.</li>
                                        <li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.
                                        </li>
                                        <li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.
                                        </li>
                                        <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list list-type-number mb-4">
                                        <li>Praesent id enim sit amet.</li>
                                        <li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.
                                        </li>
                                        <li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.
                                        </li>
                                        <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-7">
                        <h2 className="title title-center mb-4">Blockquotes</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <blockquote className="text-bd-left">
                                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                    Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                                    eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos </p>
                                </blockquote>

                            </div>
                            <div className="col-md-6">
                                <blockquote className="text-bd-left">
                                    <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                    Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                                    eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <ElementsList adClass="mt-5" />
        </>
    )
}

export default React.memo( Typography );
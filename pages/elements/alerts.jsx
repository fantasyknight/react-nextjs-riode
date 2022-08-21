import React from 'react';
import Helmet from 'react-helmet';
import SlideToggle from 'react-slide-toggle';

import BreadCrumb from '~/components/features/breadcrumb';
import ALink from '~/components/features/custom-link';

import ElementsList from '~/components/partials/elements/elements-list';

function Alert( props ) {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Alert &amp; Notification</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Alert &amp; Notification</h1>

            <BreadCrumb
                subTitle="Elements"
                title="Element Alert & Notification"
                parentUrl="/elements"
            />

            <div className="page-content">
                <div className="container">
                    <section className="mt-10 pt-4">
                        <h2 className="title title-center mb-5">Simple</h2>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-primary alert-simple alert-inline">
                                                <h4 className="alert-title">News : </h4> You have done 5 actions.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-success alert-simple alert-inline">
                                                <h4 className="alert-title">Success : </h4> The page has been added.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-warning alert-simple alert-inline">
                                                <h4 className="alert-title">Warning : </h4> You have 190 messages.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-danger alert-simple alert-inline">
                                                <h4 className="alert-title">Danger : </h4> The daily report has failed.

                                    <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 pt-2">
                        <h2 className="title title-center mb-5">Dark</h2>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-primary alert-dark alert-round alert-inline">
                                                <h4 className="alert-title">News : </h4> You have done 5 actions.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-success alert-dark alert-round alert-inline">
                                                <h4 className="alert-title">Success : </h4> The page has been added.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-warning alert-dark alert-round alert-inline">
                                                <h4 className="alert-title">Warning : </h4> You have 190 messages.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-danger alert-dark alert-round alert-inline">
                                                <h4 className="alert-title">Danger : </h4> The daily report has failed.

                                            <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 pt-2">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <h2 className="title title-sm title-center mb-5">With Icon</h2>

                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-simple alert-primary alert-icon mb-4">
                                                <i className="fas fa-check"></i> You have done 5 actions.

                                            <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >

                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-light alert-primary alert-icon mb-4">
                                                <i className="fas fa-exclamation-circle"></i> The page has been added.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >

                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-light alert-danger alert-icon alert-inline mb-4">
                                                <i className="fas fa-exclamation-triangle"></i> <h4 className="alert-title">Oh snap! </h4> Change a few things up and try submitting again.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <h2 className="title title-sm title-center">With Title</h2>

                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-message alert-light alert-primary alert-link mb-4">
                                                <h4 className="alert-title">Some Message Link</h4>

                                                <p>Lorem ipsum Minim ad pariatur eiusmod ea ut <ALink href="#">nulla aliqua est quis</ALink> id pariat minim vot nulla aliqualuptate.</p>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >

                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-message alert-light alert-warning alert-inline mb-4">
                                                <h4 className="alert-title">Some Message</h4> <p>Lorem ipsum Minim ad pariatur eiusmod ea ut nulla quis id dolore minim vot nulla aliqualuptate.</p>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                        </div>
                    </section>

                    <section className="mt-10">
                        <h2 className="title title-center mb-5">With Button</h2>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-primary alert-simple alert-btn">
                                                <ALink href="#" className="btn btn-primary btn-md">NEWS </ALink> You have done 5 actions.

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-success alert-simple alert-btn">
                                                <ALink href="#" className="btn btn-success btn-md">SUCCESS </ALink> The page has been added.

                                            <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-message alert-warning alert-dark alert-btn">
                                                <h4 className="alert-title">Some Message</h4>

                                                <p>Lorem ipsum Minim ad pariatur eiusmod ea ut <ALink href="#" className="text-primary">nulla aliqua est quis</ALink> id pariat minim vot nulla aliqualuptate.</p>

                                                <ALink href="#" className="btn btn-secondary btn-md mr-1">Do This</ALink>

                                                <ALink href="#" className="btn btn-secondary btn-md">Or This</ALink>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>

                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-message alert-warning alert-light alert-btn">
                                                <h4 className="alert-title">Some Message</h4>

                                                <p>Lorem ipsum Minim ad pariatur eiusmod ea ut <ALink href="#">nulla aliqua est quis</ALink> id pariat minim vot nulla aliqualuptate.</p>

                                                <ALink href="#" className="btn btn-secondary btn-md mr-1">Do This</ALink>

                                                <ALink href="#" className="btn btn-secondary btn-md">Or This</ALink>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 pt-2">
                        <h2 className="title title-center mb-5">Summary</h2>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-danger alert-summary alert-light alert-message alert-inline">
                                                <i className="fas fa-exclamation-triangle"></i> <h4 className="alert-title">Oh snap! </h4>Change a few things up and try submitting
                                                again.

                                                <ul>
                                                    <li>Inform your username</li>

                                                    <li>Inform your password</li>
                                                </ul>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                            <div className="col-md-6 mb-4">
                                <SlideToggle expanded={ true } >
                                    { ( { onToggle, setCollapsibleElement } ) => (
                                        <div ref={ setCollapsibleElement } className="overflow-hidden">
                                            <div className="alert alert-summary alert-dark alert-black alert-message alert-inline">
                                                <i className="fas fa-exclamation-triangle"></i> <h4 className="alert-title">Oh snap!</h4>Change a few things up and try submitting
                                                again.

                                                <ul>
                                                    <li>Inform your username</li>

                                                    <li>Inform your password</li>
                                                </ul>

                                                <button type="button" className="btn btn-link btn-close">
                                                    <i className="d-icon-times" onClick={ onToggle }></i>
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </SlideToggle >
                            </div>
                        </div>
                    </section>

                </div>

                <ElementsList adClass="mt-10" />
            </div>
        </>
    )
}

export default React.memo( Alert );
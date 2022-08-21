import React from 'react';
import Helmet from 'react-helmet';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

function ElementTabs() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Tabs</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Tabs</h1>

            <Breadcrumb subTitle="Elements" title="Element Tabs" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-8">
                    <div className="container">
                        <h2 className="title title-center mb-5">Simple</h2>

                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-nav-simple">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                            pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>

                            <div className="col-lg-6 mb-4">
                                <div className="tab tab-nav-simple tab-nav-center tab-nav-boxed">
                                    <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 }>
                                        <TabList className="nav nav-tabs" role="tablist">
                                            <Tab className="nav-item">
                                                <span className="nav-link">First header</span>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <span className="nav-link">Second header</span>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <span className="nav-link">Third header</span>
                                            </Tab>
                                        </TabList>
                                        <div className="tab-content">
                                            <TabPanel className="tab-pane">
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                                turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                    mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                            </TabPanel>

                                            <TabPanel className="tab-pane">
                                                <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                                nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                                ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                    blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                            </TabPanel>

                                            <TabPanel className="tab-pane">
                                                <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                                lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                                euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                    dapibus eu, fermentum et, dapibus sed, urna.</p>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container">
                        <h2 className="title title-center">With Color</h2>

                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-nav-boxed tab-nav-solid">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                            pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>

                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-nav-center tab-nav-boxed tab-nav-solid tab-nav-round">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                            pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container">
                        <h2 className="title title-center">Boxed Style</h2>

                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-boxed tab-nav-boxed tab-outline">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                            pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                mauris sit amet orci.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>

                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-nav-center tab-nav-boxed tab-boxed tab-outline2">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                            pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
                                                mauris sit amet orci.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-9 mb-10">
                    <div className="container">
                        <h2 className="title title-center">Vertical Style</h2>

                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-vertical tab-nav-solid">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum. </p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>

                            <div className="col-lg-6 mb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-vertical tab-simple">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum. </p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 grey-section">
                    <div className="container mt-3">
                        <h2 className="title title-center">Inverse Style</h2>
                        <div className="row">
                            <div className="col-lg-6 mb-10 pb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-boxed tab-nav-boxed tab-simple tab-inverse">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                            <div className="col-lg-6 mb-10 pb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-vertical tab-boxed tab-inverse h-100">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                            <div className="col-lg-6 mb-10 pb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-boxed tab-nav-boxed tab-nav-solid tab-inverse">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane" >
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane" >
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane" >
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                            <div className="col-lg-6 mb-10 pb-4">
                                <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-vertical tab-nav-solid tab-boxed tab-inverse h-100">
                                    <TabList className="nav nav-tabs" role="tablist">
                                        <Tab className="nav-item">
                                            <span className="nav-link">First header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Second header</span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link">Third header</span>
                                        </Tab>
                                    </TabList>
                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis facilisis fermentum.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                            nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                        </TabPanel>
                                        <TabPanel className="tab-pane">
                                            <p className="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                <ElementsList adClass="bg-white mt-10" />
            </div>
        </>
    )
}

export default React.memo( ElementTabs );
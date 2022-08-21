import React from 'react';
import Helmet from 'react-helmet';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

function Icons() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Icons</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Icons</h1>

            <Breadcrumb subTitle="Elements" title="Element Icons" parentUrl="/elements" />

            <div className="page-content mt-10 pt-3">
                <section className="sample-icons container">
                    <div className="title-wrap mb-6">
                        <h3 className="title title-center mb-2">Icons</h3>
                        <p className="text-center">Riode comes with Riode Icons and <a href="https://fontawesome.com/icons"
                            target="_blank" rel="noopener noreferrer" className="text-primary">Font Awesome 5 Icons </a> that can be used in
                                your website.</p>
                    </div>
                    <div className="row cols-xl-12 cols-md-6 cols-xs-4 cols-3 mb-4">
                        <div className="sample-icon-circle">
                            <i className="d-icon-officebag"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-basketball1"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-desktop"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-headphone"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-cook"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-backpack"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-gamepad1"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-camera2"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-tcard"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-camera2"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-category"></i>
                        </div>
                        <div className="sample-icon-circle">
                            <i className="d-icon-ball"></i>
                        </div>
                    </div>
                    <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={0} className="tab tab-boxed tab-nav-boxed tab-outline">
                        <TabList className="nav nav-tabs" role="tablist">
                            <Tab className="nav-item">
                                <a className="nav-link">Riode Icons</a>
                            </Tab>
                            <Tab className="nav-item">
                                <a className="nav-link">Font Awesome</a>
                            </Tab>
                        </TabList>
                        <div className="tab-content">
                            <TabPanel className="tab-pane pb-2">
                                <div className="row cols-lg-4 sample-icon-list">
                                    <div className="sample-icon">
                                        <i className="d-icon-truck"></i>
                                        <span className="name">d-icon-truck</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-service"></i>
                                        <span className="name">d-icon-service</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-secure"></i>
                                        <span className="name">d-icon-secure</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-lock"></i>
                                        <span className="name">d-icon-lock</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-percent"></i>
                                        <span className="name">d-icon-percent</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-layer"></i>
                                        <span className="name">d-icon-layer</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-alert"></i>
                                        <span className="name">d-icon-alert</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-database"></i>
                                        <span className="name">d-icon-database</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-money"></i>
                                        <span className="name">d-icon-money</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-shoppingbag"></i>
                                        <span className="name">d-icon-shoppingbag</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-t-shirt1"></i>
                                        <span className="name">d-icon-t-shirt1</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-t-shirt2"></i>
                                        <span className="name">d-icon-t-shirt2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-hat"></i>
                                        <span className="name">d-icon-hat</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-officebag"></i>
                                        <span className="name">d-icon-officebag</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-handbag"></i>
                                        <span className="name">d-icon-handbag</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-backpack"></i>
                                        <span className="name">d-icon-backpack</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-shoes"></i>
                                        <span className="name">d-icon-shoes</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-pillow"></i>
                                        <span className="name">d-icon-pillow</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-dress"></i>
                                        <span className="name">d-icon-dress</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-loungewear"></i>
                                        <span className="name">d-icon-loungewear</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-desktop"></i>
                                        <span className="name">d-icon-desktop</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-laptop"></i>
                                        <span className="name">d-icon-laptop</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-gamepad1"></i>
                                        <span className="name">d-icon-gamepad1</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-wireless"></i>
                                        <span className="name">d-icon-wireless</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-projector"></i>
                                        <span className="name">d-icon-projector</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-drone1"></i>
                                        <span className="name">d-icon-drone1</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-drone2"></i>
                                        <span className="name">d-icon-drone2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-radio"></i>
                                        <span className="name">d-icon-radio</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-battery"></i>
                                        <span className="name">d-icon-battery</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-plugin"></i>
                                        <span className="name">d-icon-plugin</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-memory"></i>
                                        <span className="name">d-icon-memory</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-ball"></i>
                                        <span className="name">d-icon-ball</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-basketball1"></i>
                                        <span className="name">d-icon-basketball1</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-babycare"></i>
                                        <span className="name">d-icon-babycare</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-card"></i>
                                        <span className="name">d-icon-card</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-gamepad2"></i>
                                        <span className="name">d-icon-gamepad2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-camera1"></i>
                                        <span className="name">d-icon-camera1</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-camera2"></i>
                                        <span className="name">d-icon-camera2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-babywear"></i>
                                        <span className="name">d-icon-babywear</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-abacus"></i>
                                        <span className="name">d-icon-abacus</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-pot"></i>
                                        <span className="name">d-icon-pot</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-freezer"></i>
                                        <span className="name">d-icon-freezer</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-cook"></i>
                                        <span className="name">d-icon-cook</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-student"></i>
                                        <span className="name">d-icon-student</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-category"></i>
                                        <span className="name">d-icon-category</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-basketball2"></i>
                                        <span className="name">d-icon-basketball2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-watch"></i>
                                        <span className="name">d-icon-watch</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-tcard"></i>
                                        <span className="name">d-icon-tcard</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-heartbeat"></i>
                                        <span className="name">d-icon-heartbeat</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-watch-round"></i>
                                        <span className="name">d-icon-watch-round</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-washbowl"></i>
                                        <span className="name">d-icon-washbowl</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-bridge-lamp"></i>
                                        <span className="name">d-icon-bridge-lamp</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-lamp"></i>
                                        <span className="name">d-icon-lamp</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-sofa"></i>
                                        <span className="name">d-icon-sofa</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-sofa2"></i>
                                        <span className="name">d-icon-sofa2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-bed"></i>
                                        <span className="name">d-icon-bed</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-table"></i>
                                        <span className="name">d-icon-table</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-table-lamp"></i>
                                        <span className="name">d-icon-table-lamp</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-table-tv"></i>
                                        <span className="name">d-icon-table-tv</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-mirror"></i>
                                        <span className="name">d-icon-mirror</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-volume"></i>
                                        <span className="name">d-icon-volume</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-bars2"></i>
                                        <span className="name">d-icon-bars2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-bars"></i>
                                        <span className="name">d-icon-bars</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-phone"></i>
                                        <span className="name">d-icon-phone</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-user"></i>
                                        <span className="name">d-icon-user</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-search"></i>
                                        <span className="name">d-icon-search</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-bag"></i>
                                        <span className="name">d-icon-bag</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-map"></i>
                                        <span className="name">d-icon-map</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-info"></i>
                                        <span className="name">d-icon-info</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-refresh"></i>
                                        <span className="name">d-icon-refresh</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-ruler"></i>
                                        <span className="name">d-icon-ruler</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-zoom"></i>
                                        <span className="name">d-icon-zoom</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-star"></i>
                                        <span className="name">d-icon-star</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-star-full"></i>
                                        <span className="name">d-icon-star-full</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-heart"></i>
                                        <span className="name">d-icon-heart</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-heart-full"></i>
                                        <span className="name">d-icon-heart-full</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-close"></i>
                                        <span className="name">d-icon-close</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-play-circle"></i>
                                        <span className="name">d-icon-play-circle</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-home"></i>
                                        <span className="name">d-icon-home</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-filter-2"></i>
                                        <span className="name">d-icon-filter-2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-switch"></i>
                                        <span className="name">d-icon-switch</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-switch-left-on"></i>
                                        <span className="name">d-icon-switch-left-on</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-switch-right-on"></i>
                                        <span className="name">d-icon-switch-right-on</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-filter-2"></i>
                                        <span className="name">d-icon-filter-2</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-alert-solid"></i>
                                        <span className="name">d-icon-alert-solid</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-headphone"></i>
                                        <span className="name">d-icon-headphone</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-mode-grid"></i>
                                        <span className="name">d-icon-mode-grid</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-mode-list"></i>
                                        <span className="name">d-icon-mode-list</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-left"></i>
                                        <span className="name">d-icon-angle-left</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-right"></i>
                                        <span className="name">d-icon-angle-right</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-cancel"></i>
                                        <span className="name">d-icon-cancel</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-instagram"></i>
                                        <span className="name">d-icon-instagram</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-check"></i>
                                        <span className="name">d-icon-check</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-play-solid"></i>
                                        <span className="name">d-icon-play-solid</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-right"></i>
                                        <span className="name">d-icon-angle-right</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-up"></i>
                                        <span className="name">d-icon-angle-up</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-down"></i>
                                        <span className="name">d-icon-angle-down</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-angle-left"></i>
                                        <span className="name">d-icon-angle-left</span>
                                    </div>

                                    <div className="sample-icon">
                                        <i className="d-icon-mobile"></i>
                                        <span className="name">d-icon-mobile</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-minus"></i>
                                        <span className="name">d-icon-minus</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-plus"></i>
                                        <span className="name">d-icon-plus</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-wifi"></i>
                                        <span className="name">d-icon-wifi</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-times"></i>
                                        <span className="name">d-icon-times</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-times-circle"></i>
                                        <span className="name">d-icon-times-circle</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-random"></i>
                                        <span className="name">d-icon-random</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-th-list"></i>
                                        <span className="name">d-icon-th-list</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-rocket"></i>
                                        <span className="name">d-icon-rocket</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-map-marker"></i>
                                        <span className="name">d-icon-map-marker</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-birthday-cake"></i>
                                        <span className="name">d-icon-birthday-cake</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-gift"></i>
                                        <span className="name">d-icon-gift</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-female"></i>
                                        <span className="name">d-icon-female</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-clock"></i>
                                        <span className="name">d-icon-clock</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-comments"></i>
                                        <span className="name">d-icon-comments</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-arrow-down"></i>
                                        <span className="name">d-icon-arrow-down</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-arrow-left"></i>
                                        <span className="name">d-icon-arrow-left</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-arrow-right"></i>
                                        <span className="name">d-icon-arrow-right</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-arrow-up"></i>
                                        <span className="name">d-icon-arrow-up</span>
                                    </div>

                                    <div className="sample-icon">
                                        <i className="d-icon-rotate-left"></i>
                                        <span className="name">d-icon-rotate-left</span>
                                    </div>
                                    <div className="sample-icon">
                                        <i className="d-icon-rotate-right"></i>
                                        <span className="name">d-icon-rotate-right</span>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel className="tab-pane pb-2">
                                <h5 className="mb-3">Solid Icons</h5>
                                <div className="mb-4">
                                    <div className="wpb_wrapper">
                                        <div className="row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1">
                                            <div className="sample-icon"><i className="fas fa-ad"></i>
                                                <span>ad</span></div>
                                            <div className="sample-icon"><i className="fas fa-address-book"></i>
                                                <span>address-book</span></div>
                                            <div className="sample-icon"><i className="fas fa-address-card"></i>
                                                <span>address-card</span></div>
                                            <div className="sample-icon"><i className="fas fa-adjust"></i>
                                                <span>adjust</span></div>
                                            <div className="sample-icon"><i className="fas fa-air-freshener"></i>
                                                <span>air-freshener</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-align-center"></i>
                                                <span>align-center</span></div>
                                            <div className="sample-icon"><i className="fas fa-align-justify"></i>
                                                <span>align-justify</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-align-left"></i>
                                                <span>align-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-align-right"></i>
                                                <span>align-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-allergies"></i>
                                                <span>allergies</span></div>
                                            <div className="sample-icon"><i className="fas fa-ambulance"></i>
                                                <span>ambulance</span></div>
                                            <div className="sample-icon"><i
                                                className="fas fa-american-sign-language-interpreting"></i>
                                                <span>american-sign-language-interpreting</span></div>
                                            <div className="sample-icon"><i className="fas fa-anchor"></i>
                                                <span>anchor</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-double-down"></i>
                                                <span>angle-double-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-double-left"></i>
                                                <span>angle-double-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-double-right"></i>
                                                <span>angle-double-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-double-up"></i>
                                                <span>angle-double-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-angle-down"></i>
                                                <span>angle-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-left"></i>
                                                <span>angle-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-right"></i>
                                                <span>angle-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-angle-up"></i>
                                                <span>angle-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-angry"></i>
                                                <span>angry</span></div>
                                            <div className="sample-icon"><i className="fas fa-ankh"></i>
                                                <span>ankh</span></div>
                                            <div className="sample-icon"><i className="fas fa-apple-alt"></i>
                                                <span>apple-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-archive"></i>
                                                <span>archive</span></div>
                                            <div className="sample-icon"><i className="fas fa-archway"></i>
                                                <span>archway</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-alt-circle-down"></i>
                                                <span>arrow-alt-circle-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-alt-circle-left"></i>
                                                <span>arrow-alt-circle-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-alt-circle-right"></i>
                                                <span>arrow-alt-circle-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-alt-circle-up"></i>
                                                <span>arrow-alt-circle-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-circle-down"></i>
                                                <span>arrow-circle-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-circle-left"></i>
                                                <span>arrow-circle-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-circle-right"></i>
                                                <span>arrow-circle-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-circle-up"></i>
                                                <span>arrow-circle-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-arrow-down"></i>
                                                <span>arrow-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-left"></i>
                                                <span>arrow-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-right"></i>
                                                <span>arrow-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrow-up"></i>
                                                <span>arrow-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrows-alt"></i>
                                                <span>arrows-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrows-alt-h"></i>
                                                <span>arrows-alt-h</span></div>
                                            <div className="sample-icon"><i className="fas fa-arrows-alt-v"></i>
                                                <span>arrows-alt-v</span></div>
                                            <div className="sample-icon"><i className="fas fa-assistive-listening-systems"></i>
                                                <span>assistive-listening-systems</span></div>
                                            <div className="sample-icon"><i className="fas fa-asterisk"></i>
                                                <span>asterisk</span></div>
                                            <div className="sample-icon"><i className="fas fa-at"></i>
                                                <span>at</span></div>
                                            <div className="sample-icon"><i className="fas fa-atlas"></i>
                                                <span>atlas</span></div>
                                            <div className="sample-icon"><i className="fas fa-atom"></i>
                                                <span>atom</span></div>
                                            <div className="sample-icon"><i className="fas fa-audio-description"></i>
                                                <span>audio-description</span></div>
                                            <div className="sample-icon"><i className="fas fa-award"></i>
                                                <span>award</span></div>
                                            <div className="sample-icon"><i className="fas fa-baby"></i>
                                                <span>baby</span></div>
                                            <div className="sample-icon"><i className="fas fa-baby-carriage"></i>
                                                <span>baby-carriage</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-backspace"></i>
                                                <span>backspace</span></div>
                                            <div className="sample-icon"><i className="fas fa-backward"></i>
                                                <span>backward</span></div>
                                            <div className="sample-icon"><i className="fas fa-bacon"></i>
                                                <span>bacon</span></div>
                                            <div className="sample-icon"><i className="fas fa-balance-scale"></i>
                                                <span>balance-scale</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-ban"></i>
                                                <span>ban</span></div>
                                            <div className="sample-icon"><i className="fas fa-band-aid"></i>
                                                <span>band-aid</span></div>
                                            <div className="sample-icon"><i className="fas fa-barcode"></i>
                                                <span>barcode</span></div>
                                            <div className="sample-icon"><i className="fas fa-bars"></i>
                                                <span>bars</span></div>
                                            <div className="sample-icon"><i className="fas fa-baseball-ball"></i>
                                                <span>baseball-ball</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-basketball-ball"></i>
                                                <span>basketball-ball</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-bath"></i>
                                                <span>bath</span></div>
                                            <div className="sample-icon"><i className="fas fa-battery-empty"></i>
                                                <span>battery-empty</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-battery-full"></i>
                                                <span>battery-full</span></div>
                                            <div className="sample-icon"><i className="fas fa-battery-half"></i>
                                                <span>battery-half</span></div>
                                            <div className="sample-icon"><i className="fas fa-battery-quarter"></i>
                                                <span>battery-quarter</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-battery-three-quarters"></i>
                                                <span>battery-three-quarters</span></div>
                                            <div className="sample-icon"><i className="fas fa-bed"></i>
                                                <span>bed</span></div>
                                            <div className="sample-icon"><i className="fas fa-beer"></i>
                                                <span>beer</span></div>
                                            <div className="sample-icon"><i className="fas fa-bell"></i>
                                                <span>bell</span></div>
                                            <div className="sample-icon"><i className="fas fa-bell-slash"></i>
                                                <span>bell-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-bezier-curve"></i>
                                                <span>bezier-curve</span></div>
                                            <div className="sample-icon"><i className="fas fa-bible"></i>
                                                <span>bible</span></div>
                                            <div className="sample-icon"><i className="fas fa-bicycle"></i>
                                                <span>bicycle</span></div>
                                            <div className="sample-icon"><i className="fas fa-binoculars"></i>
                                                <span>binoculars</span></div>
                                            <div className="sample-icon"><i className="fas fa-biohazard"></i>
                                                <span>biohazard</span></div>
                                            <div className="sample-icon"><i className="fas fa-birthday-cake"></i>
                                                <span>birthday-cake</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-blender"></i>
                                                <span>blender</span></div>
                                            <div className="sample-icon"><i className="fas fa-blender-phone"></i>
                                                <span>blender-phone</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-blind"></i>
                                                <span>blind</span></div>
                                            <div className="sample-icon"><i className="fas fa-blog"></i>
                                                <span>blog</span></div>
                                            <div className="sample-icon"><i className="fas fa-bold"></i>
                                                <span>bold</span></div>
                                            <div className="sample-icon"><i className="fas fa-bolt"></i>
                                                <span>bolt</span></div>
                                            <div className="sample-icon"><i className="fas fa-bomb"></i>
                                                <span>bomb</span></div>
                                            <div className="sample-icon"><i className="fas fa-bone"></i>
                                                <span>bone</span></div>
                                            <div className="sample-icon"><i className="fas fa-bong"></i>
                                                <span>bong</span></div>
                                            <div className="sample-icon"><i className="fas fa-book"></i>
                                                <span>book</span></div>
                                            <div className="sample-icon"><i className="fas fa-book-dead"></i>
                                                <span>book-dead</span></div>
                                            <div className="sample-icon"><i className="fas fa-book-medical"></i>
                                                <span>book-medical</span></div>
                                            <div className="sample-icon"><i className="fas fa-book-open"></i>
                                                <span>book-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-book-reader"></i>
                                                <span>book-reader</span></div>
                                            <div className="sample-icon"><i className="fas fa-bookmark"></i>
                                                <span>bookmark</span></div>
                                            <div className="sample-icon"><i className="fas fa-bowling-ball"></i>
                                                <span>bowling-ball</span></div>
                                            <div className="sample-icon"><i className="fas fa-box"></i>
                                                <span>box</span></div>
                                            <div className="sample-icon"><i className="fas fa-box-open"></i>
                                                <span>box-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-boxes"></i>
                                                <span>boxes</span></div>
                                            <div className="sample-icon"><i className="fas fa-braille"></i>
                                                <span>braille</span></div>
                                            <div className="sample-icon"><i className="fas fa-brain"></i>
                                                <span>brain</span></div>
                                            <div className="sample-icon"><i className="fas fa-bread-slice"></i>
                                                <span>bread-slice</span></div>
                                            <div className="sample-icon"><i className="fas fa-briefcase"></i>
                                                <span>briefcase</span></div>
                                            <div className="sample-icon"><i className="fas fa-briefcase-medical"></i>
                                                <span>briefcase-medical</span></div>
                                            <div className="sample-icon"><i className="fas fa-broadcast-tower"></i>
                                                <span>broadcast-tower</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-broom"></i>
                                                <span>broom</span></div>
                                            <div className="sample-icon"><i className="fas fa-brush"></i>
                                                <span>brush</span></div>
                                            <div className="sample-icon"><i className="fas fa-bug"></i>
                                                <span>bug</span></div>
                                            <div className="sample-icon"><i className="fas fa-building"></i>
                                                <span>building</span></div>
                                            <div className="sample-icon"><i className="fas fa-bullhorn"></i>
                                                <span>bullhorn</span></div>
                                            <div className="sample-icon"><i className="fas fa-bullseye"></i>
                                                <span>bullseye</span></div>
                                            <div className="sample-icon"><i className="fas fa-burn"></i>
                                                <span>burn</span></div>
                                            <div className="sample-icon"><i className="fas fa-bus"></i>
                                                <span>bus</span></div>
                                            <div className="sample-icon"><i className="fas fa-bus-alt"></i>
                                                <span>bus-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-business-time"></i>
                                                <span>business-time</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-calculator"></i>
                                                <span>calculator</span></div>
                                            <div className="sample-icon"><i className="fas fa-calendar"></i>
                                                <span>calendar</span></div>
                                            <div className="sample-icon"><i className="fas fa-calendar-alt"></i>
                                                <span>calendar-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-calendar-check"></i>
                                                <span>calendar-check</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-calendar-day"></i>
                                                <span>calendar-day</span></div>
                                            <div className="sample-icon"><i className="fas fa-calendar-minus"></i>
                                                <span>calendar-minus</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-calendar-plus"></i>
                                                <span>calendar-plus</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-calendar-times"></i>
                                                <span>calendar-times</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-calendar-week"></i>
                                                <span>calendar-week</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-camera"></i>
                                                <span>camera</span></div>
                                            <div className="sample-icon"><i className="fas fa-camera-retro"></i>
                                                <span>camera-retro</span></div>
                                            <div className="sample-icon"><i className="fas fa-campground"></i>
                                                <span>campground</span></div>
                                            <div className="sample-icon"><i className="fas fa-candy-cane"></i>
                                                <span>candy-cane</span></div>
                                            <div className="sample-icon"><i className="fas fa-cannabis"></i>
                                                <span>cannabis</span></div>
                                            <div className="sample-icon"><i className="fas fa-capsules"></i>
                                                <span>capsules</span></div>
                                            <div className="sample-icon"><i className="fas fa-car"></i>
                                                <span>car</span></div>
                                            <div className="sample-icon"><i className="fas fa-car-alt"></i>
                                                <span>car-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-car-battery"></i>
                                                <span>car-battery</span></div>
                                            <div className="sample-icon"><i className="fas fa-car-crash"></i>
                                                <span>car-crash</span></div>
                                            <div className="sample-icon"><i className="fas fa-car-side"></i>
                                                <span>car-side</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-down"></i>
                                                <span>caret-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-left"></i>
                                                <span>caret-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-right"></i>
                                                <span>caret-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-square-down"></i>
                                                <span>caret-square-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-square-left"></i>
                                                <span>caret-square-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-square-right"></i>
                                                <span>caret-square-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-caret-square-up"></i>
                                                <span>caret-square-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-caret-up"></i>
                                                <span>caret-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-carrot"></i>
                                                <span>carrot</span></div>
                                            <div className="sample-icon"><i className="fas fa-cart-arrow-down"></i>
                                                <span>cart-arrow-down</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cart-plus"></i>
                                                <span>cart-plus</span></div>
                                            <div className="sample-icon"><i className="fas fa-cash-register"></i>
                                                <span>cash-register</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cat"></i>
                                                <span>cat</span></div>
                                            <div className="sample-icon"><i className="fas fa-certificate"></i>
                                                <span>certificate</span></div>
                                            <div className="sample-icon"><i className="fas fa-chair"></i>
                                                <span>chair</span></div>
                                            <div className="sample-icon"><i className="fas fa-chalkboard"></i>
                                                <span>chalkboard</span></div>
                                            <div className="sample-icon"><i className="fas fa-chalkboard-teacher"></i>
                                                <span>chalkboard-teacher</span></div>
                                            <div className="sample-icon"><i className="fas fa-charging-station"></i>
                                                <span>charging-station</span></div>
                                            <div className="sample-icon"><i className="fas fa-chart-area"></i>
                                                <span>chart-area</span></div>
                                            <div className="sample-icon"><i className="fas fa-chart-bar"></i>
                                                <span>chart-bar</span></div>
                                            <div className="sample-icon"><i className="fas fa-chart-line"></i>
                                                <span>chart-line</span></div>
                                            <div className="sample-icon"><i className="fas fa-chart-pie"></i>
                                                <span>chart-pie</span></div>
                                            <div className="sample-icon"><i className="fas fa-check"></i>
                                                <span>check</span></div>
                                            <div className="sample-icon"><i className="fas fa-check-circle"></i>
                                                <span>check-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-check-double"></i>
                                                <span>check-double</span></div>
                                            <div className="sample-icon"><i className="fas fa-check-square"></i>
                                                <span>check-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-cheese"></i>
                                                <span>cheese</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess"></i>
                                                <span>chess</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-bishop"></i>
                                                <span>chess-bishop</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-board"></i>
                                                <span>chess-board</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-king"></i>
                                                <span>chess-king</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-knight"></i>
                                                <span>chess-knight</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-pawn"></i>
                                                <span>chess-pawn</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-queen"></i>
                                                <span>chess-queen</span></div>
                                            <div className="sample-icon"><i className="fas fa-chess-rook"></i>
                                                <span>chess-rook</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-circle-down"></i>
                                                <span>chevron-circle-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-circle-left"></i>
                                                <span>chevron-circle-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-circle-right"></i>
                                                <span>chevron-circle-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-circle-up"></i>
                                                <span>chevron-circle-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-down"></i>
                                                <span>chevron-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-left"></i>
                                                <span>chevron-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-chevron-right"></i>
                                                <span>chevron-right</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-chevron-up"></i>
                                                <span>chevron-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-child"></i>
                                                <span>child</span></div>
                                            <div className="sample-icon"><i className="fas fa-church"></i>
                                                <span>church</span></div>
                                            <div className="sample-icon"><i className="fas fa-circle"></i>
                                                <span>circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-circle-notch"></i>
                                                <span>circle-notch</span></div>
                                            <div className="sample-icon"><i className="fas fa-city"></i>
                                                <span>city</span></div>
                                            <div className="sample-icon"><i className="fas fa-clinic-medical"></i>
                                                <span>clinic-medical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-clipboard"></i>
                                                <span>clipboard</span></div>
                                            <div className="sample-icon"><i className="fas fa-clipboard-check"></i>
                                                <span>clipboard-check</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-clipboard-list"></i>
                                                <span>clipboard-list</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-clock"></i>
                                                <span>clock</span></div>
                                            <div className="sample-icon"><i className="fas fa-clone"></i>
                                                <span>clone</span></div>
                                            <div className="sample-icon"><i className="fas fa-closed-captioning"></i>
                                                <span>closed-captioning</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud"></i>
                                                <span>cloud</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-download-alt"></i>
                                                <span>cloud-download-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-meatball"></i>
                                                <span>cloud-meatball</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cloud-moon"></i>
                                                <span>cloud-moon</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-moon-rain"></i>
                                                <span>cloud-moon-rain</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cloud-rain"></i>
                                                <span>cloud-rain</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-showers-heavy"></i>
                                                <span>cloud-showers-heavy</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-sun"></i>
                                                <span>cloud-sun</span></div>
                                            <div className="sample-icon"><i className="fas fa-cloud-sun-rain"></i>
                                                <span>cloud-sun-rain</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cloud-upload-alt"></i>
                                                <span>cloud-upload-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-cocktail"></i>
                                                <span>cocktail</span></div>
                                            <div className="sample-icon"><i className="fas fa-code"></i>
                                                <span>code</span></div>
                                            <div className="sample-icon"><i className="fas fa-code-branch"></i>
                                                <span>code-branch</span></div>
                                            <div className="sample-icon"><i className="fas fa-coffee"></i>
                                                <span>coffee</span></div>
                                            <div className="sample-icon"><i className="fas fa-cog"></i>
                                                <span>cog</span></div>
                                            <div className="sample-icon"><i className="fas fa-cogs"></i>
                                                <span>cogs</span></div>
                                            <div className="sample-icon"><i className="fas fa-coins"></i>
                                                <span>coins</span></div>
                                            <div className="sample-icon"><i className="fas fa-columns"></i>
                                                <span>columns</span></div>
                                            <div className="sample-icon"><i className="fas fa-comment"></i>
                                                <span>comment</span></div>
                                            <div className="sample-icon"><i className="fas fa-comment-alt"></i>
                                                <span>comment-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-comment-dollar"></i>
                                                <span>comment-dollar</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-comment-dots"></i>
                                                <span>comment-dots</span></div>
                                            <div className="sample-icon"><i className="fas fa-comment-medical"></i>
                                                <span>comment-medical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-comment-slash"></i>
                                                <span>comment-slash</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-comments"></i>
                                                <span>comments</span></div>
                                            <div className="sample-icon"><i className="fas fa-comments-dollar"></i>
                                                <span>comments-dollar</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-compact-disc"></i>
                                                <span>compact-disc</span></div>
                                            <div className="sample-icon"><i className="fas fa-compass"></i>
                                                <span>compass</span></div>
                                            <div className="sample-icon"><i className="fas fa-compress"></i>
                                                <span>compress</span></div>
                                            <div className="sample-icon"><i className="fas fa-compress-arrows-alt"></i>
                                                <span>compress-arrows-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-concierge-bell"></i>
                                                <span>concierge-bell</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-cookie"></i>
                                                <span>cookie</span></div>
                                            <div className="sample-icon"><i className="fas fa-cookie-bite"></i>
                                                <span>cookie-bite</span></div>
                                            <div className="sample-icon"><i className="fas fa-copy"></i>
                                                <span>copy</span></div>
                                            <div className="sample-icon"><i className="fas fa-copyright"></i>
                                                <span>copyright</span></div>
                                            <div className="sample-icon"><i className="fas fa-couch"></i>
                                                <span>couch</span></div>
                                            <div className="sample-icon"><i className="fas fa-credit-card"></i>
                                                <span>credit-card</span></div>
                                            <div className="sample-icon"><i className="fas fa-crop"></i>
                                                <span>crop</span></div>
                                            <div className="sample-icon"><i className="fas fa-crop-alt"></i>
                                                <span>crop-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-cross"></i>
                                                <span>cross</span></div>
                                            <div className="sample-icon"><i className="fas fa-crosshairs"></i>
                                                <span>crosshairs</span></div>
                                            <div className="sample-icon"><i className="fas fa-crow"></i>
                                                <span>crow</span></div>
                                            <div className="sample-icon"><i className="fas fa-crown"></i>
                                                <span>crown</span></div>
                                            <div className="sample-icon"><i className="fas fa-crutch"></i>
                                                <span>crutch</span></div>
                                            <div className="sample-icon"><i className="fas fa-cube"></i>
                                                <span>cube</span></div>
                                            <div className="sample-icon"><i className="fas fa-cubes"></i>
                                                <span>cubes</span></div>
                                            <div className="sample-icon"><i className="fas fa-cut"></i>
                                                <span>cut</span></div>
                                            <div className="sample-icon"><i className="fas fa-database"></i>
                                                <span>database</span></div>
                                            <div className="sample-icon"><i className="fas fa-deaf"></i>
                                                <span>deaf</span></div>
                                            <div className="sample-icon"><i className="fas fa-democrat"></i>
                                                <span>democrat</span></div>
                                            <div className="sample-icon"><i className="fas fa-desktop"></i>
                                                <span>desktop</span></div>
                                            <div className="sample-icon"><i className="fas fa-dharmachakra"></i>
                                                <span>dharmachakra</span></div>
                                            <div className="sample-icon"><i className="fas fa-diagnoses"></i>
                                                <span>diagnoses</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice"></i>
                                                <span>dice</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-d20"></i>
                                                <span>dice-d20</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-d6"></i>
                                                <span>dice-d6</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-five"></i>
                                                <span>dice-five</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-four"></i>
                                                <span>dice-four</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-one"></i>
                                                <span>dice-one</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-six"></i>
                                                <span>dice-six</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-three"></i>
                                                <span>dice-three</span></div>
                                            <div className="sample-icon"><i className="fas fa-dice-two"></i>
                                                <span>dice-two</span></div>
                                            <div className="sample-icon"><i className="fas fa-digital-tachograph"></i>
                                                <span>digital-tachograph</span></div>
                                            <div className="sample-icon"><i className="fas fa-directions"></i>
                                                <span>directions</span></div>
                                            <div className="sample-icon"><i className="fas fa-divide"></i>
                                                <span>divide</span></div>
                                            <div className="sample-icon"><i className="fas fa-dizzy"></i>
                                                <span>dizzy</span></div>
                                            <div className="sample-icon"><i className="fas fa-dna"></i>
                                                <span>dna</span></div>
                                            <div className="sample-icon"><i className="fas fa-dog"></i>
                                                <span>dog</span></div>
                                            <div className="sample-icon"><i className="fas fa-dollar-sign"></i>
                                                <span>dollar-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-dolly"></i>
                                                <span>dolly</span></div>
                                            <div className="sample-icon"><i className="fas fa-dolly-flatbed"></i>
                                                <span>dolly-flatbed</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-donate"></i>
                                                <span>donate</span></div>
                                            <div className="sample-icon"><i className="fas fa-door-closed"></i>
                                                <span>door-closed</span></div>
                                            <div className="sample-icon"><i className="fas fa-door-open"></i>
                                                <span>door-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-dot-circle"></i>
                                                <span>dot-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-dove"></i>
                                                <span>dove</span></div>
                                            <div className="sample-icon"><i className="fas fa-download"></i>
                                                <span>download</span></div>
                                            <div className="sample-icon"><i className="fas fa-drafting-compass"></i>
                                                <span>drafting-compass</span></div>
                                            <div className="sample-icon"><i className="fas fa-dragon"></i>
                                                <span>dragon</span></div>
                                            <div className="sample-icon"><i className="fas fa-draw-polygon"></i>
                                                <span>draw-polygon</span></div>
                                            <div className="sample-icon"><i className="fas fa-drum"></i>
                                                <span>drum</span></div>
                                            <div className="sample-icon"><i className="fas fa-drum-steelpan"></i>
                                                <span>drum-steelpan</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-drumstick-bite"></i>
                                                <span>drumstick-bite</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-dumbbell"></i>
                                                <span>dumbbell</span></div>
                                            <div className="sample-icon"><i className="fas fa-dumpster"></i>
                                                <span>dumpster</span></div>
                                            <div className="sample-icon"><i className="fas fa-dumpster-fire"></i>
                                                <span>dumpster-fire</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-dungeon"></i>
                                                <span>dungeon</span></div>
                                            <div className="sample-icon"><i className="fas fa-edit"></i>
                                                <span>edit</span></div>
                                            <div className="sample-icon"><i className="fas fa-egg"></i>
                                                <span>egg</span></div>
                                            <div className="sample-icon"><i className="fas fa-eject"></i>
                                                <span>eject</span></div>
                                            <div className="sample-icon"><i className="fas fa-ellipsis-h"></i>
                                                <span>ellipsis-h</span></div>
                                            <div className="sample-icon"><i className="fas fa-ellipsis-v"></i>
                                                <span>ellipsis-v</span></div>
                                            <div className="sample-icon"><i className="fas fa-envelope"></i>
                                                <span>envelope</span></div>
                                            <div className="sample-icon"><i className="fas fa-envelope-open"></i>
                                                <span>envelope-open</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-envelope-open-text"></i>
                                                <span>envelope-open-text</span></div>
                                            <div className="sample-icon"><i className="fas fa-envelope-square"></i>
                                                <span>envelope-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-equals"></i>
                                                <span>equals</span></div>
                                            <div className="sample-icon"><i className="fas fa-eraser"></i>
                                                <span>eraser</span></div>
                                            <div className="sample-icon"><i className="fas fa-ethernet"></i>
                                                <span>ethernet</span></div>
                                            <div className="sample-icon"><i className="fas fa-euro-sign"></i>
                                                <span>euro-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-exchange-alt"></i>
                                                <span>exchange-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-exclamation"></i>
                                                <span>exclamation</span></div>
                                            <div className="sample-icon"><i className="fas fa-exclamation-circle"></i>
                                                <span>exclamation-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-exclamation-triangle"></i>
                                                <span>exclamation-triangle</span></div>
                                            <div className="sample-icon"><i className="fas fa-expand"></i>
                                                <span>expand</span></div>
                                            <div className="sample-icon"><i className="fas fa-expand-arrows-alt"></i>
                                                <span>expand-arrows-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-external-link-alt"></i>
                                                <span>external-link-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-external-link-square-alt"></i>
                                                <span>external-link-square-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-eye"></i>
                                                <span>eye</span></div>
                                            <div className="sample-icon"><i className="fas fa-eye-dropper"></i>
                                                <span>eye-dropper</span></div>
                                            <div className="sample-icon"><i className="fas fa-eye-slash"></i>
                                                <span>eye-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-fast-backward"></i>
                                                <span>fast-backward</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-fast-forward"></i>
                                                <span>fast-forward</span></div>
                                            <div className="sample-icon"><i className="fas fa-fax"></i>
                                                <span>fax</span></div>
                                            <div className="sample-icon"><i className="fas fa-feather"></i>
                                                <span>feather</span></div>
                                            <div className="sample-icon"><i className="fas fa-feather-alt"></i>
                                                <span>feather-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-female"></i>
                                                <span>female</span></div>
                                            <div className="sample-icon"><i className="fas fa-fighter-jet"></i>
                                                <span>fighter-jet</span></div>
                                            <div className="sample-icon"><i className="fas fa-file"></i>
                                                <span>file</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-alt"></i>
                                                <span>file-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-archive"></i>
                                                <span>file-archive</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-audio"></i>
                                                <span>file-audio</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-code"></i>
                                                <span>file-code</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-contract"></i>
                                                <span>file-contract</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-file-csv"></i>
                                                <span>file-csv</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-download"></i>
                                                <span>file-download</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-file-excel"></i>
                                                <span>file-excel</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-export"></i>
                                                <span>file-export</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-image"></i>
                                                <span>file-image</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-import"></i>
                                                <span>file-import</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-invoice"></i>
                                                <span>file-invoice</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-invoice-dollar"></i>
                                                <span>file-invoice-dollar</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-medical"></i>
                                                <span>file-medical</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-medical-alt"></i>
                                                <span>file-medical-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-pdf"></i>
                                                <span>file-pdf</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-powerpoint"></i>
                                                <span>file-powerpoint</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-file-prescription"></i>
                                                <span>file-prescription</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-signature"></i>
                                                <span>file-signature</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-file-upload"></i>
                                                <span>file-upload</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-video"></i>
                                                <span>file-video</span></div>
                                            <div className="sample-icon"><i className="fas fa-file-word"></i>
                                                <span>file-word</span></div>
                                            <div className="sample-icon"><i className="fas fa-fill"></i>
                                                <span>fill</span></div>
                                            <div className="sample-icon"><i className="fas fa-fill-drip"></i>
                                                <span>fill-drip</span></div>
                                            <div className="sample-icon"><i className="fas fa-film"></i>
                                                <span>film</span></div>
                                            <div className="sample-icon"><i className="fas fa-filter"></i>
                                                <span>filter</span></div>
                                            <div className="sample-icon"><i className="fas fa-fingerprint"></i>
                                                <span>fingerprint</span></div>
                                            <div className="sample-icon"><i className="fas fa-fire"></i>
                                                <span>fire</span></div>
                                            <div className="sample-icon"><i className="fas fa-fire-alt"></i>
                                                <span>fire-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-fire-extinguisher"></i>
                                                <span>fire-extinguisher</span></div>
                                            <div className="sample-icon"><i className="fas fa-first-aid"></i>
                                                <span>first-aid</span></div>
                                            <div className="sample-icon"><i className="fas fa-fish"></i>
                                                <span>fish</span></div>
                                            <div className="sample-icon"><i className="fas fa-fist-raised"></i>
                                                <span>fist-raised</span></div>
                                            <div className="sample-icon"><i className="fas fa-flag"></i>
                                                <span>flag</span></div>
                                            <div className="sample-icon"><i className="fas fa-flag-checkered"></i>
                                                <span>flag-checkered</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-flag-usa"></i>
                                                <span>flag-usa</span></div>
                                            <div className="sample-icon"><i className="fas fa-flask"></i>
                                                <span>flask</span></div>
                                            <div className="sample-icon"><i className="fas fa-flushed"></i>
                                                <span>flushed</span></div>
                                            <div className="sample-icon"><i className="fas fa-folder"></i>
                                                <span>folder</span></div>
                                            <div className="sample-icon"><i className="fas fa-folder-minus"></i>
                                                <span>folder-minus</span></div>
                                            <div className="sample-icon"><i className="fas fa-folder-open"></i>
                                                <span>folder-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-folder-plus"></i>
                                                <span>folder-plus</span></div>
                                            <div className="sample-icon"><i className="fas fa-font"></i>
                                                <span>font</span></div>
                                            <div className="sample-icon"><i className="fas fa-football-ball"></i>
                                                <span>football-ball</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-forward"></i>
                                                <span>forward</span></div>
                                            <div className="sample-icon"><i className="fas fa-frog"></i>
                                                <span>frog</span></div>
                                            <div className="sample-icon"><i className="fas fa-frown"></i>
                                                <span>frown</span></div>
                                            <div className="sample-icon"><i className="fas fa-frown-open"></i>
                                                <span>frown-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-funnel-dollar"></i>
                                                <span>funnel-dollar</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-futbol"></i>
                                                <span>futbol</span></div>
                                            <div className="sample-icon"><i className="fas fa-gamepad"></i>
                                                <span>gamepad</span></div>
                                            <div className="sample-icon"><i className="fas fa-gas-pump"></i>
                                                <span>gas-pump</span></div>
                                            <div className="sample-icon"><i className="fas fa-gavel"></i>
                                                <span>gavel</span></div>
                                            <div className="sample-icon"><i className="fas fa-gem"></i>
                                                <span>gem</span></div>
                                            <div className="sample-icon"><i className="fas fa-genderless"></i>
                                                <span>genderless</span></div>
                                            <div className="sample-icon"><i className="fas fa-ghost"></i>
                                                <span>ghost</span></div>
                                            <div className="sample-icon"><i className="fas fa-gift"></i>
                                                <span>gift</span></div>
                                            <div className="sample-icon"><i className="fas fa-gifts"></i>
                                                <span>gifts</span></div>
                                            <div className="sample-icon"><i className="fas fa-glass-cheers"></i>
                                                <span>glass-cheers</span></div>
                                            <div className="sample-icon"><i className="fas fa-glass-martini"></i>
                                                <span>glass-martini</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-glass-martini-alt"></i>
                                                <span>glass-martini-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-glass-whiskey"></i>
                                                <span>glass-whiskey</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-glasses"></i>
                                                <span>glasses</span></div>
                                            <div className="sample-icon"><i className="fas fa-globe"></i>
                                                <span>globe</span></div>
                                            <div className="sample-icon"><i className="fas fa-globe-africa"></i>
                                                <span>globe-africa</span></div>
                                            <div className="sample-icon"><i className="fas fa-globe-americas"></i>
                                                <span>globe-americas</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-globe-asia"></i>
                                                <span>globe-asia</span></div>
                                            <div className="sample-icon"><i className="fas fa-globe-europe"></i>
                                                <span>globe-europe</span></div>
                                            <div className="sample-icon"><i className="fas fa-golf-ball"></i>
                                                <span>golf-ball</span></div>
                                            <div className="sample-icon"><i className="fas fa-gopuram"></i>
                                                <span>gopuram</span></div>
                                            <div className="sample-icon"><i className="fas fa-graduation-cap"></i>
                                                <span>graduation-cap</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-greater-than"></i>
                                                <span>greater-than</span></div>
                                            <div className="sample-icon"><i className="fas fa-greater-than-equal"></i>
                                                <span>greater-than-equal</span></div>
                                            <div className="sample-icon"><i className="fas fa-grimace"></i>
                                                <span>grimace</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin"></i>
                                                <span>grin</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-alt"></i>
                                                <span>grin-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-beam"></i>
                                                <span>grin-beam</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-beam-sweat"></i>
                                                <span>grin-beam-sweat</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-grin-hearts"></i>
                                                <span>grin-hearts</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-squint"></i>
                                                <span>grin-squint</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-squint-tears"></i>
                                                <span>grin-squint-tears</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-stars"></i>
                                                <span>grin-stars</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-tears"></i>
                                                <span>grin-tears</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-tongue"></i>
                                                <span>grin-tongue</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-tongue-squint"></i>
                                                <span>grin-tongue-squint</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-tongue-wink"></i>
                                                <span>grin-tongue-wink</span></div>
                                            <div className="sample-icon"><i className="fas fa-grin-wink"></i>
                                                <span>grin-wink</span></div>
                                            <div className="sample-icon"><i className="fas fa-grip-horizontal"></i>
                                                <span>grip-horizontal</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-grip-lines"></i>
                                                <span>grip-lines</span></div>
                                            <div className="sample-icon"><i className="fas fa-grip-lines-vertical"></i>
                                                <span>grip-lines-vertical</span></div>
                                            <div className="sample-icon"><i className="fas fa-grip-vertical"></i>
                                                <span>grip-vertical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-guitar"></i>
                                                <span>guitar</span></div>
                                            <div className="sample-icon"><i className="fas fa-h-square"></i>
                                                <span>h-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-hamburger"></i>
                                                <span>hamburger</span></div>
                                            <div className="sample-icon"><i className="fas fa-hammer"></i>
                                                <span>hammer</span></div>
                                            <div className="sample-icon"><i className="fas fa-hamsa"></i>
                                                <span>hamsa</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-holding"></i>
                                                <span>hand-holding</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-holding-heart"></i>
                                                <span>hand-holding-heart</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-holding-usd"></i>
                                                <span>hand-holding-usd</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-lizard"></i>
                                                <span>hand-lizard</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-middle-finger"></i>
                                                <span>hand-middle-finger</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-paper"></i>
                                                <span>hand-paper</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-peace"></i>
                                                <span>hand-peace</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-point-down"></i>
                                                <span>hand-point-down</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hand-point-left"></i>
                                                <span>hand-point-left</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hand-point-right"></i>
                                                <span>hand-point-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-point-up"></i>
                                                <span>hand-point-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hand-pointer"></i>
                                                <span>hand-pointer</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-rock"></i>
                                                <span>hand-rock</span></div>
                                            <div className="sample-icon"><i className="fas fa-hand-scissors"></i>
                                                <span>hand-scissors</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hand-spock"></i>
                                                <span>hand-spock</span></div>
                                            <div className="sample-icon"><i className="fas fa-hands"></i>
                                                <span>hands</span></div>
                                            <div className="sample-icon"><i className="fas fa-hands-helping"></i>
                                                <span>hands-helping</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-handshake"></i>
                                                <span>handshake</span></div>
                                            <div className="sample-icon"><i className="fas fa-hanukiah"></i>
                                                <span>hanukiah</span></div>
                                            <div className="sample-icon"><i className="fas fa-hard-hat"></i>
                                                <span>hard-hat</span></div>
                                            <div className="sample-icon"><i className="fas fa-hashtag"></i>
                                                <span>hashtag</span></div>
                                            <div className="sample-icon"><i className="fas fa-hat-wizard"></i>
                                                <span>hat-wizard</span></div>
                                            <div className="sample-icon"><i className="fas fa-haykal"></i>
                                                <span>haykal</span></div>
                                            <div className="sample-icon"><i className="fas fa-hdd"></i>
                                                <span>hdd</span></div>
                                            <div className="sample-icon"><i className="fas fa-heading"></i>
                                                <span>heading</span></div>
                                            <div className="sample-icon"><i className="fas fa-headphones"></i>
                                                <span>headphones</span></div>
                                            <div className="sample-icon"><i className="fas fa-headphones-alt"></i>
                                                <span>headphones-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-headset"></i>
                                                <span>headset</span></div>
                                            <div className="sample-icon"><i className="fas fa-heart"></i>
                                                <span>heart</span></div>
                                            <div className="sample-icon"><i className="fas fa-heart-broken"></i>
                                                <span>heart-broken</span></div>
                                            <div className="sample-icon"><i className="fas fa-heartbeat"></i>
                                                <span>heartbeat</span></div>
                                            <div className="sample-icon"><i className="fas fa-helicopter"></i>
                                                <span>helicopter</span></div>
                                            <div className="sample-icon"><i className="fas fa-highlighter"></i>
                                                <span>highlighter</span></div>
                                            <div className="sample-icon"><i className="fas fa-hiking"></i>
                                                <span>hiking</span></div>
                                            <div className="sample-icon"><i className="fas fa-hippo"></i>
                                                <span>hippo</span></div>
                                            <div className="sample-icon"><i className="fas fa-history"></i>
                                                <span>history</span></div>
                                            <div className="sample-icon"><i className="fas fa-hockey-puck"></i>
                                                <span>hockey-puck</span></div>
                                            <div className="sample-icon"><i className="fas fa-holly-berry"></i>
                                                <span>holly-berry</span></div>
                                            <div className="sample-icon"><i className="fas fa-home"></i>
                                                <span>home</span></div>
                                            <div className="sample-icon"><i className="fas fa-horse"></i>
                                                <span>horse</span></div>
                                            <div className="sample-icon"><i className="fas fa-horse-head"></i>
                                                <span>horse-head</span></div>
                                            <div className="sample-icon"><i className="fas fa-hospital"></i>
                                                <span>hospital</span></div>
                                            <div className="sample-icon"><i className="fas fa-hospital-alt"></i>
                                                <span>hospital-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-hospital-symbol"></i>
                                                <span>hospital-symbol</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hot-tub"></i>
                                                <span>hot-tub</span></div>
                                            <div className="sample-icon"><i className="fas fa-hotdog"></i>
                                                <span>hotdog</span></div>
                                            <div className="sample-icon"><i className="fas fa-hotel"></i>
                                                <span>hotel</span></div>
                                            <div className="sample-icon"><i className="fas fa-hourglass"></i>
                                                <span>hourglass</span></div>
                                            <div className="sample-icon"><i className="fas fa-hourglass-end"></i>
                                                <span>hourglass-end</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hourglass-half"></i>
                                                <span>hourglass-half</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-hourglass-start"></i>
                                                <span>hourglass-start</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-house-damage"></i>
                                                <span>house-damage</span></div>
                                            <div className="sample-icon"><i className="fas fa-hryvnia"></i>
                                                <span>hryvnia</span></div>
                                            <div className="sample-icon"><i className="fas fa-i-cursor"></i>
                                                <span>i-cursor</span></div>
                                            <div className="sample-icon"><i className="fas fa-ice-cream"></i>
                                                <span>ice-cream</span></div>
                                            <div className="sample-icon"><i className="fas fa-icicles"></i>
                                                <span>icicles</span></div>
                                            <div className="sample-icon"><i className="fas fa-id-badge"></i>
                                                <span>id-badge</span></div>
                                            <div className="sample-icon"><i className="fas fa-id-card"></i>
                                                <span>id-card</span></div>
                                            <div className="sample-icon"><i className="fas fa-id-card-alt"></i>
                                                <span>id-card-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-igloo"></i>
                                                <span>igloo</span></div>
                                            <div className="sample-icon"><i className="fas fa-image"></i>
                                                <span>image</span></div>
                                            <div className="sample-icon"><i className="fas fa-images"></i>
                                                <span>images</span></div>
                                            <div className="sample-icon"><i className="fas fa-inbox"></i>
                                                <span>inbox</span></div>
                                            <div className="sample-icon"><i className="fas fa-indent"></i>
                                                <span>indent</span></div>
                                            <div className="sample-icon"><i className="fas fa-industry"></i>
                                                <span>industry</span></div>
                                            <div className="sample-icon"><i className="fas fa-infinity"></i>
                                                <span>infinity</span></div>
                                            <div className="sample-icon"><i className="fas fa-info"></i>
                                                <span>info</span></div>
                                            <div className="sample-icon"><i className="fas fa-info-circle"></i>
                                                <span>info-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-italic"></i>
                                                <span>italic</span></div>
                                            <div className="sample-icon"><i className="fas fa-jedi"></i>
                                                <span>jedi</span></div>
                                            <div className="sample-icon"><i className="fas fa-joint"></i>
                                                <span>joint</span></div>
                                            <div className="sample-icon"><i className="fas fa-journal-whills"></i>
                                                <span>journal-whills</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-kaaba"></i>
                                                <span>kaaba</span></div>
                                            <div className="sample-icon"><i className="fas fa-key"></i>
                                                <span>key</span></div>
                                            <div className="sample-icon"><i className="fas fa-keyboard"></i>
                                                <span>keyboard</span></div>
                                            <div className="sample-icon"><i className="fas fa-khanda"></i>
                                                <span>khanda</span></div>
                                            <div className="sample-icon"><i className="fas fa-kiss"></i>
                                                <span>kiss</span></div>
                                            <div className="sample-icon"><i className="fas fa-kiss-beam"></i>
                                                <span>kiss-beam</span></div>
                                            <div className="sample-icon"><i className="fas fa-kiss-wink-heart"></i>
                                                <span>kiss-wink-heart</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-kiwi-bird"></i>
                                                <span>kiwi-bird</span></div>
                                            <div className="sample-icon"><i className="fas fa-landmark"></i>
                                                <span>landmark</span></div>
                                            <div className="sample-icon"><i className="fas fa-language"></i>
                                                <span>language</span></div>
                                            <div className="sample-icon"><i className="fas fa-laptop"></i>
                                                <span>laptop</span></div>
                                            <div className="sample-icon"><i className="fas fa-laptop-code"></i>
                                                <span>laptop-code</span></div>
                                            <div className="sample-icon"><i className="fas fa-laptop-medical"></i>
                                                <span>laptop-medical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-laugh"></i>
                                                <span>laugh</span></div>
                                            <div className="sample-icon"><i className="fas fa-laugh-beam"></i>
                                                <span>laugh-beam</span></div>
                                            <div className="sample-icon"><i className="fas fa-laugh-squint"></i>
                                                <span>laugh-squint</span></div>
                                            <div className="sample-icon"><i className="fas fa-laugh-wink"></i>
                                                <span>laugh-wink</span></div>
                                            <div className="sample-icon"><i className="fas fa-layer-group"></i>
                                                <span>layer-group</span></div>
                                            <div className="sample-icon"><i className="fas fa-leaf"></i>
                                                <span>leaf</span></div>
                                            <div className="sample-icon"><i className="fas fa-lemon"></i>
                                                <span>lemon</span></div>
                                            <div className="sample-icon"><i className="fas fa-less-than"></i>
                                                <span>less-than</span></div>
                                            <div className="sample-icon"><i className="fas fa-less-than-equal"></i>
                                                <span>less-than-equal</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-level-down-alt"></i>
                                                <span>level-down-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-level-up-alt"></i>
                                                <span>level-up-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-life-ring"></i>
                                                <span>life-ring</span></div>
                                            <div className="sample-icon"><i className="fas fa-lightbulb"></i>
                                                <span>lightbulb</span></div>
                                            <div className="sample-icon"><i className="fas fa-link"></i>
                                                <span>link</span></div>
                                            <div className="sample-icon"><i className="fas fa-lira-sign"></i>
                                                <span>lira-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-list"></i>
                                                <span>list</span></div>
                                            <div className="sample-icon"><i className="fas fa-list-alt"></i>
                                                <span>list-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-list-ol"></i>
                                                <span>list-ol</span></div>
                                            <div className="sample-icon"><i className="fas fa-list-ul"></i>
                                                <span>list-ul</span></div>
                                            <div className="sample-icon"><i className="fas fa-location-arrow"></i>
                                                <span>location-arrow</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-lock"></i>
                                                <span>lock</span></div>
                                            <div className="sample-icon"><i className="fas fa-lock-open"></i>
                                                <span>lock-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-long-arrow-alt-down"></i>
                                                <span>long-arrow-alt-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-long-arrow-alt-left"></i>
                                                <span>long-arrow-alt-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-long-arrow-alt-right"></i>
                                                <span>long-arrow-alt-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-long-arrow-alt-up"></i>
                                                <span>long-arrow-alt-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-low-vision"></i>
                                                <span>low-vision</span></div>
                                            <div className="sample-icon"><i className="fas fa-luggage-cart"></i>
                                                <span>luggage-cart</span></div>
                                            <div className="sample-icon"><i className="fas fa-magic"></i>
                                                <span>magic</span></div>
                                            <div className="sample-icon"><i className="fas fa-magnet"></i>
                                                <span>magnet</span></div>
                                            <div className="sample-icon"><i className="fas fa-mail-bulk"></i>
                                                <span>mail-bulk</span></div>
                                            <div className="sample-icon"><i className="fas fa-male"></i>
                                                <span>male</span></div>
                                            <div className="sample-icon"><i className="fas fa-map"></i>
                                                <span>map</span></div>
                                            <div className="sample-icon"><i className="fas fa-map-marked"></i>
                                                <span>map-marked</span></div>
                                            <div className="sample-icon"><i className="fas fa-map-marked-alt"></i>
                                                <span>map-marked-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-map-marker"></i>
                                                <span>map-marker</span></div>
                                            <div className="sample-icon"><i className="fas fa-map-marker-alt"></i>
                                                <span>map-marker-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-map-pin"></i>
                                                <span>map-pin</span></div>
                                            <div className="sample-icon"><i className="fas fa-map-signs"></i>
                                                <span>map-signs</span></div>
                                            <div className="sample-icon"><i className="fas fa-marker"></i>
                                                <span>marker</span></div>
                                            <div className="sample-icon"><i className="fas fa-mars"></i>
                                                <span>mars</span></div>
                                            <div className="sample-icon"><i className="fas fa-mars-double"></i>
                                                <span>mars-double</span></div>
                                            <div className="sample-icon"><i className="fas fa-mars-stroke"></i>
                                                <span>mars-stroke</span></div>
                                            <div className="sample-icon"><i className="fas fa-mars-stroke-h"></i>
                                                <span>mars-stroke-h</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-mars-stroke-v"></i>
                                                <span>mars-stroke-v</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-mask"></i>
                                                <span>mask</span></div>
                                            <div className="sample-icon"><i className="fas fa-medal"></i>
                                                <span>medal</span></div>
                                            <div className="sample-icon"><i className="fas fa-medkit"></i>
                                                <span>medkit</span></div>
                                            <div className="sample-icon"><i className="fas fa-meh"></i>
                                                <span>meh</span></div>
                                            <div className="sample-icon"><i className="fas fa-meh-blank"></i>
                                                <span>meh-blank</span></div>
                                            <div className="sample-icon"><i className="fas fa-meh-rolling-eyes"></i>
                                                <span>meh-rolling-eyes</span></div>
                                            <div className="sample-icon"><i className="fas fa-memory"></i>
                                                <span>memory</span></div>
                                            <div className="sample-icon"><i className="fas fa-menorah"></i>
                                                <span>menorah</span></div>
                                            <div className="sample-icon"><i className="fas fa-mercury"></i>
                                                <span>mercury</span></div>
                                            <div className="sample-icon"><i className="fas fa-meteor"></i>
                                                <span>meteor</span></div>
                                            <div className="sample-icon"><i className="fas fa-microchip"></i>
                                                <span>microchip</span></div>
                                            <div className="sample-icon"><i className="fas fa-microphone"></i>
                                                <span>microphone</span></div>
                                            <div className="sample-icon"><i className="fas fa-microphone-alt"></i>
                                                <span>microphone-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-microphone-alt-slash"></i>
                                                <span>microphone-alt-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-microphone-slash"></i>
                                                <span>microphone-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-microscope"></i>
                                                <span>microscope</span></div>
                                            <div className="sample-icon"><i className="fas fa-minus"></i>
                                                <span>minus</span></div>
                                            <div className="sample-icon"><i className="fas fa-minus-circle"></i>
                                                <span>minus-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-minus-square"></i>
                                                <span>minus-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-mitten"></i>
                                                <span>mitten</span></div>
                                            <div className="sample-icon"><i className="fas fa-mobile"></i>
                                                <span>mobile</span></div>
                                            <div className="sample-icon"><i className="fas fa-mobile-alt"></i>
                                                <span>mobile-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-money-bill"></i>
                                                <span>money-bill</span></div>
                                            <div className="sample-icon"><i className="fas fa-money-bill-alt"></i>
                                                <span>money-bill-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-money-bill-wave"></i>
                                                <span>money-bill-wave</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-money-bill-wave-alt"></i>
                                                <span>money-bill-wave-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-money-check"></i>
                                                <span>money-check</span></div>
                                            <div className="sample-icon"><i className="fas fa-money-check-alt"></i>
                                                <span>money-check-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-monument"></i>
                                                <span>monument</span></div>
                                            <div className="sample-icon"><i className="fas fa-moon"></i>
                                                <span>moon</span></div>
                                            <div className="sample-icon"><i className="fas fa-mortar-pestle"></i>
                                                <span>mortar-pestle</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-mosque"></i>
                                                <span>mosque</span></div>
                                            <div className="sample-icon"><i className="fas fa-motorcycle"></i>
                                                <span>motorcycle</span></div>
                                            <div className="sample-icon"><i className="fas fa-mountain"></i>
                                                <span>mountain</span></div>
                                            <div className="sample-icon"><i className="fas fa-mouse-pointer"></i>
                                                <span>mouse-pointer</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-mug-hot"></i>
                                                <span>mug-hot</span></div>
                                            <div className="sample-icon"><i className="fas fa-music"></i>
                                                <span>music</span></div>
                                            <div className="sample-icon"><i className="fas fa-network-wired"></i>
                                                <span>network-wired</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-neuter"></i>
                                                <span>neuter</span></div>
                                            <div className="sample-icon"><i className="fas fa-newspaper"></i>
                                                <span>newspaper</span></div>
                                            <div className="sample-icon"><i className="fas fa-not-equal"></i>
                                                <span>not-equal</span></div>
                                            <div className="sample-icon"><i className="fas fa-notes-medical"></i>
                                                <span>notes-medical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-object-group"></i>
                                                <span>object-group</span></div>
                                            <div className="sample-icon"><i className="fas fa-object-ungroup"></i>
                                                <span>object-ungroup</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-oil-can"></i>
                                                <span>oil-can</span></div>
                                            <div className="sample-icon"><i className="fas fa-om"></i>
                                                <span>om</span></div>
                                            <div className="sample-icon"><i className="fas fa-otter"></i>
                                                <span>otter</span></div>
                                            <div className="sample-icon"><i className="fas fa-outdent"></i>
                                                <span>outdent</span></div>
                                            <div className="sample-icon"><i className="fas fa-pager"></i>
                                                <span>pager</span></div>
                                            <div className="sample-icon"><i className="fas fa-paint-brush"></i>
                                                <span>paint-brush</span></div>
                                            <div className="sample-icon"><i className="fas fa-paint-roller"></i>
                                                <span>paint-roller</span></div>
                                            <div className="sample-icon"><i className="fas fa-palette"></i>
                                                <span>palette</span></div>
                                            <div className="sample-icon"><i className="fas fa-pallet"></i>
                                                <span>pallet</span></div>
                                            <div className="sample-icon"><i className="fas fa-paper-plane"></i>
                                                <span>paper-plane</span></div>
                                            <div className="sample-icon"><i className="fas fa-paperclip"></i>
                                                <span>paperclip</span></div>
                                            <div className="sample-icon"><i className="fas fa-parachute-box"></i>
                                                <span>parachute-box</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-paragraph"></i>
                                                <span>paragraph</span></div>
                                            <div className="sample-icon"><i className="fas fa-parking"></i>
                                                <span>parking</span></div>
                                            <div className="sample-icon"><i className="fas fa-passport"></i>
                                                <span>passport</span></div>
                                            <div className="sample-icon"><i className="fas fa-pastafarianism"></i>
                                                <span>pastafarianism</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-paste"></i>
                                                <span>paste</span></div>
                                            <div className="sample-icon"><i className="fas fa-pause"></i>
                                                <span>pause</span></div>
                                            <div className="sample-icon"><i className="fas fa-pause-circle"></i>
                                                <span>pause-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-paw"></i>
                                                <span>paw</span></div>
                                            <div className="sample-icon"><i className="fas fa-peace"></i>
                                                <span>peace</span></div>
                                            <div className="sample-icon"><i className="fas fa-pen"></i>
                                                <span>pen</span></div>
                                            <div className="sample-icon"><i className="fas fa-pen-alt"></i>
                                                <span>pen-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-pen-fancy"></i>
                                                <span>pen-fancy</span></div>
                                            <div className="sample-icon"><i className="fas fa-pen-nib"></i>
                                                <span>pen-nib</span></div>
                                            <div className="sample-icon"><i className="fas fa-pen-square"></i>
                                                <span>pen-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-pencil-alt"></i>
                                                <span>pencil-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-pencil-ruler"></i>
                                                <span>pencil-ruler</span></div>
                                            <div className="sample-icon"><i className="fas fa-people-carry"></i>
                                                <span>people-carry</span></div>
                                            <div className="sample-icon"><i className="fas fa-pepper-hot"></i>
                                                <span>pepper-hot</span></div>
                                            <div className="sample-icon"><i className="fas fa-percent"></i>
                                                <span>percent</span></div>
                                            <div className="sample-icon"><i className="fas fa-percentage"></i>
                                                <span>percentage</span></div>
                                            <div className="sample-icon"><i className="fas fa-person-booth"></i>
                                                <span>person-booth</span></div>
                                            <div className="sample-icon"><i className="fas fa-phone"></i>
                                                <span>phone</span></div>
                                            <div className="sample-icon"><i className="fas fa-phone-slash"></i>
                                                <span>phone-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-phone-square"></i>
                                                <span>phone-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-phone-volume"></i>
                                                <span>phone-volume</span></div>
                                            <div className="sample-icon"><i className="fas fa-piggy-bank"></i>
                                                <span>piggy-bank</span></div>
                                            <div className="sample-icon"><i className="fas fa-pills"></i>
                                                <span>pills</span></div>
                                            <div className="sample-icon"><i className="fas fa-pizza-slice"></i>
                                                <span>pizza-slice</span></div>
                                            <div className="sample-icon"><i className="fas fa-place-of-worship"></i>
                                                <span>place-of-worship</span></div>
                                            <div className="sample-icon"><i className="fas fa-plane"></i>
                                                <span>plane</span></div>
                                            <div className="sample-icon"><i className="fas fa-plane-arrival"></i>
                                                <span>plane-arrival</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-plane-departure"></i>
                                                <span>plane-departure</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-play"></i>
                                                <span>play</span></div>
                                            <div className="sample-icon"><i className="fas fa-play-circle"></i>
                                                <span>play-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-plug"></i>
                                                <span>plug</span></div>
                                            <div className="sample-icon"><i className="fas fa-plus"></i>
                                                <span>plus</span></div>
                                            <div className="sample-icon"><i className="fas fa-plus-circle"></i>
                                                <span>plus-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-plus-square"></i>
                                                <span>plus-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-podcast"></i>
                                                <span>podcast</span></div>
                                            <div className="sample-icon"><i className="fas fa-poll"></i>
                                                <span>poll</span></div>
                                            <div className="sample-icon"><i className="fas fa-poll-h"></i>
                                                <span>poll-h</span></div>
                                            <div className="sample-icon"><i className="fas fa-poo"></i>
                                                <span>poo</span></div>
                                            <div className="sample-icon"><i className="fas fa-poo-storm"></i>
                                                <span>poo-storm</span></div>
                                            <div className="sample-icon"><i className="fas fa-poop"></i>
                                                <span>poop</span></div>
                                            <div className="sample-icon"><i className="fas fa-portrait"></i>
                                                <span>portrait</span></div>
                                            <div className="sample-icon"><i className="fas fa-pound-sign"></i>
                                                <span>pound-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-power-off"></i>
                                                <span>power-off</span></div>
                                            <div className="sample-icon"><i className="fas fa-pray"></i>
                                                <span>pray</span></div>
                                            <div className="sample-icon"><i className="fas fa-praying-hands"></i>
                                                <span>praying-hands</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-prescription"></i>
                                                <span>prescription</span></div>
                                            <div className="sample-icon"><i className="fas fa-prescription-bottle"></i>
                                                <span>prescription-bottle</span></div>
                                            <div className="sample-icon"><i className="fas fa-prescription-bottle-alt"></i>
                                                <span>prescription-bottle-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-print"></i>
                                                <span>print</span></div>
                                            <div className="sample-icon"><i className="fas fa-procedures"></i>
                                                <span>procedures</span></div>
                                            <div className="sample-icon"><i className="fas fa-project-diagram"></i>
                                                <span>project-diagram</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-puzzle-piece"></i>
                                                <span>puzzle-piece</span></div>
                                            <div className="sample-icon"><i className="fas fa-qrcode"></i>
                                                <span>qrcode</span></div>
                                            <div className="sample-icon"><i className="fas fa-question"></i>
                                                <span>question</span></div>
                                            <div className="sample-icon"><i className="fas fa-question-circle"></i>
                                                <span>question-circle</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-quidditch"></i>
                                                <span>quidditch</span></div>
                                            <div className="sample-icon"><i className="fas fa-quote-left"></i>
                                                <span>quote-left</span></div>
                                            <div className="sample-icon"><i className="fas fa-quote-right"></i>
                                                <span>quote-right</span></div>
                                            <div className="sample-icon"><i className="fas fa-quran"></i>
                                                <span>quran</span></div>
                                            <div className="sample-icon"><i className="fas fa-radiation"></i>
                                                <span>radiation</span></div>
                                            <div className="sample-icon"><i className="fas fa-radiation-alt"></i>
                                                <span>radiation-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-rainbow"></i>
                                                <span>rainbow</span></div>
                                            <div className="sample-icon"><i className="fas fa-random"></i>
                                                <span>random</span></div>
                                            <div className="sample-icon"><i className="fas fa-receipt"></i>
                                                <span>receipt</span></div>
                                            <div className="sample-icon"><i className="fas fa-recycle"></i>
                                                <span>recycle</span></div>
                                            <div className="sample-icon"><i className="fas fa-redo"></i>
                                                <span>redo</span></div>
                                            <div className="sample-icon"><i className="fas fa-redo-alt"></i>
                                                <span>redo-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-registered"></i>
                                                <span>registered</span></div>
                                            <div className="sample-icon"><i className="fas fa-reply"></i>
                                                <span>reply</span></div>
                                            <div className="sample-icon"><i className="fas fa-reply-all"></i>
                                                <span>reply-all</span></div>
                                            <div className="sample-icon"><i className="fas fa-republican"></i>
                                                <span>republican</span></div>
                                            <div className="sample-icon"><i className="fas fa-restroom"></i>
                                                <span>restroom</span></div>
                                            <div className="sample-icon"><i className="fas fa-retweet"></i>
                                                <span>retweet</span></div>
                                            <div className="sample-icon"><i className="fas fa-ribbon"></i>
                                                <span>ribbon</span></div>
                                            <div className="sample-icon"><i className="fas fa-ring"></i>
                                                <span>ring</span></div>
                                            <div className="sample-icon"><i className="fas fa-road"></i>
                                                <span>road</span></div>
                                            <div className="sample-icon"><i className="fas fa-robot"></i>
                                                <span>robot</span></div>
                                            <div className="sample-icon"><i className="fas fa-rocket"></i>
                                                <span>rocket</span></div>
                                            <div className="sample-icon"><i className="fas fa-route"></i>
                                                <span>route</span></div>
                                            <div className="sample-icon"><i className="fas fa-rss"></i>
                                                <span>rss</span></div>
                                            <div className="sample-icon"><i className="fas fa-rss-square"></i>
                                                <span>rss-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-ruble-sign"></i>
                                                <span>ruble-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-ruler"></i>
                                                <span>ruler</span></div>
                                            <div className="sample-icon"><i className="fas fa-ruler-combined"></i>
                                                <span>ruler-combined</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-ruler-horizontal"></i>
                                                <span>ruler-horizontal</span></div>
                                            <div className="sample-icon"><i className="fas fa-ruler-vertical"></i>
                                                <span>ruler-vertical</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-running"></i>
                                                <span>running</span></div>
                                            <div className="sample-icon"><i className="fas fa-rupee-sign"></i>
                                                <span>rupee-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-sad-cry"></i>
                                                <span>sad-cry</span></div>
                                            <div className="sample-icon"><i className="fas fa-sad-tear"></i>
                                                <span>sad-tear</span></div>
                                            <div className="sample-icon"><i className="fas fa-satellite"></i>
                                                <span>satellite</span></div>
                                            <div className="sample-icon"><i className="fas fa-satellite-dish"></i>
                                                <span>satellite-dish</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-save"></i>
                                                <span>save</span></div>
                                            <div className="sample-icon"><i className="fas fa-school"></i>
                                                <span>school</span></div>
                                            <div className="sample-icon"><i className="fas fa-screwdriver"></i>
                                                <span>screwdriver</span></div>
                                            <div className="sample-icon"><i className="fas fa-scroll"></i>
                                                <span>scroll</span></div>
                                            <div className="sample-icon"><i className="fas fa-sd-card"></i>
                                                <span>sd-card</span></div>
                                            <div className="sample-icon"><i className="fas fa-search"></i>
                                                <span>search</span></div>
                                            <div className="sample-icon"><i className="fas fa-search-dollar"></i>
                                                <span>search-dollar</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-search-location"></i>
                                                <span>search-location</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-search-minus"></i>
                                                <span>search-minus</span></div>
                                            <div className="sample-icon"><i className="fas fa-search-plus"></i>
                                                <span>search-plus</span></div>
                                            <div className="sample-icon"><i className="fas fa-seedling"></i>
                                                <span>seedling</span></div>
                                            <div className="sample-icon"><i className="fas fa-server"></i>
                                                <span>server</span></div>
                                            <div className="sample-icon"><i className="fas fa-shapes"></i>
                                                <span>shapes</span></div>
                                            <div className="sample-icon"><i className="fas fa-share"></i>
                                                <span>share</span></div>
                                            <div className="sample-icon"><i className="fas fa-share-alt"></i>
                                                <span>share-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-share-alt-square"></i>
                                                <span>share-alt-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-share-square"></i>
                                                <span>share-square</span></div>
                                            <div className="sample-icon"><i className="fas fa-shekel-sign"></i>
                                                <span>shekel-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-shield-alt"></i>
                                                <span>shield-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-ship"></i>
                                                <span>ship</span></div>
                                            <div className="sample-icon"><i className="fas fa-shipping-fast"></i>
                                                <span>shipping-fast</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-shoe-prints"></i>
                                                <span>shoe-prints</span></div>
                                            <div className="sample-icon"><i className="fas fa-shopping-bag"></i>
                                                <span>shopping-bag</span></div>
                                            <div className="sample-icon"><i className="fas fa-shopping-basket"></i>
                                                <span>shopping-basket</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-shopping-cart"></i>
                                                <span>shopping-cart</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-shower"></i>
                                                <span>shower</span></div>
                                            <div className="sample-icon"><i className="fas fa-shuttle-van"></i>
                                                <span>shuttle-van</span></div>
                                            <div className="sample-icon"><i className="fas fa-sign"></i>
                                                <span>sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-sign-in-alt"></i>
                                                <span>sign-in-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-sign-language"></i>
                                                <span>sign-language</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-sign-out-alt"></i>
                                                <span>sign-out-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-signal"></i>
                                                <span>signal</span></div>
                                            <div className="sample-icon"><i className="fas fa-signature"></i>
                                                <span>signature</span></div>
                                            <div className="sample-icon"><i className="fas fa-sim-card"></i>
                                                <span>sim-card</span></div>
                                            <div className="sample-icon"><i className="fas fa-sitemap"></i>
                                                <span>sitemap</span></div>
                                            <div className="sample-icon"><i className="fas fa-skating"></i>
                                                <span>skating</span></div>
                                            <div className="sample-icon"><i className="fas fa-skiing"></i>
                                                <span>skiing</span></div>
                                            <div className="sample-icon"><i className="fas fa-skiing-nordic"></i>
                                                <span>skiing-nordic</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-skull"></i>
                                                <span>skull</span></div>
                                            <div className="sample-icon"><i className="fas fa-skull-crossbones"></i>
                                                <span>skull-crossbones</span></div>
                                            <div className="sample-icon"><i className="fas fa-slash"></i>
                                                <span>slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-sleigh"></i>
                                                <span>sleigh</span></div>
                                            <div className="sample-icon"><i className="fas fa-sliders-h"></i>
                                                <span>sliders-h</span></div>
                                            <div className="sample-icon"><i className="fas fa-smile"></i>
                                                <span>smile</span></div>
                                            <div className="sample-icon"><i className="fas fa-smile-beam"></i>
                                                <span>smile-beam</span></div>
                                            <div className="sample-icon"><i className="fas fa-smile-wink"></i>
                                                <span>smile-wink</span></div>
                                            <div className="sample-icon"><i className="fas fa-smog"></i>
                                                <span>smog</span></div>
                                            <div className="sample-icon"><i className="fas fa-smoking"></i>
                                                <span>smoking</span></div>
                                            <div className="sample-icon"><i className="fas fa-smoking-ban"></i>
                                                <span>smoking-ban</span></div>
                                            <div className="sample-icon"><i className="fas fa-sms"></i>
                                                <span>sms</span></div>
                                            <div className="sample-icon"><i className="fas fa-snowboarding"></i>
                                                <span>snowboarding</span></div>
                                            <div className="sample-icon"><i className="fas fa-snowflake"></i>
                                                <span>snowflake</span></div>
                                            <div className="sample-icon"><i className="fas fa-snowman"></i>
                                                <span>snowman</span></div>
                                            <div className="sample-icon"><i className="fas fa-snowplow"></i>
                                                <span>snowplow</span></div>
                                            <div className="sample-icon"><i className="fas fa-socks"></i>
                                                <span>socks</span></div>
                                            <div className="sample-icon"><i className="fas fa-solar-panel"></i>
                                                <span>solar-panel</span></div>
                                            <div className="sample-icon"><i className="fas fa-sort"></i>
                                                <span>sort</span></div>
                                            <div className="sample-icon"><i className="fas fa-sort-alpha-down"></i>
                                                <span>sort-alpha-down</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-sort-alpha-up"></i>
                                                <span>sort-alpha-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-sort-amount-down"></i>
                                                <span>sort-amount-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-sort-amount-up"></i>
                                                <span>sort-amount-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-sort-down"></i>
                                                <span>sort-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-sort-numeric-down"></i>
                                                <span>sort-numeric-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-sort-numeric-up"></i>
                                                <span>sort-numeric-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-sort-up"></i>
                                                <span>sort-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-spa"></i>
                                                <span>spa</span></div>
                                            <div className="sample-icon"><i className="fas fa-space-shuttle"></i>
                                                <span>space-shuttle</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-spider"></i>
                                                <span>spider</span></div>
                                            <div className="sample-icon"><i className="fas fa-spinner"></i>
                                                <span>spinner</span></div>
                                            <div className="sample-icon"><i className="fas fa-splotch"></i>
                                                <span>splotch</span></div>
                                            <div className="sample-icon"><i className="fas fa-spray-can"></i>
                                                <span>spray-can</span></div>
                                            <div className="sample-icon"><i className="fas fa-square"></i>
                                                <span>square</span></div>
                                            <div className="sample-icon"><i className="fas fa-square-full"></i>
                                                <span>square-full</span></div>
                                            <div className="sample-icon"><i className="fas fa-square-root-alt"></i>
                                                <span>square-root-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-stamp"></i>
                                                <span>stamp</span></div>
                                            <div className="sample-icon"><i className="fas fa-star"></i>
                                                <span>star</span></div>
                                            <div className="sample-icon"><i className="fas fa-star-and-crescent"></i>
                                                <span>star-and-crescent</span></div>
                                            <div className="sample-icon"><i className="fas fa-star-half"></i>
                                                <span>star-half</span></div>
                                            <div className="sample-icon"><i className="fas fa-star-half-alt"></i>
                                                <span>star-half-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-star-of-david"></i>
                                                <span>star-of-david</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-star-of-life"></i>
                                                <span>star-of-life</span></div>
                                            <div className="sample-icon"><i className="fas fa-step-backward"></i>
                                                <span>step-backward</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-step-forward"></i>
                                                <span>step-forward</span></div>
                                            <div className="sample-icon"><i className="fas fa-stethoscope"></i>
                                                <span>stethoscope</span></div>
                                            <div className="sample-icon"><i className="fas fa-sticky-note"></i>
                                                <span>sticky-note</span></div>
                                            <div className="sample-icon"><i className="fas fa-stop"></i>
                                                <span>stop</span></div>
                                            <div className="sample-icon"><i className="fas fa-stop-circle"></i>
                                                <span>stop-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-stopwatch"></i>
                                                <span>stopwatch</span></div>
                                            <div className="sample-icon"><i className="fas fa-store"></i>
                                                <span>store</span></div>
                                            <div className="sample-icon"><i className="fas fa-store-alt"></i>
                                                <span>store-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-stream"></i>
                                                <span>stream</span></div>
                                            <div className="sample-icon"><i className="fas fa-street-view"></i>
                                                <span>street-view</span></div>
                                            <div className="sample-icon"><i className="fas fa-strikethrough"></i>
                                                <span>strikethrough</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-stroopwafel"></i>
                                                <span>stroopwafel</span></div>
                                            <div className="sample-icon"><i className="fas fa-subscript"></i>
                                                <span>subscript</span></div>
                                            <div className="sample-icon"><i className="fas fa-subway"></i>
                                                <span>subway</span></div>
                                            <div className="sample-icon"><i className="fas fa-suitcase"></i>
                                                <span>suitcase</span></div>
                                            <div className="sample-icon"><i className="fas fa-suitcase-rolling"></i>
                                                <span>suitcase-rolling</span></div>
                                            <div className="sample-icon"><i className="fas fa-sun"></i>
                                                <span>sun</span></div>
                                            <div className="sample-icon"><i className="fas fa-superscript"></i>
                                                <span>superscript</span></div>
                                            <div className="sample-icon"><i className="fas fa-surprise"></i>
                                                <span>surprise</span></div>
                                            <div className="sample-icon"><i className="fas fa-swatchbook"></i>
                                                <span>swatchbook</span></div>
                                            <div className="sample-icon"><i className="fas fa-swimmer"></i>
                                                <span>swimmer</span></div>
                                            <div className="sample-icon"><i className="fas fa-swimming-pool"></i>
                                                <span>swimming-pool</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-synagogue"></i>
                                                <span>synagogue</span></div>
                                            <div className="sample-icon"><i className="fas fa-sync"></i>
                                                <span>sync</span></div>
                                            <div className="sample-icon"><i className="fas fa-sync-alt"></i>
                                                <span>sync-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-syringe"></i>
                                                <span>syringe</span></div>
                                            <div className="sample-icon"><i className="fas fa-table"></i>
                                                <span>table</span></div>
                                            <div className="sample-icon"><i className="fas fa-table-tennis"></i>
                                                <span>table-tennis</span></div>
                                            <div className="sample-icon"><i className="fas fa-tablet"></i>
                                                <span>tablet</span></div>
                                            <div className="sample-icon"><i className="fas fa-tablet-alt"></i>
                                                <span>tablet-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-tablets"></i>
                                                <span>tablets</span></div>
                                            <div className="sample-icon"><i className="fas fa-tachometer-alt"></i>
                                                <span>tachometer-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-tag"></i>
                                                <span>tag</span></div>
                                            <div className="sample-icon"><i className="fas fa-tags"></i>
                                                <span>tags</span></div>
                                            <div className="sample-icon"><i className="fas fa-tape"></i>
                                                <span>tape</span></div>
                                            <div className="sample-icon"><i className="fas fa-tasks"></i>
                                                <span>tasks</span></div>
                                            <div className="sample-icon"><i className="fas fa-taxi"></i>
                                                <span>taxi</span></div>
                                            <div className="sample-icon"><i className="fas fa-teeth"></i>
                                                <span>teeth</span></div>
                                            <div className="sample-icon"><i className="fas fa-teeth-open"></i>
                                                <span>teeth-open</span></div>
                                            <div className="sample-icon"><i className="fas fa-temperature-high"></i>
                                                <span>temperature-high</span></div>
                                            <div className="sample-icon"><i className="fas fa-temperature-low"></i>
                                                <span>temperature-low</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-tenge"></i>
                                                <span>tenge</span></div>
                                            <div className="sample-icon"><i className="fas fa-terminal"></i>
                                                <span>terminal</span></div>
                                            <div className="sample-icon"><i className="fas fa-text-height"></i>
                                                <span>text-height</span></div>
                                            <div className="sample-icon"><i className="fas fa-text-width"></i>
                                                <span>text-width</span></div>
                                            <div className="sample-icon"><i className="fas fa-th"></i>
                                                <span>th</span></div>
                                            <div className="sample-icon"><i className="fas fa-th-large"></i>
                                                <span>th-large</span></div>
                                            <div className="sample-icon"><i className="fas fa-th-list"></i>
                                                <span>th-list</span></div>
                                            <div className="sample-icon"><i className="fas fa-theater-masks"></i>
                                                <span>theater-masks</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-thermometer"></i>
                                                <span>thermometer</span></div>
                                            <div className="sample-icon"><i className="fas fa-thermometer-empty"></i>
                                                <span>thermometer-empty</span></div>
                                            <div className="sample-icon"><i className="fas fa-thermometer-full"></i>
                                                <span>thermometer-full</span></div>
                                            <div className="sample-icon"><i className="fas fa-thermometer-half"></i>
                                                <span>thermometer-half</span></div>
                                            <div className="sample-icon"><i className="fas fa-thermometer-quarter"></i>
                                                <span>thermometer-quarter</span></div>
                                            <div className="sample-icon"><i className="fas fa-thermometer-three-quarters"></i>
                                                <span>thermometer-three-quarters</span></div>
                                            <div className="sample-icon"><i className="fas fa-thumbs-down"></i>
                                                <span>thumbs-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-thumbs-up"></i>
                                                <span>thumbs-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-thumbtack"></i>
                                                <span>thumbtack</span></div>
                                            <div className="sample-icon"><i className="fas fa-ticket-alt"></i>
                                                <span>ticket-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-times"></i>
                                                <span>times</span></div>
                                            <div className="sample-icon"><i className="fas fa-times-circle"></i>
                                                <span>times-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-tint"></i>
                                                <span>tint</span></div>
                                            <div className="sample-icon"><i className="fas fa-tint-slash"></i>
                                                <span>tint-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-tired"></i>
                                                <span>tired</span></div>
                                            <div className="sample-icon"><i className="fas fa-toggle-off"></i>
                                                <span>toggle-off</span></div>
                                            <div className="sample-icon"><i className="fas fa-toggle-on"></i>
                                                <span>toggle-on</span></div>
                                            <div className="sample-icon"><i className="fas fa-toilet"></i>
                                                <span>toilet</span></div>
                                            <div className="sample-icon"><i className="fas fa-toilet-paper"></i>
                                                <span>toilet-paper</span></div>
                                            <div className="sample-icon"><i className="fas fa-toolbox"></i>
                                                <span>toolbox</span></div>
                                            <div className="sample-icon"><i className="fas fa-tools"></i>
                                                <span>tools</span></div>
                                            <div className="sample-icon"><i className="fas fa-tooth"></i>
                                                <span>tooth</span></div>
                                            <div className="sample-icon"><i className="fas fa-torah"></i>
                                                <span>torah</span></div>
                                            <div className="sample-icon"><i className="fas fa-torii-gate"></i>
                                                <span>torii-gate</span></div>
                                            <div className="sample-icon"><i className="fas fa-tractor"></i>
                                                <span>tractor</span></div>
                                            <div className="sample-icon"><i className="fas fa-trademark"></i>
                                                <span>trademark</span></div>
                                            <div className="sample-icon"><i className="fas fa-traffic-light"></i>
                                                <span>traffic-light</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-train"></i>
                                                <span>train</span></div>
                                            <div className="sample-icon"><i className="fas fa-tram"></i>
                                                <span>tram</span></div>
                                            <div className="sample-icon"><i className="fas fa-transgender"></i>
                                                <span>transgender</span></div>
                                            <div className="sample-icon"><i className="fas fa-transgender-alt"></i>
                                                <span>transgender-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-trash"></i>
                                                <span>trash</span></div>
                                            <div className="sample-icon"><i className="fas fa-trash-alt"></i>
                                                <span>trash-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-trash-restore"></i>
                                                <span>trash-restore</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-trash-restore-alt"></i>
                                                <span>trash-restore-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-tree"></i>
                                                <span>tree</span></div>
                                            <div className="sample-icon"><i className="fas fa-trophy"></i>
                                                <span>trophy</span></div>
                                            <div className="sample-icon"><i className="fas fa-truck"></i>
                                                <span>truck</span></div>
                                            <div className="sample-icon"><i className="fas fa-truck-loading"></i>
                                                <span>truck-loading</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-truck-monster"></i>
                                                <span>truck-monster</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-truck-moving"></i>
                                                <span>truck-moving</span></div>
                                            <div className="sample-icon"><i className="fas fa-truck-pickup"></i>
                                                <span>truck-pickup</span></div>
                                            <div className="sample-icon"><i className="fas fa-tshirt"></i>
                                                <span>tshirt</span></div>
                                            <div className="sample-icon"><i className="fas fa-tty"></i>
                                                <span>tty</span></div>
                                            <div className="sample-icon"><i className="fas fa-tv"></i>
                                                <span>tv</span></div>
                                            <div className="sample-icon"><i className="fas fa-umbrella"></i>
                                                <span>umbrella</span></div>
                                            <div className="sample-icon"><i className="fas fa-umbrella-beach"></i>
                                                <span>umbrella-beach</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-underline"></i>
                                                <span>underline</span></div>
                                            <div className="sample-icon"><i className="fas fa-undo"></i>
                                                <span>undo</span></div>
                                            <div className="sample-icon"><i className="fas fa-undo-alt"></i>
                                                <span>undo-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-universal-access"></i>
                                                <span>universal-access</span></div>
                                            <div className="sample-icon"><i className="fas fa-university"></i>
                                                <span>university</span></div>
                                            <div className="sample-icon"><i className="fas fa-unlink"></i>
                                                <span>unlink</span></div>
                                            <div className="sample-icon"><i className="fas fa-unlock"></i>
                                                <span>unlock</span></div>
                                            <div className="sample-icon"><i className="fas fa-unlock-alt"></i>
                                                <span>unlock-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-upload"></i>
                                                <span>upload</span></div>
                                            <div className="sample-icon"><i className="fas fa-user"></i>
                                                <span>user</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-alt"></i>
                                                <span>user-alt</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-alt-slash"></i>
                                                <span>user-alt-slash</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-user-astronaut"></i>
                                                <span>user-astronaut</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-user-check"></i>
                                                <span>user-check</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-circle"></i>
                                                <span>user-circle</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-clock"></i>
                                                <span>user-clock</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-cog"></i>
                                                <span>user-cog</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-edit"></i>
                                                <span>user-edit</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-friends"></i>
                                                <span>user-friends</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-graduate"></i>
                                                <span>user-graduate</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-user-injured"></i>
                                                <span>user-injured</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-lock"></i>
                                                <span>user-lock</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-md"></i>
                                                <span>user-md</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-minus"></i>
                                                <span>user-minus</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-ninja"></i>
                                                <span>user-ninja</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-nurse"></i>
                                                <span>user-nurse</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-plus"></i>
                                                <span>user-plus</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-secret"></i>
                                                <span>user-secret</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-shield"></i>
                                                <span>user-shield</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-slash"></i>
                                                <span>user-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-tag"></i>
                                                <span>user-tag</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-tie"></i>
                                                <span>user-tie</span></div>
                                            <div className="sample-icon"><i className="fas fa-user-times"></i>
                                                <span>user-times</span></div>
                                            <div className="sample-icon"><i className="fas fa-users"></i>
                                                <span>users</span></div>
                                            <div className="sample-icon"><i className="fas fa-users-cog"></i>
                                                <span>users-cog</span></div>
                                            <div className="sample-icon"><i className="fas fa-utensil-spoon"></i>
                                                <span>utensil-spoon</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-utensils"></i>
                                                <span>utensils</span></div>
                                            <div className="sample-icon"><i className="fas fa-vector-square"></i>
                                                <span>vector-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-venus"></i>
                                                <span>venus</span></div>
                                            <div className="sample-icon"><i className="fas fa-venus-double"></i>
                                                <span>venus-double</span></div>
                                            <div className="sample-icon"><i className="fas fa-venus-mars"></i>
                                                <span>venus-mars</span></div>
                                            <div className="sample-icon"><i className="fas fa-vial"></i>
                                                <span>vial</span></div>
                                            <div className="sample-icon"><i className="fas fa-vials"></i>
                                                <span>vials</span></div>
                                            <div className="sample-icon"><i className="fas fa-video"></i>
                                                <span>video</span></div>
                                            <div className="sample-icon"><i className="fas fa-video-slash"></i>
                                                <span>video-slash</span></div>
                                            <div className="sample-icon"><i className="fas fa-vihara"></i>
                                                <span>vihara</span></div>
                                            <div className="sample-icon"><i className="fas fa-volleyball-ball"></i>
                                                <span>volleyball-ball</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-volume-down"></i>
                                                <span>volume-down</span></div>
                                            <div className="sample-icon"><i className="fas fa-volume-mute"></i>
                                                <span>volume-mute</span></div>
                                            <div className="sample-icon"><i className="fas fa-volume-off"></i>
                                                <span>volume-off</span></div>
                                            <div className="sample-icon"><i className="fas fa-volume-up"></i>
                                                <span>volume-up</span></div>
                                            <div className="sample-icon"><i className="fas fa-vote-yea"></i>
                                                <span>vote-yea</span></div>
                                            <div className="sample-icon"><i className="fas fa-vr-cardboard"></i>
                                                <span>vr-cardboard</span></div>
                                            <div className="sample-icon"><i className="fas fa-walking"></i>
                                                <span>walking</span></div>
                                            <div className="sample-icon"><i className="fas fa-wallet"></i>
                                                <span>wallet</span></div>
                                            <div className="sample-icon"><i className="fas fa-warehouse"></i>
                                                <span>warehouse</span></div>
                                            <div className="sample-icon"><i className="fas fa-water"></i>
                                                <span>water</span></div>
                                            <div className="sample-icon"><i className="fas fa-weight"></i>
                                                <span>weight</span></div>
                                            <div className="sample-icon"><i className="fas fa-weight-hanging"></i>
                                                <span>weight-hanging</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-wheelchair"></i>
                                                <span>wheelchair</span></div>
                                            <div className="sample-icon"><i className="fas fa-wifi"></i>
                                                <span>wifi</span></div>
                                            <div className="sample-icon"><i className="fas fa-wind"></i>
                                                <span>wind</span></div>
                                            <div className="sample-icon"><i className="fas fa-window-close"></i>
                                                <span>window-close</span></div>
                                            <div className="sample-icon"><i className="fas fa-window-maximize"></i>
                                                <span>window-maximize</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-window-minimize"></i>
                                                <span>window-minimize</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-window-restore"></i>
                                                <span>window-restore</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-wine-bottle"></i>
                                                <span>wine-bottle</span></div>
                                            <div className="sample-icon"><i className="fas fa-wine-glass"></i>
                                                <span>wine-glass</span></div>
                                            <div className="sample-icon"><i className="fas fa-wine-glass-alt"></i>
                                                <span>wine-glass-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fas fa-won-sign"></i>
                                                <span>won-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-wrench"></i>
                                                <span>wrench</span></div>
                                            <div className="sample-icon"><i className="fas fa-x-ray"></i>
                                                <span>x-ray</span></div>
                                            <div className="sample-icon"><i className="fas fa-yen-sign"></i>
                                                <span>yen-sign</span></div>
                                            <div className="sample-icon"><i className="fas fa-yin-yang"></i>
                                                <span>yin-yang</span></div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="mb-3">Regular Icons</h5>
                                <div className="mb-4">
                                    <div className="wpb_wrapper">
                                        <div className="row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1">
                                            <div className="sample-icon"><i className="far fa-address-book"></i>
                                                <span>address-book</span></div>
                                            <div className="sample-icon"><i className="far fa-address-card"></i>
                                                <span>address-card</span></div>
                                            <div className="sample-icon"><i className="far fa-angry"></i>
                                                <span>angry</span></div>
                                            <div className="sample-icon"><i className="far fa-arrow-alt-circle-down"></i>
                                                <span>arrow-alt-circle-down</span></div>
                                            <div className="sample-icon"><i className="far fa-arrow-alt-circle-left"></i>
                                                <span>arrow-alt-circle-left</span></div>
                                            <div className="sample-icon"><i className="far fa-arrow-alt-circle-right"></i>
                                                <span>arrow-alt-circle-right</span></div>
                                            <div className="sample-icon"><i className="far fa-arrow-alt-circle-up"></i>
                                                <span>arrow-alt-circle-up</span></div>
                                            <div className="sample-icon"><i className="far fa-bell"></i>
                                                <span>bell</span></div>
                                            <div className="sample-icon"><i className="far fa-bell-slash"></i>
                                                <span>bell-slash</span></div>
                                            <div className="sample-icon"><i className="far fa-bookmark"></i>
                                                <span>bookmark</span></div>
                                            <div className="sample-icon"><i className="far fa-building"></i>
                                                <span>building</span></div>
                                            <div className="sample-icon"><i className="far fa-calendar"></i>
                                                <span>calendar</span></div>
                                            <div className="sample-icon"><i className="far fa-calendar-alt"></i>
                                                <span>calendar-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-calendar-check"></i>
                                                <span>calendar-check</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-calendar-minus"></i>
                                                <span>calendar-minus</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-calendar-plus"></i>
                                                <span>calendar-plus</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-calendar-times"></i>
                                                <span>calendar-times</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-caret-square-down"></i>
                                                <span>caret-square-down</span></div>
                                            <div className="sample-icon"><i className="far fa-caret-square-left"></i>
                                                <span>caret-square-left</span></div>
                                            <div className="sample-icon"><i className="far fa-caret-square-right"></i>
                                                <span>caret-square-right</span></div>
                                            <div className="sample-icon"><i className="far fa-caret-square-up"></i>
                                                <span>caret-square-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-chart-bar"></i>
                                                <span>chart-bar</span></div>
                                            <div className="sample-icon"><i className="far fa-check-circle"></i>
                                                <span>check-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-check-square"></i>
                                                <span>check-square</span></div>
                                            <div className="sample-icon"><i className="far fa-circle"></i>
                                                <span>circle</span></div>
                                            <div className="sample-icon"><i className="far fa-clipboard"></i>
                                                <span>clipboard</span></div>
                                            <div className="sample-icon"><i className="far fa-clock"></i>
                                                <span>clock</span></div>
                                            <div className="sample-icon"><i className="far fa-clone"></i>
                                                <span>clone</span></div>
                                            <div className="sample-icon"><i className="far fa-closed-captioning"></i>
                                                <span>closed-captioning</span></div>
                                            <div className="sample-icon"><i className="far fa-comment"></i>
                                                <span>comment</span></div>
                                            <div className="sample-icon"><i className="far fa-comment-alt"></i>
                                                <span>comment-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-comment-dots"></i>
                                                <span>comment-dots</span></div>
                                            <div className="sample-icon"><i className="far fa-comments"></i>
                                                <span>comments</span></div>
                                            <div className="sample-icon"><i className="far fa-compass"></i>
                                                <span>compass</span></div>
                                            <div className="sample-icon"><i className="far fa-copy"></i>
                                                <span>copy</span></div>
                                            <div className="sample-icon"><i className="far fa-copyright"></i>
                                                <span>copyright</span></div>
                                            <div className="sample-icon"><i className="far fa-credit-card"></i>
                                                <span>credit-card</span></div>
                                            <div className="sample-icon"><i className="far fa-dizzy"></i>
                                                <span>dizzy</span></div>
                                            <div className="sample-icon"><i className="far fa-dot-circle"></i>
                                                <span>dot-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-edit"></i>
                                                <span>edit</span></div>
                                            <div className="sample-icon"><i className="far fa-envelope"></i>
                                                <span>envelope</span></div>
                                            <div className="sample-icon"><i className="far fa-envelope-open"></i>
                                                <span>envelope-open</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-eye"></i>
                                                <span>eye</span></div>
                                            <div className="sample-icon"><i className="far fa-eye-slash"></i>
                                                <span>eye-slash</span></div>
                                            <div className="sample-icon"><i className="far fa-file"></i>
                                                <span>file</span></div>
                                            <div className="sample-icon"><i className="far fa-file-alt"></i>
                                                <span>file-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-file-archive"></i>
                                                <span>file-archive</span></div>
                                            <div className="sample-icon"><i className="far fa-file-audio"></i>
                                                <span>file-audio</span></div>
                                            <div className="sample-icon"><i className="far fa-file-code"></i>
                                                <span>file-code</span></div>
                                            <div className="sample-icon"><i className="far fa-file-excel"></i>
                                                <span>file-excel</span></div>
                                            <div className="sample-icon"><i className="far fa-file-image"></i>
                                                <span>file-image</span></div>
                                            <div className="sample-icon"><i className="far fa-file-pdf"></i>
                                                <span>file-pdf</span></div>
                                            <div className="sample-icon"><i className="far fa-file-powerpoint"></i>
                                                <span>file-powerpoint</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-file-video"></i>
                                                <span>file-video</span></div>
                                            <div className="sample-icon"><i className="far fa-file-word"></i>
                                                <span>file-word</span></div>
                                            <div className="sample-icon"><i className="far fa-flag"></i>
                                                <span>flag</span></div>
                                            <div className="sample-icon"><i className="far fa-flushed"></i>
                                                <span>flushed</span></div>
                                            <div className="sample-icon"><i className="far fa-folder"></i>
                                                <span>folder</span></div>
                                            <div className="sample-icon"><i className="far fa-folder-open"></i>
                                                <span>folder-open</span></div>
                                            <div className="sample-icon"><i className="far fa-frown"></i>
                                                <span>frown</span></div>
                                            <div className="sample-icon"><i className="far fa-frown-open"></i>
                                                <span>frown-open</span></div>
                                            <div className="sample-icon"><i className="far fa-futbol"></i>
                                                <span>futbol</span></div>
                                            <div className="sample-icon"><i className="far fa-gem"></i>
                                                <span>gem</span></div>
                                            <div className="sample-icon"><i className="far fa-grimace"></i>
                                                <span>grimace</span></div>
                                            <div className="sample-icon"><i className="far fa-grin"></i>
                                                <span>grin</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-alt"></i>
                                                <span>grin-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-beam"></i>
                                                <span>grin-beam</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-beam-sweat"></i>
                                                <span>grin-beam-sweat</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-grin-hearts"></i>
                                                <span>grin-hearts</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-squint"></i>
                                                <span>grin-squint</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-squint-tears"></i>
                                                <span>grin-squint-tears</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-stars"></i>
                                                <span>grin-stars</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-tears"></i>
                                                <span>grin-tears</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-tongue"></i>
                                                <span>grin-tongue</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-tongue-squint"></i>
                                                <span>grin-tongue-squint</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-tongue-wink"></i>
                                                <span>grin-tongue-wink</span></div>
                                            <div className="sample-icon"><i className="far fa-grin-wink"></i>
                                                <span>grin-wink</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-lizard"></i>
                                                <span>hand-lizard</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-paper"></i>
                                                <span>hand-paper</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-peace"></i>
                                                <span>hand-peace</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-point-down"></i>
                                                <span>hand-point-down</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-hand-point-left"></i>
                                                <span>hand-point-left</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-hand-point-right"></i>
                                                <span>hand-point-right</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-point-up"></i>
                                                <span>hand-point-up</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-hand-pointer"></i>
                                                <span>hand-pointer</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-rock"></i>
                                                <span>hand-rock</span></div>
                                            <div className="sample-icon"><i className="far fa-hand-scissors"></i>
                                                <span>hand-scissors</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-hand-spock"></i>
                                                <span>hand-spock</span></div>
                                            <div className="sample-icon"><i className="far fa-handshake"></i>
                                                <span>handshake</span></div>
                                            <div className="sample-icon"><i className="far fa-hdd"></i>
                                                <span>hdd</span></div>
                                            <div className="sample-icon"><i className="far fa-heart"></i>
                                                <span>heart</span></div>
                                            <div className="sample-icon"><i className="far fa-hospital"></i>
                                                <span>hospital</span></div>
                                            <div className="sample-icon"><i className="far fa-hourglass"></i>
                                                <span>hourglass</span></div>
                                            <div className="sample-icon"><i className="far fa-id-badge"></i>
                                                <span>id-badge</span></div>
                                            <div className="sample-icon"><i className="far fa-id-card"></i>
                                                <span>id-card</span></div>
                                            <div className="sample-icon"><i className="far fa-image"></i>
                                                <span>image</span></div>
                                            <div className="sample-icon"><i className="far fa-images"></i>
                                                <span>images</span></div>
                                            <div className="sample-icon"><i className="far fa-keyboard"></i>
                                                <span>keyboard</span></div>
                                            <div className="sample-icon"><i className="far fa-kiss"></i>
                                                <span>kiss</span></div>
                                            <div className="sample-icon"><i className="far fa-kiss-beam"></i>
                                                <span>kiss-beam</span></div>
                                            <div className="sample-icon"><i className="far fa-kiss-wink-heart"></i>
                                                <span>kiss-wink-heart</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-laugh"></i>
                                                <span>laugh</span></div>
                                            <div className="sample-icon"><i className="far fa-laugh-beam"></i>
                                                <span>laugh-beam</span></div>
                                            <div className="sample-icon"><i className="far fa-laugh-squint"></i>
                                                <span>laugh-squint</span></div>
                                            <div className="sample-icon"><i className="far fa-laugh-wink"></i>
                                                <span>laugh-wink</span></div>
                                            <div className="sample-icon"><i className="far fa-lemon"></i>
                                                <span>lemon</span></div>
                                            <div className="sample-icon"><i className="far fa-life-ring"></i>
                                                <span>life-ring</span></div>
                                            <div className="sample-icon"><i className="far fa-lightbulb"></i>
                                                <span>lightbulb</span></div>
                                            <div className="sample-icon"><i className="far fa-list-alt"></i>
                                                <span>list-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-map"></i>
                                                <span>map</span></div>
                                            <div className="sample-icon"><i className="far fa-meh"></i>
                                                <span>meh</span></div>
                                            <div className="sample-icon"><i className="far fa-meh-blank"></i>
                                                <span>meh-blank</span></div>
                                            <div className="sample-icon"><i className="far fa-meh-rolling-eyes"></i>
                                                <span>meh-rolling-eyes</span></div>
                                            <div className="sample-icon"><i className="far fa-minus-square"></i>
                                                <span>minus-square</span></div>
                                            <div className="sample-icon"><i className="far fa-money-bill-alt"></i>
                                                <span>money-bill-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-moon"></i>
                                                <span>moon</span></div>
                                            <div className="sample-icon"><i className="far fa-newspaper"></i>
                                                <span>newspaper</span></div>
                                            <div className="sample-icon"><i className="far fa-object-group"></i>
                                                <span>object-group</span></div>
                                            <div className="sample-icon"><i className="far fa-object-ungroup"></i>
                                                <span>object-ungroup</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-paper-plane"></i>
                                                <span>paper-plane</span></div>
                                            <div className="sample-icon"><i className="far fa-pause-circle"></i>
                                                <span>pause-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-play-circle"></i>
                                                <span>play-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-plus-square"></i>
                                                <span>plus-square</span></div>
                                            <div className="sample-icon"><i className="far fa-question-circle"></i>
                                                <span>question-circle</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-registered"></i>
                                                <span>registered</span></div>
                                            <div className="sample-icon"><i className="far fa-sad-cry"></i>
                                                <span>sad-cry</span></div>
                                            <div className="sample-icon"><i className="far fa-sad-tear"></i>
                                                <span>sad-tear</span></div>
                                            <div className="sample-icon"><i className="far fa-save"></i>
                                                <span>save</span></div>
                                            <div className="sample-icon"><i className="far fa-share-square"></i>
                                                <span>share-square</span></div>
                                            <div className="sample-icon"><i className="far fa-smile"></i>
                                                <span>smile</span></div>
                                            <div className="sample-icon"><i className="far fa-smile-beam"></i>
                                                <span>smile-beam</span></div>
                                            <div className="sample-icon"><i className="far fa-smile-wink"></i>
                                                <span>smile-wink</span></div>
                                            <div className="sample-icon"><i className="far fa-snowflake"></i>
                                                <span>snowflake</span></div>
                                            <div className="sample-icon"><i className="far fa-square"></i>
                                                <span>square</span></div>
                                            <div className="sample-icon"><i className="far fa-star"></i>
                                                <span>star</span></div>
                                            <div className="sample-icon"><i className="far fa-star-half"></i>
                                                <span>star-half</span></div>
                                            <div className="sample-icon"><i className="far fa-sticky-note"></i>
                                                <span>sticky-note</span></div>
                                            <div className="sample-icon"><i className="far fa-stop-circle"></i>
                                                <span>stop-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-sun"></i>
                                                <span>sun</span></div>
                                            <div className="sample-icon"><i className="far fa-surprise"></i>
                                                <span>surprise</span></div>
                                            <div className="sample-icon"><i className="far fa-thumbs-down"></i>
                                                <span>thumbs-down</span></div>
                                            <div className="sample-icon"><i className="far fa-thumbs-up"></i>
                                                <span>thumbs-up</span></div>
                                            <div className="sample-icon"><i className="far fa-times-circle"></i>
                                                <span>times-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-tired"></i>
                                                <span>tired</span></div>
                                            <div className="sample-icon"><i className="far fa-trash-alt"></i>
                                                <span>trash-alt</span></div>
                                            <div className="sample-icon"><i className="far fa-user"></i>
                                                <span>user</span></div>
                                            <div className="sample-icon"><i className="far fa-user-circle"></i>
                                                <span>user-circle</span></div>
                                            <div className="sample-icon"><i className="far fa-window-close"></i>
                                                <span>window-close</span></div>
                                            <div className="sample-icon"><i className="far fa-window-maximize"></i>
                                                <span>window-maximize</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-window-minimize"></i>
                                                <span>window-minimize</span>
                                            </div>
                                            <div className="sample-icon"><i className="far fa-window-restore"></i>
                                                <span>window-restore</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="mb-3">Brands Icons</h5>
                                <div className="mb-4">
                                    <div className="wpb_wrapper">
                                        <div className="row fontawesome-icon-list cols-lg-4 cols-md-3 cols-xs-2 cols-1">
                                            <div className="sample-icon"><i className="fab fa-500px"></i>
                                                <span>500px</span></div>
                                            <div className="sample-icon"><i className="fab fa-accessible-icon"></i>
                                                <span>accessible-icon</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-accusoft"></i>
                                                <span>accusoft</span></div>
                                            <div className="sample-icon"><i className="fab fa-acquisitions-incorporated"></i>
                                                <span>acquisitions-incorporated</span></div>
                                            <div className="sample-icon"><i className="fab fa-adn"></i>
                                                <span>adn</span></div>
                                            <div className="sample-icon"><i className="fab fa-adobe"></i>
                                                <span>adobe</span></div>
                                            <div className="sample-icon"><i className="fab fa-adversal"></i>
                                                <span>adversal</span></div>
                                            <div className="sample-icon"><i className="fab fa-affiliatetheme"></i>
                                                <span>affiliatetheme</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-algolia"></i>
                                                <span>algolia</span></div>
                                            <div className="sample-icon"><i className="fab fa-alipay"></i>
                                                <span>alipay</span></div>
                                            <div className="sample-icon"><i className="fab fa-amazon"></i>
                                                <span>amazon</span></div>
                                            <div className="sample-icon"><i className="fab fa-amazon-pay"></i>
                                                <span>amazon-pay</span></div>
                                            <div className="sample-icon"><i className="fab fa-amilia"></i>
                                                <span>amilia</span></div>
                                            <div className="sample-icon"><i className="fab fa-android"></i>
                                                <span>android</span></div>
                                            <div className="sample-icon"><i className="fab fa-angellist"></i>
                                                <span>angellist</span></div>
                                            <div className="sample-icon"><i className="fab fa-angrycreative"></i>
                                                <span>angrycreative</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-angular"></i>
                                                <span>angular</span></div>
                                            <div className="sample-icon"><i className="fab fa-app-store"></i>
                                                <span>app-store</span></div>
                                            <div className="sample-icon"><i className="fab fa-app-store-ios"></i>
                                                <span>app-store-ios</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-apper"></i>
                                                <span>apper</span></div>
                                            <div className="sample-icon"><i className="fab fa-apple"></i>
                                                <span>apple</span></div>
                                            <div className="sample-icon"><i className="fab fa-apple-pay"></i>
                                                <span>apple-pay</span></div>
                                            <div className="sample-icon"><i className="fab fa-artstation"></i>
                                                <span>artstation</span></div>
                                            <div className="sample-icon"><i className="fab fa-asymmetrik"></i>
                                                <span>asymmetrik</span></div>
                                            <div className="sample-icon"><i className="fab fa-atlassian"></i>
                                                <span>atlassian</span></div>
                                            <div className="sample-icon"><i className="fab fa-audible"></i>
                                                <span>audible</span></div>
                                            <div className="sample-icon"><i className="fab fa-autoprefixer"></i>
                                                <span>autoprefixer</span></div>
                                            <div className="sample-icon"><i className="fab fa-avianex"></i>
                                                <span>avianex</span></div>
                                            <div className="sample-icon"><i className="fab fa-aviato"></i>
                                                <span>aviato</span></div>
                                            <div className="sample-icon"><i className="fab fa-aws"></i>
                                                <span>aws</span></div>
                                            <div className="sample-icon"><i className="fab fa-bandcamp"></i>
                                                <span>bandcamp</span></div>
                                            <div className="sample-icon"><i className="fab fa-behance"></i>
                                                <span>behance</span></div>
                                            <div className="sample-icon"><i className="fab fa-behance-square"></i>
                                                <span>behance-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-bimobject"></i>
                                                <span>bimobject</span></div>
                                            <div className="sample-icon"><i className="fab fa-bitbucket"></i>
                                                <span>bitbucket</span></div>
                                            <div className="sample-icon"><i className="fab fa-bitcoin"></i>
                                                <span>bitcoin</span></div>
                                            <div className="sample-icon"><i className="fab fa-bity"></i>
                                                <span>bity</span></div>
                                            <div className="sample-icon"><i className="fab fa-black-tie"></i>
                                                <span>black-tie</span></div>
                                            <div className="sample-icon"><i className="fab fa-blackberry"></i>
                                                <span>blackberry</span></div>
                                            <div className="sample-icon"><i className="fab fa-blogger"></i>
                                                <span>blogger</span></div>
                                            <div className="sample-icon"><i className="fab fa-blogger-b"></i>
                                                <span>blogger-b</span></div>
                                            <div className="sample-icon"><i className="fab fa-bluetooth"></i>
                                                <span>bluetooth</span></div>
                                            <div className="sample-icon"><i className="fab fa-bluetooth-b"></i>
                                                <span>bluetooth-b</span></div>
                                            <div className="sample-icon"><i className="fab fa-btc"></i>
                                                <span>btc</span></div>
                                            <div className="sample-icon"><i className="fab fa-buromobelexperte"></i>
                                                <span>buromobelexperte</span></div>
                                            <div className="sample-icon"><i className="fab fa-buysellads"></i>
                                                <span>buysellads</span></div>
                                            <div className="sample-icon"><i className="fab fa-canadian-maple-leaf"></i>
                                                <span>canadian-maple-leaf</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-amazon-pay"></i>
                                                <span>cc-amazon-pay</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-cc-amex"></i>
                                                <span>cc-amex</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-apple-pay"></i>
                                                <span>cc-apple-pay</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-diners-club"></i>
                                                <span>cc-diners-club</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-cc-discover"></i>
                                                <span>cc-discover</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-jcb"></i>
                                                <span>cc-jcb</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-mastercard"></i>
                                                <span>cc-mastercard</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-cc-paypal"></i>
                                                <span>cc-paypal</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-stripe"></i>
                                                <span>cc-stripe</span></div>
                                            <div className="sample-icon"><i className="fab fa-cc-visa"></i>
                                                <span>cc-visa</span></div>
                                            <div className="sample-icon"><i className="fab fa-centercode"></i>
                                                <span>centercode</span></div>
                                            <div className="sample-icon"><i className="fab fa-centos"></i>
                                                <span>centos</span></div>
                                            <div className="sample-icon"><i className="fab fa-chrome"></i>
                                                <span>chrome</span></div>
                                            <div className="sample-icon"><i className="fab fa-cloudscale"></i>
                                                <span>cloudscale</span></div>
                                            <div className="sample-icon"><i className="fab fa-cloudsmith"></i>
                                                <span>cloudsmith</span></div>
                                            <div className="sample-icon"><i className="fab fa-cloudversify"></i>
                                                <span>cloudversify</span></div>
                                            <div className="sample-icon"><i className="fab fa-codepen"></i>
                                                <span>codepen</span></div>
                                            <div className="sample-icon"><i className="fab fa-codiepie"></i>
                                                <span>codiepie</span></div>
                                            <div className="sample-icon"><i className="fab fa-confluence"></i>
                                                <span>confluence</span></div>
                                            <div className="sample-icon"><i className="fab fa-connectdevelop"></i>
                                                <span>connectdevelop</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-contao"></i>
                                                <span>contao</span></div>
                                            <div className="sample-icon"><i className="fab fa-cpanel"></i>
                                                <span>cpanel</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons"></i>
                                                <span>creative-commons</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-by"></i>
                                                <span>creative-commons-by</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-nc"></i>
                                                <span>creative-commons-nc</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-nc-eu"></i>
                                                <span>creative-commons-nc-eu</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-nc-jp"></i>
                                                <span>creative-commons-nc-jp</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-nd"></i>
                                                <span>creative-commons-nd</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-pd"></i>
                                                <span>creative-commons-pd</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-pd-alt"></i>
                                                <span>creative-commons-pd-alt</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-remix"></i>
                                                <span>creative-commons-remix</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-sa"></i>
                                                <span>creative-commons-sa</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-sampling"></i>
                                                <span>creative-commons-sampling</span></div>
                                            <div className="sample-icon"><i
                                                className="fab fa-creative-commons-sampling-plus"></i>
                                                <span>creative-commons-sampling-plus</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-share"></i>
                                                <span>creative-commons-share</span></div>
                                            <div className="sample-icon"><i className="fab fa-creative-commons-zero"></i>
                                                <span>creative-commons-zero</span></div>
                                            <div className="sample-icon"><i className="fab fa-critical-role"></i>
                                                <span>critical-role</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-css3"></i>
                                                <span>css3</span></div>
                                            <div className="sample-icon"><i className="fab fa-css3-alt"></i>
                                                <span>css3-alt</span></div>
                                            <div className="sample-icon"><i className="fab fa-cuttlefish"></i>
                                                <span>cuttlefish</span></div>
                                            <div className="sample-icon"><i className="fab fa-d-and-d"></i>
                                                <span>d-and-d</span></div>
                                            <div className="sample-icon"><i className="fab fa-d-and-d-beyond"></i>
                                                <span>d-and-d-beyond</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-dashcube"></i>
                                                <span>dashcube</span></div>
                                            <div className="sample-icon"><i className="fab fa-delicious"></i>
                                                <span>delicious</span></div>
                                            <div className="sample-icon"><i className="fab fa-deploydog"></i>
                                                <span>deploydog</span></div>
                                            <div className="sample-icon"><i className="fab fa-deskpro"></i>
                                                <span>deskpro</span></div>
                                            <div className="sample-icon"><i className="fab fa-dev"></i>
                                                <span>dev</span></div>
                                            <div className="sample-icon"><i className="fab fa-deviantart"></i>
                                                <span>deviantart</span></div>
                                            <div className="sample-icon"><i className="fab fa-dhl"></i>
                                                <span>dhl</span></div>
                                            <div className="sample-icon"><i className="fab fa-diaspora"></i>
                                                <span>diaspora</span></div>
                                            <div className="sample-icon"><i className="fab fa-digg"></i>
                                                <span>digg</span></div>
                                            <div className="sample-icon"><i className="fab fa-digital-ocean"></i>
                                                <span>digital-ocean</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-discord"></i>
                                                <span>discord</span></div>
                                            <div className="sample-icon"><i className="fab fa-discourse"></i>
                                                <span>discourse</span></div>
                                            <div className="sample-icon"><i className="fab fa-dochub"></i>
                                                <span>dochub</span></div>
                                            <div className="sample-icon"><i className="fab fa-docker"></i>
                                                <span>docker</span></div>
                                            <div className="sample-icon"><i className="fab fa-draft2digital"></i>
                                                <span>draft2digital</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-dribbble"></i>
                                                <span>dribbble</span></div>
                                            <div className="sample-icon"><i className="fab fa-dribbble-square"></i>
                                                <span>dribbble-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-dropbox"></i>
                                                <span>dropbox</span></div>
                                            <div className="sample-icon"><i className="fab fa-drupal"></i>
                                                <span>drupal</span></div>
                                            <div className="sample-icon"><i className="fab fa-dyalog"></i>
                                                <span>dyalog</span></div>
                                            <div className="sample-icon"><i className="fab fa-earlybirds"></i>
                                                <span>earlybirds</span></div>
                                            <div className="sample-icon"><i className="fab fa-ebay"></i>
                                                <span>ebay</span></div>
                                            <div className="sample-icon"><i className="fab fa-edge"></i>
                                                <span>edge</span></div>
                                            <div className="sample-icon"><i className="fab fa-elementor"></i>
                                                <span>elementor</span></div>
                                            <div className="sample-icon"><i className="fab fa-ello"></i>
                                                <span>ello</span></div>
                                            <div className="sample-icon"><i className="fab fa-ember"></i>
                                                <span>ember</span></div>
                                            <div className="sample-icon"><i className="fab fa-empire"></i>
                                                <span>empire</span></div>
                                            <div className="sample-icon"><i className="fab fa-envira"></i>
                                                <span>envira</span></div>
                                            <div className="sample-icon"><i className="fab fa-erlang"></i>
                                                <span>erlang</span></div>
                                            <div className="sample-icon"><i className="fab fa-ethereum"></i>
                                                <span>ethereum</span></div>
                                            <div className="sample-icon"><i className="fab fa-etsy"></i>
                                                <span>etsy</span></div>
                                            <div className="sample-icon"><i className="fab fa-expeditedssl"></i>
                                                <span>expeditedssl</span></div>
                                            <div className="sample-icon"><i className="fab fa-facebook"></i>
                                                <span>facebook</span></div>
                                            <div className="sample-icon"><i className="fab fa-facebook-f"></i>
                                                <span>facebook-f</span></div>
                                            <div className="sample-icon"><i className="fab fa-facebook-messenger"></i>
                                                <span>facebook-messenger</span></div>
                                            <div className="sample-icon"><i className="fab fa-facebook-square"></i>
                                                <span>facebook-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-fantasy-flight-games"></i>
                                                <span>fantasy-flight-games</span></div>
                                            <div className="sample-icon"><i className="fab fa-fedex"></i>
                                                <span>fedex</span></div>
                                            <div className="sample-icon"><i className="fab fa-fedora"></i>
                                                <span>fedora</span></div>
                                            <div className="sample-icon"><i className="fab fa-figma"></i>
                                                <span>figma</span></div>
                                            <div className="sample-icon"><i className="fab fa-firefox"></i>
                                                <span>firefox</span></div>
                                            <div className="sample-icon"><i className="fab fa-first-order"></i>
                                                <span>first-order</span></div>
                                            <div className="sample-icon"><i className="fab fa-first-order-alt"></i>
                                                <span>first-order-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-firstdraft"></i>
                                                <span>firstdraft</span></div>
                                            <div className="sample-icon"><i className="fab fa-flickr"></i>
                                                <span>flickr</span></div>
                                            <div className="sample-icon"><i className="fab fa-flipboard"></i>
                                                <span>flipboard</span></div>
                                            <div className="sample-icon"><i className="fab fa-fly"></i>
                                                <span>fly</span></div>
                                            <div className="sample-icon"><i className="fab fa-font-awesome"></i>
                                                <span>font-awesome</span></div>
                                            <div className="sample-icon"><i className="fab fa-font-awesome-alt"></i>
                                                <span>font-awesome-alt</span></div>
                                            <div className="sample-icon"><i className="fab fa-font-awesome-flag"></i>
                                                <span>font-awesome-flag</span></div>
                                            <div className="sample-icon"><i className="fab fa-fonticons"></i>
                                                <span>fonticons</span></div>
                                            <div className="sample-icon"><i className="fab fa-fonticons-fi"></i>
                                                <span>fonticons-fi</span></div>
                                            <div className="sample-icon"><i className="fab fa-fort-awesome"></i>
                                                <span>fort-awesome</span></div>
                                            <div className="sample-icon"><i className="fab fa-fort-awesome-alt"></i>
                                                <span>fort-awesome-alt</span></div>
                                            <div className="sample-icon"><i className="fab fa-forumbee"></i>
                                                <span>forumbee</span></div>
                                            <div className="sample-icon"><i className="fab fa-foursquare"></i>
                                                <span>foursquare</span></div>
                                            <div className="sample-icon"><i className="fab fa-free-code-camp"></i>
                                                <span>free-code-camp</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-freebsd"></i>
                                                <span>freebsd</span></div>
                                            <div className="sample-icon"><i className="fab fa-fulcrum"></i>
                                                <span>fulcrum</span></div>
                                            <div className="sample-icon"><i className="fab fa-galactic-republic"></i>
                                                <span>galactic-republic</span></div>
                                            <div className="sample-icon"><i className="fab fa-galactic-senate"></i>
                                                <span>galactic-senate</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-get-pocket"></i>
                                                <span>get-pocket</span></div>
                                            <div className="sample-icon"><i className="fab fa-gg"></i>
                                                <span>gg</span></div>
                                            <div className="sample-icon"><i className="fab fa-gg-circle"></i>
                                                <span>gg-circle</span></div>
                                            <div className="sample-icon"><i className="fab fa-git"></i>
                                                <span>git</span></div>
                                            <div className="sample-icon"><i className="fab fa-git-square"></i>
                                                <span>git-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-github"></i>
                                                <span>github</span></div>
                                            <div className="sample-icon"><i className="fab fa-github-alt"></i>
                                                <span>github-alt</span></div>
                                            <div className="sample-icon"><i className="fab fa-github-square"></i>
                                                <span>github-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-gitkraken"></i>
                                                <span>gitkraken</span></div>
                                            <div className="sample-icon"><i className="fab fa-gitlab"></i>
                                                <span>gitlab</span></div>
                                            <div className="sample-icon"><i className="fab fa-gitter"></i>
                                                <span>gitter</span></div>
                                            <div className="sample-icon"><i className="fab fa-glide"></i>
                                                <span>glide</span></div>
                                            <div className="sample-icon"><i className="fab fa-glide-g"></i>
                                                <span>glide-g</span></div>
                                            <div className="sample-icon"><i className="fab fa-gofore"></i>
                                                <span>gofore</span></div>
                                            <div className="sample-icon"><i className="fab fa-goodreads"></i>
                                                <span>goodreads</span></div>
                                            <div className="sample-icon"><i className="fab fa-goodreads-g"></i>
                                                <span>goodreads-g</span></div>
                                            <div className="sample-icon"><i className="fab fa-google"></i>
                                                <span>google</span></div>
                                            <div className="sample-icon"><i className="fab fa-google-drive"></i>
                                                <span>google-drive</span></div>
                                            <div className="sample-icon"><i className="fab fa-google-play"></i>
                                                <span>google-play</span></div>
                                            <div className="sample-icon"><i className="fab fa-google-plus"></i>
                                                <span>google-plus</span></div>
                                            <div className="sample-icon"><i className="fab fa-google-plus-g"></i>
                                                <span>google-plus-g</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-google-plus-square"></i>
                                                <span>google-plus-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-google-wallet"></i>
                                                <span>google-wallet</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-gratipay"></i>
                                                <span>gratipay</span></div>
                                            <div className="sample-icon"><i className="fab fa-grav"></i>
                                                <span>grav</span></div>
                                            <div className="sample-icon"><i className="fab fa-gripfire"></i>
                                                <span>gripfire</span></div>
                                            <div className="sample-icon"><i className="fab fa-grunt"></i>
                                                <span>grunt</span></div>
                                            <div className="sample-icon"><i className="fab fa-gulp"></i>
                                                <span>gulp</span></div>
                                            <div className="sample-icon"><i className="fab fa-hacker-news"></i>
                                                <span>hacker-news</span></div>
                                            <div className="sample-icon"><i className="fab fa-hacker-news-square"></i>
                                                <span>hacker-news-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-hackerrank"></i>
                                                <span>hackerrank</span></div>
                                            <div className="sample-icon"><i className="fab fa-hips"></i>
                                                <span>hips</span></div>
                                            <div className="sample-icon"><i className="fab fa-hire-a-helper"></i>
                                                <span>hire-a-helper</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-hooli"></i>
                                                <span>hooli</span></div>
                                            <div className="sample-icon"><i className="fab fa-hornbill"></i>
                                                <span>hornbill</span></div>
                                            <div className="sample-icon"><i className="fab fa-hotjar"></i>
                                                <span>hotjar</span></div>
                                            <div className="sample-icon"><i className="fab fa-houzz"></i>
                                                <span>houzz</span></div>
                                            <div className="sample-icon"><i className="fab fa-html5"></i>
                                                <span>html5</span></div>
                                            <div className="sample-icon"><i className="fab fa-hubspot"></i>
                                                <span>hubspot</span></div>
                                            <div className="sample-icon"><i className="fab fa-imdb"></i>
                                                <span>imdb</span></div>
                                            <div className="sample-icon"><i className="fab fa-instagram"></i>
                                                <span>instagram</span></div>
                                            <div className="sample-icon"><i className="fab fa-intercom"></i>
                                                <span>intercom</span></div>
                                            <div className="sample-icon"><i className="fab fa-internet-explorer"></i>
                                                <span>internet-explorer</span></div>
                                            <div className="sample-icon"><i className="fab fa-invision"></i>
                                                <span>invision</span></div>
                                            <div className="sample-icon"><i className="fab fa-ioxhost"></i>
                                                <span>ioxhost</span></div>
                                            <div className="sample-icon"><i className="fab fa-itunes"></i>
                                                <span>itunes</span></div>
                                            <div className="sample-icon"><i className="fab fa-itunes-note"></i>
                                                <span>itunes-note</span></div>
                                            <div className="sample-icon"><i className="fab fa-java"></i>
                                                <span>java</span></div>
                                            <div className="sample-icon"><i className="fab fa-jedi-order"></i>
                                                <span>jedi-order</span></div>
                                            <div className="sample-icon"><i className="fab fa-jenkins"></i>
                                                <span>jenkins</span></div>
                                            <div className="sample-icon"><i className="fab fa-jira"></i>
                                                <span>jira</span></div>
                                            <div className="sample-icon"><i className="fab fa-joget"></i>
                                                <span>joget</span></div>
                                            <div className="sample-icon"><i className="fab fa-joomla"></i>
                                                <span>joomla</span></div>
                                            <div className="sample-icon"><i className="fab fa-js"></i>
                                                <span>js</span></div>
                                            <div className="sample-icon"><i className="fab fa-js-square"></i>
                                                <span>js-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-jsfiddle"></i>
                                                <span>jsfiddle</span></div>
                                            <div className="sample-icon"><i className="fab fa-kaggle"></i>
                                                <span>kaggle</span></div>
                                            <div className="sample-icon"><i className="fab fa-keybase"></i>
                                                <span>keybase</span></div>
                                            <div className="sample-icon"><i className="fab fa-keycdn"></i>
                                                <span>keycdn</span></div>
                                            <div className="sample-icon"><i className="fab fa-kickstarter"></i>
                                                <span>kickstarter</span></div>
                                            <div className="sample-icon"><i className="fab fa-kickstarter-k"></i>
                                                <span>kickstarter-k</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-korvue"></i>
                                                <span>korvue</span></div>
                                            <div className="sample-icon"><i className="fab fa-laravel"></i>
                                                <span>laravel</span></div>
                                            <div className="sample-icon"><i className="fab fa-lastfm"></i>
                                                <span>lastfm</span></div>
                                            <div className="sample-icon"><i className="fab fa-lastfm-square"></i>
                                                <span>lastfm-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-leanpub"></i>
                                                <span>leanpub</span></div>
                                            <div className="sample-icon"><i className="fab fa-less"></i>
                                                <span>less</span></div>
                                            <div className="sample-icon"><i className="fab fa-line"></i>
                                                <span>line</span></div>
                                            <div className="sample-icon"><i className="fab fa-linkedin"></i>
                                                <span>linkedin</span></div>
                                            <div className="sample-icon"><i className="fab fa-linkedin-in"></i>
                                                <span>linkedin-in</span></div>
                                            <div className="sample-icon"><i className="fab fa-linode"></i>
                                                <span>linode</span></div>
                                            <div className="sample-icon"><i className="fab fa-linux"></i>
                                                <span>linux</span></div>
                                            <div className="sample-icon"><i className="fab fa-lyft"></i>
                                                <span>lyft</span></div>
                                            <div className="sample-icon"><i className="fab fa-magento"></i>
                                                <span>magento</span></div>
                                            <div className="sample-icon"><i className="fab fa-mailchimp"></i>
                                                <span>mailchimp</span></div>
                                            <div className="sample-icon"><i className="fab fa-mandalorian"></i>
                                                <span>mandalorian</span></div>
                                            <div className="sample-icon"><i className="fab fa-markdown"></i>
                                                <span>markdown</span></div>
                                            <div className="sample-icon"><i className="fab fa-mastodon"></i>
                                                <span>mastodon</span></div>
                                            <div className="sample-icon"><i className="fab fa-maxcdn"></i>
                                                <span>maxcdn</span></div>
                                            <div className="sample-icon"><i className="fab fa-medapps"></i>
                                                <span>medapps</span></div>
                                            <div className="sample-icon"><i className="fab fa-medium"></i>
                                                <span>medium</span></div>
                                            <div className="sample-icon"><i className="fab fa-medium-m"></i>
                                                <span>medium-m</span></div>
                                            <div className="sample-icon"><i className="fab fa-medrt"></i>
                                                <span>medrt</span></div>
                                            <div className="sample-icon"><i className="fab fa-meetup"></i>
                                                <span>meetup</span></div>
                                            <div className="sample-icon"><i className="fab fa-megaport"></i>
                                                <span>megaport</span></div>
                                            <div className="sample-icon"><i className="fab fa-mendeley"></i>
                                                <span>mendeley</span></div>
                                            <div className="sample-icon"><i className="fab fa-microsoft"></i>
                                                <span>microsoft</span></div>
                                            <div className="sample-icon"><i className="fab fa-mix"></i>
                                                <span>mix</span></div>
                                            <div className="sample-icon"><i className="fab fa-mixcloud"></i>
                                                <span>mixcloud</span></div>
                                            <div className="sample-icon"><i className="fab fa-mizuni"></i>
                                                <span>mizuni</span></div>
                                            <div className="sample-icon"><i className="fab fa-modx"></i>
                                                <span>modx</span></div>
                                            <div className="sample-icon"><i className="fab fa-monero"></i>
                                                <span>monero</span></div>
                                            <div className="sample-icon"><i className="fab fa-napster"></i>
                                                <span>napster</span></div>
                                            <div className="sample-icon"><i className="fab fa-neos"></i>
                                                <span>neos</span></div>
                                            <div className="sample-icon"><i className="fab fa-nimblr"></i>
                                                <span>nimblr</span></div>
                                            <div className="sample-icon"><i className="fab fa-nintendo-switch"></i>
                                                <span>nintendo-switch</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-node"></i>
                                                <span>node</span></div>
                                            <div className="sample-icon"><i className="fab fa-node-js"></i>
                                                <span>node-js</span></div>
                                            <div className="sample-icon"><i className="fab fa-npm"></i>
                                                <span>npm</span></div>
                                            <div className="sample-icon"><i className="fab fa-ns8"></i>
                                                <span>ns8</span></div>
                                            <div className="sample-icon"><i className="fab fa-nutritionix"></i>
                                                <span>nutritionix</span></div>
                                            <div className="sample-icon"><i className="fab fa-odnoklassniki"></i>
                                                <span>odnoklassniki</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-odnoklassniki-square"></i>
                                                <span>odnoklassniki-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-old-republic"></i>
                                                <span>old-republic</span></div>
                                            <div className="sample-icon"><i className="fab fa-opencart"></i>
                                                <span>opencart</span></div>
                                            <div className="sample-icon"><i className="fab fa-openid"></i>
                                                <span>openid</span></div>
                                            <div className="sample-icon"><i className="fab fa-opera"></i>
                                                <span>opera</span></div>
                                            <div className="sample-icon"><i className="fab fa-optin-monster"></i>
                                                <span>optin-monster</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-osi"></i>
                                                <span>osi</span></div>
                                            <div className="sample-icon"><i className="fab fa-page4"></i>
                                                <span>page4</span></div>
                                            <div className="sample-icon"><i className="fab fa-pagelines"></i>
                                                <span>pagelines</span></div>
                                            <div className="sample-icon"><i className="fab fa-palfed"></i>
                                                <span>palfed</span></div>
                                            <div className="sample-icon"><i className="fab fa-patreon"></i>
                                                <span>patreon</span></div>
                                            <div className="sample-icon"><i className="fab fa-paypal"></i>
                                                <span>paypal</span></div>
                                            <div className="sample-icon"><i className="fab fa-penny-arcade"></i>
                                                <span>penny-arcade</span></div>
                                            <div className="sample-icon"><i className="fab fa-periscope"></i>
                                                <span>periscope</span></div>
                                            <div className="sample-icon"><i className="fab fa-phabricator"></i>
                                                <span>phabricator</span></div>
                                            <div className="sample-icon"><i className="fab fa-phoenix-framework"></i>
                                                <span>phoenix-framework</span></div>
                                            <div className="sample-icon"><i className="fab fa-phoenix-squadron"></i>
                                                <span>phoenix-squadron</span></div>
                                            <div className="sample-icon"><i className="fab fa-php"></i>
                                                <span>php</span></div>
                                            <div className="sample-icon"><i className="fab fa-pied-piper"></i>
                                                <span>pied-piper</span></div>
                                            <div className="sample-icon"><i className="fab fa-pied-piper-alt"></i>
                                                <span>pied-piper-alt</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-pied-piper-hat"></i>
                                                <span>pied-piper-hat</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-pied-piper-pp"></i>
                                                <span>pied-piper-pp</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-pinterest"></i>
                                                <span>pinterest</span></div>
                                            <div className="sample-icon"><i className="fab fa-pinterest-p"></i>
                                                <span>pinterest-p</span></div>
                                            <div className="sample-icon"><i className="fab fa-pinterest-square"></i>
                                                <span>pinterest-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-playstation"></i>
                                                <span>playstation</span></div>
                                            <div className="sample-icon"><i className="fab fa-product-hunt"></i>
                                                <span>product-hunt</span></div>
                                            <div className="sample-icon"><i className="fab fa-pushed"></i>
                                                <span>pushed</span></div>
                                            <div className="sample-icon"><i className="fab fa-python"></i>
                                                <span>python</span></div>
                                            <div className="sample-icon"><i className="fab fa-qq"></i>
                                                <span>qq</span></div>
                                            <div className="sample-icon"><i className="fab fa-quinscape"></i>
                                                <span>quinscape</span></div>
                                            <div className="sample-icon"><i className="fab fa-quora"></i>
                                                <span>quora</span></div>
                                            <div className="sample-icon"><i className="fab fa-r-project"></i>
                                                <span>r-project</span></div>
                                            <div className="sample-icon"><i className="fab fa-raspberry-pi"></i>
                                                <span>raspberry-pi</span></div>
                                            <div className="sample-icon"><i className="fab fa-ravelry"></i>
                                                <span>ravelry</span></div>
                                            <div className="sample-icon"><i className="fab fa-react"></i>
                                                <span>react</span></div>
                                            <div className="sample-icon"><i className="fab fa-reacteurope"></i>
                                                <span>reacteurope</span></div>
                                            <div className="sample-icon"><i className="fab fa-readme"></i>
                                                <span>readme</span></div>
                                            <div className="sample-icon"><i className="fab fa-rebel"></i>
                                                <span>rebel</span></div>
                                            <div className="sample-icon"><i className="fab fa-red-river"></i>
                                                <span>red-river</span></div>
                                            <div className="sample-icon"><i className="fab fa-reddit"></i>
                                                <span>reddit</span></div>
                                            <div className="sample-icon"><i className="fab fa-reddit-alien"></i>
                                                <span>reddit-alien</span></div>
                                            <div className="sample-icon"><i className="fab fa-reddit-square"></i>
                                                <span>reddit-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-redhat"></i>
                                                <span>redhat</span></div>
                                            <div className="sample-icon"><i className="fab fa-renren"></i>
                                                <span>renren</span></div>
                                            <div className="sample-icon"><i className="fab fa-replyd"></i>
                                                <span>replyd</span></div>
                                            <div className="sample-icon"><i className="fab fa-researchgate"></i>
                                                <span>researchgate</span></div>
                                            <div className="sample-icon"><i className="fab fa-resolving"></i>
                                                <span>resolving</span></div>
                                            <div className="sample-icon"><i className="fab fa-rev"></i>
                                                <span>rev</span></div>
                                            <div className="sample-icon"><i className="fab fa-rocketchat"></i>
                                                <span>rocketchat</span></div>
                                            <div className="sample-icon"><i className="fab fa-rockrms"></i>
                                                <span>rockrms</span></div>
                                            <div className="sample-icon"><i className="fab fa-safari"></i>
                                                <span>safari</span></div>
                                            <div className="sample-icon"><i className="fab fa-sass"></i>
                                                <span>sass</span></div>
                                            <div className="sample-icon"><i className="fab fa-schlix"></i>
                                                <span>schlix</span></div>
                                            <div className="sample-icon"><i className="fab fa-scribd"></i>
                                                <span>scribd</span></div>
                                            <div className="sample-icon"><i className="fab fa-searchengin"></i>
                                                <span>searchengin</span></div>
                                            <div className="sample-icon"><i className="fab fa-sellcast"></i>
                                                <span>sellcast</span></div>
                                            <div className="sample-icon"><i className="fab fa-sellsy"></i>
                                                <span>sellsy</span></div>
                                            <div className="sample-icon"><i className="fab fa-servicestack"></i>
                                                <span>servicestack</span></div>
                                            <div className="sample-icon"><i className="fab fa-shirtsinbulk"></i>
                                                <span>shirtsinbulk</span></div>
                                            <div className="sample-icon"><i className="fab fa-shopware"></i>
                                                <span>shopware</span></div>
                                            <div className="sample-icon"><i className="fab fa-simplybuilt"></i>
                                                <span>simplybuilt</span></div>
                                            <div className="sample-icon"><i className="fab fa-sistrix"></i>
                                                <span>sistrix</span></div>
                                            <div className="sample-icon"><i className="fab fa-sith"></i>
                                                <span>sith</span></div>
                                            <div className="sample-icon"><i className="fab fa-sketch"></i>
                                                <span>sketch</span></div>
                                            <div className="sample-icon"><i className="fab fa-skyatlas"></i>
                                                <span>skyatlas</span></div>
                                            <div className="sample-icon"><i className="fab fa-skype"></i>
                                                <span>skype</span></div>
                                            <div className="sample-icon"><i className="fab fa-slack"></i>
                                                <span>slack</span></div>
                                            <div className="sample-icon"><i className="fab fa-slack-hash"></i>
                                                <span>slack-hash</span></div>
                                            <div className="sample-icon"><i className="fab fa-slideshare"></i>
                                                <span>slideshare</span></div>
                                            <div className="sample-icon"><i className="fab fa-snapchat"></i>
                                                <span>snapchat</span></div>
                                            <div className="sample-icon"><i className="fab fa-snapchat-ghost"></i>
                                                <span>snapchat-ghost</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-snapchat-square"></i>
                                                <span>snapchat-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-soundcloud"></i>
                                                <span>soundcloud</span></div>
                                            <div className="sample-icon"><i className="fab fa-sourcetree"></i>
                                                <span>sourcetree</span></div>
                                            <div className="sample-icon"><i className="fab fa-speakap"></i>
                                                <span>speakap</span></div>
                                            <div className="sample-icon"><i className="fab fa-spotify"></i>
                                                <span>spotify</span></div>
                                            <div className="sample-icon"><i className="fab fa-squarespace"></i>
                                                <span>squarespace</span></div>
                                            <div className="sample-icon"><i className="fab fa-stack-exchange"></i>
                                                <span>stack-exchange</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-stack-overflow"></i>
                                                <span>stack-overflow</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-staylinked"></i>
                                                <span>staylinked</span></div>
                                            <div className="sample-icon"><i className="fab fa-steam"></i>
                                                <span>steam</span></div>
                                            <div className="sample-icon"><i className="fab fa-steam-square"></i>
                                                <span>steam-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-steam-symbol"></i>
                                                <span>steam-symbol</span></div>
                                            <div className="sample-icon"><i className="fab fa-sticker-mule"></i>
                                                <span>sticker-mule</span></div>
                                            <div className="sample-icon"><i className="fab fa-strava"></i>
                                                <span>strava</span></div>
                                            <div className="sample-icon"><i className="fab fa-stripe"></i>
                                                <span>stripe</span></div>
                                            <div className="sample-icon"><i className="fab fa-stripe-s"></i>
                                                <span>stripe-s</span></div>
                                            <div className="sample-icon"><i className="fab fa-studiovinari"></i>
                                                <span>studiovinari</span></div>
                                            <div className="sample-icon"><i className="fab fa-stumbleupon"></i>
                                                <span>stumbleupon</span></div>
                                            <div className="sample-icon"><i className="fab fa-stumbleupon-circle"></i>
                                                <span>stumbleupon-circle</span></div>
                                            <div className="sample-icon"><i className="fab fa-superpowers"></i>
                                                <span>superpowers</span></div>
                                            <div className="sample-icon"><i className="fab fa-supple"></i>
                                                <span>supple</span></div>
                                            <div className="sample-icon"><i className="fab fa-suse"></i>
                                                <span>suse</span></div>
                                            <div className="sample-icon"><i className="fab fa-teamspeak"></i>
                                                <span>teamspeak</span></div>
                                            <div className="sample-icon"><i className="fab fa-telegram"></i>
                                                <span>telegram</span></div>
                                            <div className="sample-icon"><i className="fab fa-telegram-plane"></i>
                                                <span>telegram-plane</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-tencent-weibo"></i>
                                                <span>tencent-weibo</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-the-red-yeti"></i>
                                                <span>the-red-yeti</span></div>
                                            <div className="sample-icon"><i className="fab fa-themeco"></i>
                                                <span>themeco</span></div>
                                            <div className="sample-icon"><i className="fab fa-themeisle"></i>
                                                <span>themeisle</span></div>
                                            <div className="sample-icon"><i className="fab fa-think-peaks"></i>
                                                <span>think-peaks</span></div>
                                            <div className="sample-icon"><i className="fab fa-trade-federation"></i>
                                                <span>trade-federation</span></div>
                                            <div className="sample-icon"><i className="fab fa-trello"></i>
                                                <span>trello</span></div>
                                            <div className="sample-icon"><i className="fab fa-tripadvisor"></i>
                                                <span>tripadvisor</span></div>
                                            <div className="sample-icon"><i className="fab fa-tumblr"></i>
                                                <span>tumblr</span></div>
                                            <div className="sample-icon"><i className="fab fa-tumblr-square"></i>
                                                <span>tumblr-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-twitch"></i>
                                                <span>twitch</span></div>
                                            <div className="sample-icon"><i className="fab fa-twitter"></i>
                                                <span>twitter</span></div>
                                            <div className="sample-icon"><i className="fab fa-twitter-square"></i>
                                                <span>twitter-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-typo3"></i>
                                                <span>typo3</span></div>
                                            <div className="sample-icon"><i className="fab fa-uber"></i>
                                                <span>uber</span></div>
                                            <div className="sample-icon"><i className="fab fa-ubuntu"></i>
                                                <span>ubuntu</span></div>
                                            <div className="sample-icon"><i className="fab fa-uikit"></i>
                                                <span>uikit</span></div>
                                            <div className="sample-icon"><i className="fab fa-uniregistry"></i>
                                                <span>uniregistry</span></div>
                                            <div className="sample-icon"><i className="fab fa-untappd"></i>
                                                <span>untappd</span></div>
                                            <div className="sample-icon"><i className="fab fa-ups"></i>
                                                <span>ups</span></div>
                                            <div className="sample-icon"><i className="fab fa-usb"></i>
                                                <span>usb</span></div>
                                            <div className="sample-icon"><i className="fab fa-usps"></i>
                                                <span>usps</span></div>
                                            <div className="sample-icon"><i className="fab fa-ussunnah"></i>
                                                <span>ussunnah</span></div>
                                            <div className="sample-icon"><i className="fab fa-vaadin"></i>
                                                <span>vaadin</span></div>
                                            <div className="sample-icon"><i className="fab fa-viacoin"></i>
                                                <span>viacoin</span></div>
                                            <div className="sample-icon"><i className="fab fa-viadeo"></i>
                                                <span>viadeo</span></div>
                                            <div className="sample-icon"><i className="fab fa-viadeo-square"></i>
                                                <span>viadeo-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-viber"></i>
                                                <span>viber</span></div>
                                            <div className="sample-icon"><i className="fab fa-vimeo"></i>
                                                <span>vimeo</span></div>
                                            <div className="sample-icon"><i className="fab fa-vimeo-square"></i>
                                                <span>vimeo-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-vimeo-v"></i>
                                                <span>vimeo-v</span></div>
                                            <div className="sample-icon"><i className="fab fa-vine"></i>
                                                <span>vine</span></div>
                                            <div className="sample-icon"><i className="fab fa-vk"></i>
                                                <span>vk</span></div>
                                            <div className="sample-icon"><i className="fab fa-vnv"></i>
                                                <span>vnv</span></div>
                                            <div className="sample-icon"><i className="fab fa-vuejs"></i>
                                                <span>vuejs</span></div>
                                            <div className="sample-icon"><i className="fab fa-weebly"></i>
                                                <span>weebly</span></div>
                                            <div className="sample-icon"><i className="fab fa-weibo"></i>
                                                <span>weibo</span></div>
                                            <div className="sample-icon"><i className="fab fa-weixin"></i>
                                                <span>weixin</span></div>
                                            <div className="sample-icon"><i className="fab fa-whatsapp"></i>
                                                <span>whatsapp</span></div>
                                            <div className="sample-icon"><i className="fab fa-whatsapp-square"></i>
                                                <span>whatsapp-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-whmcs"></i>
                                                <span>whmcs</span></div>
                                            <div className="sample-icon"><i className="fab fa-wikipedia-w"></i>
                                                <span>wikipedia-w</span></div>
                                            <div className="sample-icon"><i className="fab fa-windows"></i>
                                                <span>windows</span></div>
                                            <div className="sample-icon"><i className="fab fa-wix"></i>
                                                <span>wix</span></div>
                                            <div className="sample-icon"><i className="fab fa-wizards-of-the-coast"></i>
                                                <span>wizards-of-the-coast</span></div>
                                            <div className="sample-icon"><i className="fab fa-wolf-pack-battalion"></i>
                                                <span>wolf-pack-battalion</span></div>
                                            <div className="sample-icon"><i className="fab fa-wordpress"></i>
                                                <span>wordpress</span></div>
                                            <div className="sample-icon"><i className="fab fa-wordpress-simple"></i>
                                                <span>wordpress-simple</span></div>
                                            <div className="sample-icon"><i className="fab fa-wpbeginner"></i>
                                                <span>wpbeginner</span></div>
                                            <div className="sample-icon"><i className="fab fa-wpexplorer"></i>
                                                <span>wpexplorer</span></div>
                                            <div className="sample-icon"><i className="fab fa-wpforms"></i>
                                                <span>wpforms</span></div>
                                            <div className="sample-icon"><i className="fab fa-wpressr"></i>
                                                <span>wpressr</span></div>
                                            <div className="sample-icon"><i className="fab fa-xbox"></i>
                                                <span>xbox</span></div>
                                            <div className="sample-icon"><i className="fab fa-xing"></i>
                                                <span>xing</span></div>
                                            <div className="sample-icon"><i className="fab fa-xing-square"></i>
                                                <span>xing-square</span></div>
                                            <div className="sample-icon"><i className="fab fa-y-combinator"></i>
                                                <span>y-combinator</span></div>
                                            <div className="sample-icon"><i className="fab fa-yahoo"></i>
                                                <span>yahoo</span></div>
                                            <div className="sample-icon"><i className="fab fa-yandex"></i>
                                                <span>yandex</span></div>
                                            <div className="sample-icon"><i className="fab fa-yandex-international"></i>
                                                <span>yandex-international</span></div>
                                            <div className="sample-icon"><i className="fab fa-yarn"></i>
                                                <span>yarn</span></div>
                                            <div className="sample-icon"><i className="fab fa-yelp"></i>
                                                <span>yelp</span></div>
                                            <div className="sample-icon"><i className="fab fa-yoast"></i>
                                                <span>yoast</span></div>
                                            <div className="sample-icon"><i className="fab fa-youtube"></i>
                                                <span>youtube</span></div>
                                            <div className="sample-icon"><i className="fab fa-youtube-square"></i>
                                                <span>youtube-square</span>
                                            </div>
                                            <div className="sample-icon"><i className="fab fa-zhihu"></i>
                                                <span>zhihu</span></div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </section>

                <ElementsList adClass="bg-white mt-2 pt-10 pb-10" />
            </div>
        </>
    )
}

export default React.memo(Icons);
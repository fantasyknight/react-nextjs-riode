import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopBannerSidebar () {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Banner Sidebar Page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Banner Sidebar Page</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-10 pb-3">
                <div className="container">

                    <div className="row gutter-lg main-content-wrap">
                        <SidebarFilterOne type="banner" />

                        <div className="col-lg-9 main-content">
                            <div className="shop-banner-default banner mb-1" style={ { backgroundImage: "url('./images/shop/banner.jpg')", backgroundColor: "#f2f2f3" } }>
                                <div className="banner-content">
                                    <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">Riode Shop</h4>
                                    <h1 className="banner-title font-weight-bold text-white">Banner with Sidebar</h1>
                                    <ALink href="/shop" className="btn btn-white btn-outline btn-icon-right btn-rounded text-normal">Discover now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>

                            <ProductListOne type="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopBannerSidebar );
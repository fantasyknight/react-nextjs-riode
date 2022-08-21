import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '~/components/features/custom-link';

import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopBoxedBanner() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Boxed Banner Page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Boxed Banner Page</h1>

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
                    <div className="shop-boxed-banner banner mb-lg-6" style={ { backgroundImage: "url('./images/shop/banner2.jpg')", backgroundColor: "#f2f2f3" } }>
                        <div className="banner-content">
                            <h4 className="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">Riode Shop</h4>
                            <h1 className="banner-title font-weight-bold text-white">Boxed Banner Style</h1>
                            <ALink href="/shop" className="btn btn-white btn-outline btn-rounded text-normal">Discover now<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>

                    <div className="row gutter-lg mt-6">
                        <SidebarFilterOne type="boxed" />

                        <div className="col-lg-9">
                            <ProductListOne type="boxed" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopBoxedBanner );
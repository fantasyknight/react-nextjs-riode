import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function Shop() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Page</h1>

            <ShopBanner />

            <div className="page-content mb-10 pb-3">
                <div className="container">
                    <div className="row main-content-wrap gutter-lg">
                        <SidebarFilterOne />

                        <div className="col-lg-9 main-content">
                            <ProductListOne />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( Shop );
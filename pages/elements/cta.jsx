import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Helmet from 'react-helmet';

import ALink from '~/components/features/custom-link';
import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

import { parallaxHandler } from '~/utils';

function Cta() {
    useEffect(() => {
        window.addEventListener('scroll', parallaxHandler, true);

        return () => {
            window.removeEventListener('scroll', parallaxHandler, true);
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Call To Action</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Call To Action</h1>

            <Breadcrumb subTitle="Elements" title="Element Call To Action" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-4">
                    <div className="container">
                        <h2 className="title title-center mb-5">Simple</h2>
                        <div className="banner cta-simple">
                            <div className="banner-content bg-white d-lg-flex align-items-center">
                                <div className="banner-header pr-lg-7 pb-lg-0 pb-4 mb-lg-0 mb-6">
                                    <h3 className="banner-title font-weight-bold ls-s text-uppercase">Trade-in</h3>
                                    <h4 className="banner-subtitle font-weight-normal ls-s text-body">Upgrade and save</h4>
                                </div>
                                <div className="banner-text mb-lg-0 mb-4 mr-lg-4 pl-lg-6 pr-lg-0 pl-2 pr-2">
                                    <h4 className="font-weight-normal ls-normal text-uppercase mb-0">Get a Riode gift
                                        card+25% off</h4>
                                    <p className="ls-m mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod.</p>
                                </div>
                                <ALink href="#" className="btn btn-primary btn-ellipse btn-md btn-rounded">Shop Now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10 pt-4">
                    <div className="container">
                        <h2 className="title title-center mb-5">2 Columns</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="banner banner-1 banner-fixed content-center content-middle">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/cta/1.jpg"
                                            alt="banner"
                                            width="580"
                                            height="330"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-uppercase font-weight-bold ls-m text-primary">20%
                                            off</h3>
                                        <h4 className="banner-subtitle font-weight-bold ls-m text-white">Riode Birthday
                                            Sale</h4>
                                        <p className="ls-s text-light">Get all the latest information on <br />Events, Sales
                                            and Offers.</p>
                                        <ALink href="/shop" className="btn btn-outline btn-white btn-md btn-rounded">Discover now</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="banner banner-2 banner-fixed content-center content-middle">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/cta/2.jpg"
                                            alt="banner"
                                            width="580"
                                            height="330"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-uppercase font-weight-normal ls-m text-white mb-3">
                                            Subscribe to our<br /><strong>Newsletter</strong></h3>
                                        <p className="ls-normal text-white">Start Shopping Right Now</p>
                                        <form action="#" method="get" className="input-wrapper">
                                            <input type="email" className="form-control w100 text-white text-center mb-4"
                                                name="email" id="email" placeholder="Enter Your E-mail Address..."
                                                required />
                                            <button className="btn btn-white btn-md btn-ellipse btn-rounded" type="submit">Subscribe<i
                                                className="d-icon-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-9 pt-1">
                    <div className="container">
                        <h2 className="title title-center">3 Columns</h2>

                        <div className="banner-group row justify-content-center">
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="banner banner-3 banner-fixed banner-radius content-middle">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/banners/banner1.jpg"
                                            alt="banner"
                                            width="380"
                                            height="220"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-white mb-1">For Men’s</h3>
                                        <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">
                                            Starting at $29
                                        </h4>
                                        <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i
                                            className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                                <div className="banner banner-4 banner-fixed banner-radius content-middle content-center">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/banners/banner2.jpg"
                                            alt="banner"
                                            width="380"
                                            height="220"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <div className="banner-content d-flex align-items-center w-100 text-left">
                                        <div className="mr-auto mb-4 mb-md-0">
                                            <h4 className="banner-subtitle text-white mb-0">
                                                Up to 20% Off<br /><span className="ls-l">Black Friday</span>
                                            </h4>
                                            <h3 className="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
                                        </div>
                                        <ALink href="/shop" className="btn btn-primary btn-outline font-weight-bold text-white btn-rounded">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="banner banner-5 banner-fixed banner-radius content-middle">
                                    <figure>
                                        <LazyLoadImage
                                            src="./images/banners/banner3.jpg"
                                            alt="banner"
                                            width="380"
                                            height="220"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <div className="banner-content">
                                        <h3 className="banner-title text-white mb-1">Fashions</h3>
                                        <h4 className="banner-subtitle text-uppercase font-weight-normal text-white">30% Off
                                        </h4>
                                        <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i
                                            className="d-icon-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <div className="container">
                        <h2 className="title title-center">Expanded Newsletter</h2>
                        <div className="banner banner-newsletter bg-whtie">
                            <div className="banner-content row gutter-no align-items-center pl-lg-6 pr-lg-6 pl-3 pr-3">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="icon-box icon-box-side mb-4 mb-lg-0">
                                        <div className="icon-box-icon text-primary">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Get Special Offers and Savings</h4>
                                            <p className="text-dark">Get all the latest information on Events, Sales and
                                                Offers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center">
                                    <form action="#" method="get"
                                        className="input-wrapper input-wrapper-round input-wrapper-inline ml-lg-auto">
                                        <input type="email" className="form-control font-primary font-italic form-solid"
                                            name="email" id="email2" placeholder="Enter Your E-mail Address..."
                                            required />
                                        <button className="btn btn-dark" type="submit">Sign up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10 pt-4">
                    <div className="container">
                        <h2 className="title title-center mb-5">Expanded on background</h2>
                    </div>
                    <div className="banner banner-background parallax text-center" style={{ backgroundImage: `url(./images/parallax.jpg)` }}>
                        <div className="container">
                            <div className="banner-content">
                                <h4 className="banner-subtitle text-white font-weight-bold ls-l">
                                    Extra<span className="d-inline-block label-star bg-dark text-primary ml-4 mr-2">30%
                                        Off</span>Online
                                </h4>
                                <h3 className="banner-title font-weight-bold text-white">Summer Season Sale</h3>
                                <p className="text-white ls-s">Free shipping on orders over $99</p>
                                <ALink href="/shop" className="btn btn-primary btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </section>
                <ElementsList subClass="pt-4 mt-8" />
            </div >
        </>
    )
}

export default React.memo(Cta);
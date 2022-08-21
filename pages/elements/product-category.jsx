import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Helmet from 'react-helmet';

import ALink from '~/components/features/custom-link';
import Breadcrumb from '~/components/features/breadcrumb';
import OwlCarousel from '~/components/features/owl-carousel';

import ElementsList from '~/components/partials/elements/elements-list';

import { mainSlider5, mainSlider6, mainSlider9, mainSlider12 } from '~/utils/data/carousel';

function Cta() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Product Category</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Category</h1>

            <Breadcrumb subTitle="Elements" title="Element Categories" parentUrl="/elements" />

            <div className="page-content">
                <div className="container">
                    <section className="default-section">
                        <h2 className="title title-center">Default</h2>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="category category-default category-absolute overlay-zoom">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category1.jpg"
                                                alt="category"
                                                width="280"
                                                height="280"
                                                effect="opacity; transform"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content">
                                        <h4 className="category-name"><ALink href="shop.html">For Men's</ALink></h4>
                                        <ALink href="#" className="btn btn-primary">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="category category-default category-absolute overlay-zoom">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category2.jpg"
                                                alt="category"
                                                width="280"
                                                height="280"
                                                effect="opacity; transform"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content">
                                        <h4 className="category-name"><ALink href="shop.html">Accessories</ALink></h4>
                                        <ALink href="#" className="btn btn-primary">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="category category-default category-absolute overlay-zoom">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category3.jpg"
                                                alt="category"
                                                width="280"
                                                height="280"
                                                effect="opacity; transform"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content">
                                        <h4 className="category-name"><ALink href="shop.html">Fashionable Women's</ALink></h4>
                                        <ALink href="#" className="btn btn-primary">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="category category-default category-absolute overlay-zoom">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category4.jpg"
                                                alt="category"
                                                width="280"
                                                height="280"
                                                effect="opacity; transform"
                                            />
                                        </figure>
                                    </ALink>
                                    <div className="category-content">
                                        <h4 className="category-name"><ALink href="shop.html">Cosmetic</ALink></h4>
                                        <ALink href="#" className="btn btn-primary">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="title title-center mt-10">Carousel</h2>

                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ mainSlider12 }>
                            <div className="category category-light category-absolute overlay-zoom">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category1.jpg"
                                            alt="category"
                                            width="280"
                                            height="280"
                                            effect="opacity; transform"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">For Men's</ALink></h4>
                                </div>
                            </div>

                            <div className="category category-light category-absolute overlay-zoom">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category2.jpg"
                                            alt="category"
                                            width="280"
                                            height="280"
                                            effect="opacity; transform"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Accessories</ALink></h4>
                                </div>
                            </div>

                            <div className="category category-light category-absolute overlay-zoom">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category3.jpg"
                                            alt="category"
                                            width="280"
                                            height="280"
                                            effect="opacity; transform"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Fashionable Women’s</ALink></h4>
                                </div>
                            </div>

                            <div className="category category-light category-absolute overlay-zoom">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category4.jpg"
                                            alt="category"
                                            width="280"
                                            height="280"
                                            effect="opacity; transform"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Cosmetic</ALink></h4>
                                </div>
                            </div>
                        </OwlCarousel>
                    </section>

                    <section className="mt-10 pt-4">
                        <h2 className="title title-center">Icon categories</h2>

                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-t-shirt2"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Fashion</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-camera2"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Electronics</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-desktop"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Computer</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-backpack"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Bag &amp; Backpacks</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-basketball1"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Sports</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
                                <div className="category category-icon">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <i className="d-icon-babycare"></i>
                                        </figure>

                                        <div className="category-content">
                                            <h4 className="category-name">Toys &amp; Babycare</h4>
                                        </div>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ellipse-section mt-10">
                        <h2 className="title title-center">Ellipse Style</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider9 }>
                            <div className="category category-ellipse">
                                <ALink href="#">
                                    <figure className="category-media">

                                        <img src="images/categories/category1.png" alt="Cateogry" width="196" height="196" />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Newborn Essentials</ALink></h4>
                                    <span className="category-count">
                                        <span>0</span> Products
                                    </span>
                                </div>
                            </div>

                            <div className="category category-ellipse">
                                <ALink href="#">
                                    <figure className="category-media">

                                        <img src="images/categories/category2.png" alt="Cateogry" width="196" height="196" />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Toy</ALink></h4>
                                    <span className="category-count">
                                        <span>0</span> Products
                                    </span>
                                </div>
                            </div>

                            <div className="category category-ellipse">
                                <ALink href="#">
                                    <figure className="category-media">

                                        <img src="images/categories/category3.png" alt="Cateogry" width="196" height="196" />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Summer Sale is On</ALink></h4>
                                    <span className="category-count">
                                        <span>0</span> Products
                                    </span>
                                </div>
                            </div>

                            <div className="category category-ellipse">
                                <ALink href="#">
                                    <figure className="category-media">

                                        <img src="images/categories/category4.png" alt="Cateogry" width="196" height="196" />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Clothes</ALink></h4>
                                    <span className="category-count">
                                        <span>0</span> Products
                                    </span>
                                </div>
                            </div>

                            <div className="category category-ellipse">
                                <ALink href="#">
                                    <figure className="category-media">

                                        <img src="images/categories/category5.png" alt="Cateogry" width="196" height="196" />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Footwear &amp; Accessories</ALink></h4>
                                    <span className="category-count">
                                        <span>0</span> Products
                                    </span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </section>

                    <section className="mt-10 pt-4">
                        <h2 className="title title-center">Classic</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider5 }>
                            <div className="category category-absolute category-classic">
                                <figure className="category-media">
                                    <img src="images/categories/category5.jpg" alt="Cateogry" width="280"
                                        height="280" />
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Women's Collection</h4>
                                    <span className="category-count">1 Products</span>
                                </div>
                            </div>
                            <div className="category category-absolute category-classic">
                                <figure className="category-media">
                                    <img src="images/categories/category6.jpg" alt="Cateogry" width="280"
                                        height="280" />
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Electronics</h4>
                                    <span className="category-count">0 Products</span>
                                </div>
                            </div>
                            <div className="category category-absolute category-classic">
                                <figure className="category-media">
                                    <img src="images/categories/category7.jpg" alt="Cateogry" width="280"
                                        height="280" />
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">For Men's</h4>
                                    <span className="category-count">0 Products</span>
                                </div>
                            </div>
                            <div className="category category-absolute category-classic">
                                <figure className="category-media">
                                    <img src="images/categories/category8.jpg" alt="Cateogry" width="280"
                                        height="280" />
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Sporting Goods</h4>
                                    <span className="category-count">7 Products</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </section>

                    <section className="mt-10 pt-4 border-container">
                        <h2 className="title title-center">Category Group 1</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                            <div className="category category-group-image">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category13.jpg"
                                            alt="category"
                                            width="190"
                                            height="169"
                                            effect="opacity"
                                        />
                                    </figure>
                                </ALink>

                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Electronics</ALink></h4>
                                    <ul className="category-list">
                                        <li><ALink href="#">Air conditioners</ALink></li>
                                        <li><ALink href="#">Machines</ALink></li>
                                        <li><ALink href="#">Musical instrument</ALink></li>
                                        <li><ALink href="#">Office Electronics</ALink></li>
                                        <li><ALink href="#">TV</ALink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category category-group-image">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category14.jpg"
                                            alt="category"
                                            width="190"
                                            height="169"
                                            effect="opacity"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Fashion &amp; Clothings</ALink></h4>
                                    <ul className="category-list">
                                        <li><ALink href="#">Accessories</ALink></li>
                                        <li><ALink href="#">Bags &amp; Backpacks</ALink></li>
                                        <li><ALink href="#">Men's</ALink></li>
                                        <li><ALink href="#">Shoes &amp; Boots</ALink></li>
                                        <li><ALink href="#">Women’s</ALink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category category-group-image">
                                <ALink href="#">
                                    <figure className="category-media">
                                        <LazyLoadImage
                                            src="./images/categories/category15.jpg"
                                            alt="category"
                                            width="190"
                                            height="169"
                                            effect="opacity"
                                        />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name"><ALink href="#">Computers</ALink></h4>
                                    <ul className="category-list">
                                        <li><ALink href="#">Desktop PC</ALink></li>
                                        <li><ALink href="#">Laptop</ALink></li>
                                        <li><ALink href="#">PC Components</ALink></li>
                                        <li><ALink href="#">PC Gaming</ALink></li>
                                        <li><ALink href="#">Storage &amp; Memory</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </OwlCarousel>
                    </section>

                    <section className="mt-10 pt-4">
                        <h2 className="title title-center">Category Group 2</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider6 }>
                            <div className="category category-group-icon" style={ { backgroundColor: "#4b5577" } }>
                                <ALink href="#">
                                    <figure className="category-media">
                                        <i className="d-icon-t-shirt1"></i>
                                    </figure>
                                    <h4 className="category-name">Clothing</h4>
                                </ALink>

                                <div className="category-content">
                                    <ul className="category-list">
                                        <li><ALink href="#">Accessories</ALink></li>
                                        <li><ALink href="#">Bracelets</ALink></li>
                                        <li><ALink href="#">Men's Necklace</ALink></li>
                                        <li><ALink href="#">Pendant</ALink></li>
                                        <li><ALink href="#">Sale</ALink></li>
                                        <li><ALink href="#">Watch</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="category category-group-icon" style={ { backgroundColor: "#6d52af" } }>
                                <ALink href="#">
                                    <figure className="category-media">
                                        <i className="d-icon-basketball2"></i>
                                    </figure>
                                    <h4 className="category-name">Sporting Goods</h4>
                                </ALink>

                                <div className="category-content">
                                    <ul className="category-list">
                                        <li><ALink href="#">Accessories</ALink></li>
                                        <li><ALink href="#">Gloves</ALink></li>
                                        <li><ALink href="#">Men's</ALink></li>
                                        <li><ALink href="#">Shoes</ALink></li>
                                        <li><ALink href="#">Training Shirt</ALink></li>
                                        <li><ALink href="#">Women's</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="category category-group-icon" style={ { backgroundColor: "#2b579a" } }>
                                <ALink href="#">
                                    <figure className="category-media">
                                        <i className="d-icon-backpack"></i>
                                    </figure>
                                    <h4 className="category-name">Bag &amp; Backpack</h4>
                                </ALink>

                                <div className="category-content">
                                    <ul className="category-list">
                                        <li><ALink href="#">Fashion Bags</ALink></li>
                                        <li><ALink href="#">Hand Bags</ALink></li>
                                        <li><ALink href="#">Kid's Bags</ALink></li>
                                        <li><ALink href="#">Men's Bags</ALink></li>
                                        <li><ALink href="#">Trip Bags</ALink></li>
                                        <li><ALink href="#">Women's</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </OwlCarousel>
                    </section>

                    <section className="category-section masonry-section mt-10 pt-4">
                        <h2 className="title title-center">Banner Style</h2>

                        <div className="row grid gutter-sm">
                            <div className="grid-item height-x2">
                                <div className="category category-banner category-absolute overlay-light">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category9.jpg"
                                                alt="category"
                                                width="585"
                                                height="397"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Comfort Dresses</h4>
                                        <span className="category-count">
                                            <span>9</span> Products
                                        </span>
                                        <ALink href="#" className="btn btn-underline btn-link">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item height-x1">
                                <div className="category category-banner category-absolute text-white  overlay-dark">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category10.jpg"
                                                alt="category"
                                                width="585"
                                                height="205"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">For Men's Fashion</h4>
                                        <span className="category-count">
                                            <span>25</span> Products
                                        </span>
                                        <ALink href="#" className="btn btn-underline btn-link">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item height-x2">
                                <div className="category category-banner category-absolute overlay-light">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category11.jpg"
                                                alt="category"
                                                width="585"
                                                height="397"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Denim Essentials</h4>
                                        <span className="category-count">
                                            <span>8</span> Products
                                        </span>
                                        <ALink href="#" className="btn btn-underline btn-link">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item height-x1">
                                <div className="category category-banner category-absolute text-white overlay-dark">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category12.jpg"
                                                alt="category"
                                                width="585"
                                                height="205"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Accessories</h4>
                                        <span className="category-count">
                                            <span>17</span> Products
                                        </span>
                                        <ALink href="#" className="btn btn-underline btn-link">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-1 grid-space"></div>
                        </div>
                    </section>

                    <section className="category-section badge-section mt-10 pt-4 pb-10 mb-10">
                        <h2 className="title title-center">Badge Categories</h2>
                        <div className="row grid gutter-sm">
                            <div className="grid-item height-x2">
                                <div className="category category-badge category-absolute overlay-dark">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category16.jpg"
                                                alt="category"
                                                width="585"
                                                height="397"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Footwear</h4>
                                        <ALink className="btn btn-primary btn-block" href="#">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item height-x1">
                                <div className="category category-badge category-absolute overlay-dark">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category17.jpg"
                                                alt="category"
                                                width="585"
                                                height="205"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Sporting Goods</h4>
                                        <ALink className="btn btn-primary btn-block" href="#">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item height-x1">
                                <div className="category category-badge category-absolute overlay-dark">
                                    <ALink href="#">
                                        <figure className="category-media">
                                            <LazyLoadImage
                                                src="./images/categories/category18.jpg"
                                                alt="category"
                                                width="585"
                                                height="397"
                                                effect="opacity"
                                            />
                                        </figure>
                                    </ALink>

                                    <div className="category-content">
                                        <h4 className="category-name">Cosmetics</h4>
                                        <ALink className="btn btn-primary btn-block" href="#">Shop Now</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 grid-space"></div>
                        </div>
                    </section>
                </div>

                <ElementsList subClass="pt-4 mt-8" />
            </div >
        </>
    )
}

export default React.memo( Cta );
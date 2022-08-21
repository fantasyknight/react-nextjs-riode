import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import CountDown from '~/components/features/countdown';

function ComingSoon () {
    let time = 10 * 24 * 3600000;

    useEffect( () => {
        document.querySelector( 'header' ).classList.add( 'd-none' );
        document.querySelector( 'footer' ).classList.add( 'd-none' );
        return () => {
            document.querySelector( 'header' ).classList.remove( 'd-none' );
            document.querySelector( 'footer' ).classList.remove( 'd-none' );
        }
    } )
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template | Coming Soon</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Coming Soon</h1>

            <div className="page-content">
                <section className="coming-section container text-center text-grey font-primary">
                    <div className="row align-items-center pt-10 pb-10">
                        <div className="col-md-6">
                            <LazyLoadImage
                                src="./images/subpages/coming-soon.jpg"
                                alt="coming soon"
                                width="519"
                                height="568"
                                effect="opacity"
                                style={ { backgroundColor: "#fff" } }
                            />
                        </div>
                        <div className="col-md-6 order-md-first">
                            <h1 className="mb-9 ls-m lh-1 font-italic text-uppercase">Coming Soon</h1>

                            <CountDown
                                adClass="countdown-coming mb-7"
                                date={ Date.now() + time }
                            />

                            <hr className="mb-6 ml-8 mr-8" />
                            <p>We are currently working on an awesome new site. Stay tuned for more information.
                                Subscribe to our newsletter to stay updated on our progress.</p>
                            <form action="#" className="ml-lg-8 mr-lg-8 mb-8">
                                <input type="email" className="form-control font-primary text-grey" name="email" id="email"
                                    placeholder="Enter Your Email Address" required />
                                <button className="btn btn-primary btn-link btn-icon-right" type="submit">subscribe</button>
                            </form>
                            <div className="social-links">
                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                <ALink href="#" className="social-link social-instagram fab fa-instagram"></ALink>
                                <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                                <ALink href="#" className="social-link social-email far fa-envelope"></ALink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default React.memo( ComingSoon );
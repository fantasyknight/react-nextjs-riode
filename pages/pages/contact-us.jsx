import React from 'react';
import Helmet from 'react-helmet';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GoogleMapReact from 'google-map-react';

import ALink from '~/components/features/custom-link';
import { fadeIn } from '~/utils/data/keyframes';

const AnyReactComponent = ( { text } ) => <div>{ text }</div>;

function ContactUs () {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <main className="main contact-us">
            <Helmet>
                <title>Riode React eCommerce Template | Contact Us</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Contact Us</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>

            <div className="page-header" style={ { backgroundImage: 'url(./images/page-header/contact-us.jpg)', backgroundColor: "#92918f" } }>
                <h1 className="page-title font-weight-bold text-capitalize ls-l">Contact Us</h1>
            </div>

            <div className="page-content mt-10 pt-7">
                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
                                    <div className="grey-section d-flex align-items-center h-100">
                                        <div>
                                            <h4 className="mb-2 text-capitalize">Headquarters</h4>
                                            <p>1600 Amphitheatre Parkway<br />New York WC1 1BA</p>

                                            <h4 className="mb-2 text-capitalize">Phone Number</h4>
                                            <p>
                                                <ALink href="#">1.800.458.56</ALink><br />
                                                <ALink href="#">1.800.458.56</ALink>
                                            </p>

                                            <h4 className="mb-2 text-capitalize">Support</h4>
                                            <p className="mb-4">
                                                <ALink href="#">support@your-domain.com</ALink><br />
                                                <ALink href="#">help@your-domain.com</ALink><br />
                                                <ALink href="#">Sale</ALink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
                                    <div className="w-100">
                                        <form className="pl-lg-2" action="#">
                                            <h4 className="ls-m font-weight-bold">Let’s Connect</h4>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div className="row mb-2">
                                                <div className="col-12 mb-4">
                                                    <textarea className="form-control" required
                                                        placeholder="Comment*"></textarea>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <input className="form-control" type="text" placeholder="Name *" required />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <input className="form-control" type="email" placeholder="Email *" required />
                                                </div>
                                            </div>
                                            <button className="btn btn-dark btn-rounded">Post Comment<i className="d-icon-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="store-section mt-6 pt-10 pb-8">
                        <div className="container">
                            <h2 className="title title-center mb-7 text-normal">Our store</h2>
                            <div className="row cols-sm-2 cols-lg-4">
                                <div className="store">
                                    <figure className="banner-radius">
                                        <LazyLoadImage
                                            src="./images/subpages/store-1.jpg"
                                            alt="store"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="opacity"
                                            style={ { backgroundColor: "#EEE" } }
                                        />

                                        <h4 className="overlay-visible">New York</h4>
                                        <div className="overlay overlay-transparent">
                                            <ALink className="mt-8" href="#">mail@newyorkriodestore.com</ALink>
                                            <ALink href="#">Phone: (123) 456-7890</ALink>
                                            <div className="social-links mt-1">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="store">
                                    <figure className="banner-radius">
                                        <LazyLoadImage
                                            src="./images/subpages/store-2.jpg"
                                            alt="store"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="opacity"
                                            style={ { backgroundColor: "#EEE" } }
                                        />
                                        <h4 className="overlay-visible">London</h4>
                                        <div className="overlay overlay-transparent">
                                            <ALink className="mt-8" href="mail:#">mail@londonriodestore.com</ALink>
                                            <ALink href="tel:#">Phone: (123) 456-7890</ALink>
                                            <div className="social-links mt-1">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="store">
                                    <figure className="banner-radius">
                                        <LazyLoadImage
                                            src="./images/subpages/store-3.jpg"
                                            alt="store"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="opacity"
                                            style={ { backgroundColor: "#EEE" } }
                                        />
                                        <h4 className="overlay-visible">Oslo</h4>
                                        <div className="overlay overlay-transparent">
                                            <ALink className="mt-8" href="mail:#">mail@osloriodestore.com</ALink>
                                            <ALink href="tel:#">Phone: (123) 456-7890</ALink>
                                            <div className="social-links mt-1">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="store">
                                    <figure className="banner-radius">
                                        <LazyLoadImage
                                            src="./images/subpages/store-4.jpg"
                                            alt="store"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="opacity"
                                            style={ { backgroundColor: "#EEE" } }
                                        />
                                        <h4 className="overlay-visible">Stockholm</h4>
                                        <div className="overlay overlay-transparent">
                                            <ALink className="mt-8" href="mail:#">mail@stockholmriodestore.com</ALink>
                                            <ALink href="tel:#">Phone: (123) 456-7890</ALink>
                                            <div className="social-links mt-1">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                <div className="grey-sectdion google-map" id="googlemaps" style={ { height: "386px" } }>
                        <GoogleMapReact 
                            bootstrapURLKeys={ { key: 'AIzaSyBgVsModMpsR59_OIK-2sEcmhBBkW4xUuw' } }
                            defaultCenter={ { lat: 59.95, lng: 30.33 } }
                            defaultZoom={ 11 }
                        >
                            <AnyReactComponent
                                lat={ 59.955413 }
                                lng={ 30.337844 }
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </Reveal>
            </div>
        </main>
    )

}

export default React.memo( ContactUs );
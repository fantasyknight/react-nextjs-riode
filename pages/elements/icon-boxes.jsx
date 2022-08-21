import React from 'react';
import Helmet from 'react-helmet';

import Breadcrumb from '~/components/features/breadcrumb';
import OwlCarousel from '~/components/features/owl-carousel';

import ElementsList from '~/components/partials/elements/elements-list';

import { mainSlider11, mainSlider12 } from '~/utils/data/carousel';

function IconBoxes() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Icon Boxes</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Icon Boxes</h1>

            <Breadcrumb subTitle="Elements" title="Element Icon Boxes" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-8">
                    <div className="container">
                        <h2 className="title title-center mb-5">Icon &amp; Left align</h2>

                        <OwlCarousel adClass="owl-theme" options={mainSlider11}>
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="d-icon-layer"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed posuere consectetur est lobortis.</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="d-icon-database"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Dolemus late utriusque fore provinc. </p>
                                </div>
                            </div>

                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="d-icon-alert"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Modice accuratius physicis supplicii.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-4 mb-10 pb-4">
                    <div className="container">
                        <h2 className="title title-center mb-5">Top align</h2>

                        <OwlCarousel adClass="owl-theme" options={mainSlider12}>
                            <div className="icon-box text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-layer"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                            <div className="icon-box text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-database"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-alert"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-shoppingbag"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Possumus fugiendum</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4 mb-4">
                        <h2 className="title title-center mb-5">Icon with border</h2>

                        <OwlCarousel adClass="owl-theme pb-6 mb-10" options={mainSlider11}>
                            <div className="icon-box icon-border text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-layer"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-border text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-database"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-border text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-shoppingbag"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                        </OwlCarousel>

                        <h2 className="title title-center mb-5">Inversed</h2>

                        <OwlCarousel adClass="owl-theme" options={mainSlider11}>
                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-layer"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-database"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-inversed text-center">
                                <span className="icon-box-icon">
                                    <i className="d-icon-shoppingbag"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-4 mb-10 pb-4">
                    <div className="container">
                        <h2 className="title title-center mb-5">Solid Icon</h2>

                        <OwlCarousel adClass="owl-theme mb-10 pb-6" options={mainSlider12}>
                            <div className="icon-box icon-solid text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <path opacity="0.5" d="M34.117,51.666c0.228,0.099,0.471,0.146,0.715,0.146c0.001,0,0.001,0,0.001,0
                                            c0.242,0-0.502-0.048-0.275-0.146L64.5,38.522c0,0.008,0,0.016,0,0.022l3.405-1.028c0.66-0.28,1.587-0.924,1.601-1.642
                                            c0.014-0.717-0.149-1.377-0.799-1.682l-9.624-4.581l-21.985,9.37c-0.736,0.314-1.488,0.475-2.294,0.475
                                            c-0.813,0-1.586-0.163-2.33-0.481l-21.689-9.294l-9.734,4.54C0.397,34.524-0.012,35.183,0,35.9c0.011,0.719,0.446,1.363,1.105,1.646
                                            l0.614,0.264c0-0.009-0.001-0.016-0.003-0.023L34.117,51.666z" />
                                        <path d="M34.833,55.938c-0.813,0-1.6-0.162-2.344-0.48l-21.675-9.285l-9.761,4.553c-0.651,0.303-1.063,0.961-1.051,1.679
                                            c0.012,0.718,0.444,1.363,1.104,1.646l33.011,14.141c0.228,0.099,0.472,0.146,0.716,0.146c0.242,0,0.485-0.048,0.713-0.146
                                            l33.345-14.172c0.662-0.28,1.096-0.924,1.109-1.643c0.013-0.717-0.396-1.376-1.047-1.682l-9.771-4.592l-22.024,9.36
                                            C36.422,55.778,35.639,55.938,34.833,55.938z" />
                                        <path d="M34.832,35.331C34.833,35.331,34.833,35.331,34.832,35.331c0.243,0,0.486-0.048,0.714-0.146l27.801-11.814l5.546-2.357
                                            c0.66-0.281,1.094-0.924,1.107-1.643c0.013-0.717-0.396-1.376-1.047-1.682L35.944,2.173c-0.49-0.231-1.055-0.231-1.544-0.002
                                            L1.053,17.718c-0.651,0.304-1.063,0.961-1.051,1.679c0.012,0.719,0.444,1.363,1.104,1.647l2.129,0.912l30.882,13.229
                                            C34.344,35.283,34.588,35.331,34.832,35.331z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-solid text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <path opacity="0.5"
                                            d="M35.48,0C17.678,0,3.821,6.841,3.821,15.574c0,0.167,0.076,0.331,0.089,0.497
                                            c7.111,5.235,18.469,8.716,31.19,8.716c13.138,0,24.399-3.656,31.399-9.199c0-0.004,0-0.009,0-0.013C66.5,6.696,53.264,0,35.48,0z" />
                                        <path
                                            d="M66.437,30.242c0.018-0.223,0.063-0.439,0.063-0.665V22.12c-7,4.952-19.053,8.001-31.582,8.001
                                            c-12.367,0-22.418-2.863-31.418-7.551v6.903c0,0.249,0.051,0.49,0.073,0.737C3.53,30.382,3.5,30.559,3.5,30.744v9.924
                                            c7,5.443,18.954,9.07,31.885,9.07c12.744,0,25.115-3.441,31.115-8.721V30.744C66.5,30.57,66.474,30.404,66.437,30.242z" />
                                        <path
                                            d="M35.273,70C53.021,70,66.5,63.357,66.5,54.549v-8.233c-7,4.831-18.775,7.806-31.115,7.806
                                            c-12.538,0-22.885-3.149-31.885-8.174v8.496C3.5,63.167,17.51,70,35.273,70z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-solid text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <g opacity="0.5">
                                            <path d="M64.03,67.5H5.968c-2.125,0-4.107-1.979-5.171-3.821c-1.063-1.843-1.063-4.546,0-6.39L29.828,6.798
                                                c1.064-1.842,3.045-3.09,5.172-3.09c2.126,0,4.108,1.092,5.171,2.934l29.03,50.257c1.064,1.843,1.064,4.951,0.002,6.794
                                                C68.138,65.533,66.156,67.5,64.03,67.5z" />
                                        </g>
                                        <g>
                                            <path d="M31.756,54.585c0-1.954,1.357-3.365,3.203-3.365c1.954,0,3.203,1.411,3.203,3.365
                                                c0,1.9-1.249,3.366-3.203,3.366C33.06,57.951,31.756,56.485,31.756,54.585z M33.113,46.82l-0.759-26.058h5.211L36.804,46.82H33.113
                                                z" />
                                        </g>
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-solid text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path fill="none"
                                                    d="M36.5,16.059c0-5.28-4.597-9.226-8.533-9.226c-3.904,0-8.467,3.945-8.467,9.226V22.5h17V16.059z" />
                                                <path opacity="0.5" d="M29.058,31.5H55.5v-3.452c0-3.171-1.965-5.548-5.136-5.548H40.5v-6.441C40.5,9.103,34.451,3,27.966,3
                                                C21.518,3,15.5,9.103,15.5,16.059V22.5H6.92c-3.17,0-6.42,2.377-6.42,5.548V56.16c0,3.17,3.25,6.34,6.42,6.34H18.5V39.963
                                                C18.5,34.803,23.897,31.5,29.058,31.5z M19.5,16.059c0-5.28,4.563-9.226,8.467-9.226c3.937,0,8.533,3.945,8.533,9.226V22.5h-17
                                                V16.059z" />
                                            </g>
                                        </g>
                                        <path
                                            d="M64.005,34.437c3.052,0,5.526,2.475,5.526,5.526v22.17c0,3.053-2.475,5.527-5.526,5.527H27.78
                                        c-3.052,0-5.527-2.475-5.527-5.527v-22.17c0-3.051,2.475-5.526,5.527-5.526H64.005" />
                                        <path fill="#FFFFFF"
                                            d="M52.5,45.688c0,4.291-3.203,7.916-7.031,7.916c-3.791,0-6.969-3.625-6.969-7.916V43.5h-4v2.188
                                        c0,6.479,4.998,11.75,10.969,11.75c6.006,0,11.031-5.271,11.031-11.75V43.5h-4V45.688z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                        </OwlCarousel>

                        <h2 className="title title-center mb-5">Solid icon &amp; Left align</h2>

                        <OwlCarousel adClass="owl-theme" options={mainSlider11}>
                            <div className="icon-box icon-solid icon-box-side text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <path opacity="0.5" d="M34.117,51.666c0.228,0.099,0.471,0.146,0.715,0.146c0.001,0,0.001,0,0.001,0
                                            c0.242,0-0.502-0.048-0.275-0.146L64.5,38.522c0,0.008,0,0.016,0,0.022l3.405-1.028c0.66-0.28,1.587-0.924,1.601-1.642
                                            c0.014-0.717-0.149-1.377-0.799-1.682l-9.624-4.581l-21.985,9.37c-0.736,0.314-1.488,0.475-2.294,0.475
                                            c-0.813,0-1.586-0.163-2.33-0.481l-21.689-9.294l-9.734,4.54C0.397,34.524-0.012,35.183,0,35.9c0.011,0.719,0.446,1.363,1.105,1.646
                                            l0.614,0.264c0-0.009-0.001-0.016-0.003-0.023L34.117,51.666z" />
                                        <path d="M34.833,55.938c-0.813,0-1.6-0.162-2.344-0.48l-21.675-9.285l-9.761,4.553c-0.651,0.303-1.063,0.961-1.051,1.679
                                            c0.012,0.718,0.444,1.363,1.104,1.646l33.011,14.141c0.228,0.099,0.472,0.146,0.716,0.146c0.242,0,0.485-0.048,0.713-0.146
                                            l33.345-14.172c0.662-0.28,1.096-0.924,1.109-1.643c0.013-0.717-0.396-1.376-1.047-1.682l-9.771-4.592l-22.024,9.36
                                            C36.422,55.778,35.639,55.938,34.833,55.938z" />
                                        <path d="M34.832,35.331C34.833,35.331,34.833,35.331,34.832,35.331c0.243,0,0.486-0.048,0.714-0.146l27.801-11.814l5.546-2.357
                                            c0.66-0.281,1.094-0.924,1.107-1.643c0.013-0.717-0.396-1.376-1.047-1.682L35.944,2.173c-0.49-0.231-1.055-0.231-1.544-0.002
                                            L1.053,17.718c-0.651,0.304-1.063,0.961-1.051,1.679c0.012,0.719,0.444,1.363,1.104,1.647l2.129,0.912l30.882,13.229
                                            C34.344,35.283,34.588,35.331,34.832,35.331z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Genus Quaimus Restinc</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-solid icon-box-side text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <path opacity="0.5"
                                            d="M35.48,0C17.678,0,3.821,6.841,3.821,15.574c0,0.167,0.076,0.331,0.089,0.497
                                       c7.111,5.235,18.469,8.716,31.19,8.716c13.138,0,24.399-3.656,31.399-9.199c0-0.004,0-0.009,0-0.013C66.5,6.696,53.264,0,35.48,0z" />
                                        <path
                                            d="M66.437,30.242c0.018-0.223,0.063-0.439,0.063-0.665V22.12c-7,4.952-19.053,8.001-31.582,8.001
                                       c-12.367,0-22.418-2.863-31.418-7.551v6.903c0,0.249,0.051,0.49,0.073,0.737C3.53,30.382,3.5,30.559,3.5,30.744v9.924
                                       c7,5.443,18.954,9.07,31.885,9.07c12.744,0,25.115-3.441,31.115-8.721V30.744C66.5,30.57,66.474,30.404,66.437,30.242z" />
                                        <path d="M35.273,70C53.021,70,66.5,63.357,66.5,54.549v-8.233c-7,4.831-18.775,7.806-31.115,7.806
                                       c-12.538,0-22.885-3.149-31.885-8.174v8.496C3.5,63.167,17.51,70,35.273,70z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Beatus Nature Sumus</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-solid icon-box-side text-center">
                                <span className="icon-box-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path fill="none"
                                                    d="M36.5,16.059c0-5.28-4.597-9.226-8.533-9.226c-3.904,0-8.467,3.945-8.467,9.226V22.5h17V16.059z" />
                                                <path opacity="0.5" d="M29.058,31.5H55.5v-3.452c0-3.171-1.965-5.548-5.136-5.548H40.5v-6.441C40.5,9.103,34.451,3,27.966,3
                                                C21.518,3,15.5,9.103,15.5,16.059V22.5H6.92c-3.17,0-6.42,2.377-6.42,5.548V56.16c0,3.17,3.25,6.34,6.42,6.34H18.5V39.963
                                                C18.5,34.803,23.897,31.5,29.058,31.5z M19.5,16.059c0-5.28,4.563-9.226,8.467-9.226c3.937,0,8.533,3.945,8.533,9.226V22.5h-17
                                                V16.059z" />
                                            </g>
                                        </g>
                                        <path
                                            d="M64.005,34.437c3.052,0,5.526,2.475,5.526,5.526v22.17c0,3.053-2.475,5.527-5.526,5.527H27.78
                                        c-3.052,0-5.527-2.475-5.527-5.527v-22.17c0-3.051,2.475-5.526,5.527-5.526H64.005" />
                                        <path fill="#FFFFFF"
                                            d="M52.5,45.688c0,4.291-3.203,7.916-7.031,7.916c-3.791,0-6.969-3.625-6.969-7.916V43.5h-4v2.188
                                        c0,6.479,4.998,11.75,10.969,11.75c6.006,0,11.031-5.271,11.031-11.75V43.5h-4V45.688z" />
                                    </svg>
                                </span>

                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Appareat Conducunt</h4>

                                    <p>Sed egestas, ante et vulputate volutpat, ros pede sempe vitae luctus met.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4 mb-4">
                        <h2 className="title title-center mb-5">Tiny Style</h2>

                        <OwlCarousel adClass="owl-theme" options={mainSlider11}>
                            <div className="icon-box icon-box-tiny text-center">
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">
                                        <span className="icon-box-icon">
                                            <i className="d-icon-layer"></i>
                                        </span>
                                        Genus Quaimus Restinc
                                    </h4>

                                    <p>Sed egestas, ante et vulputate volutpat eros.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-box-tiny text-center">
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">
                                        <span className="icon-box-icon">
                                            <i className="d-icon-database"></i>
                                        </span>
                                        Beatus Nature Sumus
                                    </h4>

                                    <p>Sed egestas, ante et vulputate volutpat eros.</p>
                                </div>
                            </div>

                            <div className="icon-box icon-box-tiny text-center">
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">
                                        <span className="icon-box-icon">
                                            <i className="d-icon-shoppingbag"></i>
                                        </span>Appareat Conducunt
                                    </h4>

                                    <p>Sed egestas, ante et vulputate volutpat eros.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <ElementsList adClass="bg-white mt-10" />
            </div>
        </>
    )
}

export default React.memo(IconBoxes);
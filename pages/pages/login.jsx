import React from 'react';
import Helmet from 'react-helmet';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';

function Login() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template | Login</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Login</h1>
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="/shop">Riode Shop</ALink></li>
                        <li>My Account</li>
                    </ul>
                </div>
            </nav>
            <div className="page-content mt-6 pb-2 mb-10">
                <div className="container">
                    <div className="login-popup">
                        <div className="form-box">
                            <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active">
                                    <TabList className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5">
                                        <Tab className="nav-item">
                                            <span className="nav-link border-no lh-1 ls-normal">Sign in</span>
                                        </Tab>
                                        <li className="delimiter">or</li>
                                        <Tab className="nav-item">
                                            <span className="nav-link border-no lh-1 ls-normal">Register</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <form action="#">
                                                <div className="form-group mb-3">
                                                    <input type="text" className="form-control" id="singin-email-2" name="singin-email" placeholder="Username or Email Address *" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" id="singin-password-2" placeholder="Password *" name="singin-password" required />
                                                </div>
                                                <div className="form-footer">
                                                    <div className="form-checkbox">
                                                        <input type="checkbox" className="custom-checkbox" id="signin-remember-2" name="signin-remember" />
                                                        <label className="form-control-label" htmlFor="signin-remember-2">Remember me</label>
                                                    </div>
                                                    <ALink href="#" className="lost-link">Lost your password?</ALink>
                                                </div>
                                                <button className="btn btn-dark btn-block btn-rounded" type="submit">Login</button>
                                            </form>
                                            <div className="form-choice text-center">
                                                <label className="ls-m">or Login With</label>
                                                <div className="social-links">
                                                    <ALink href="#" className="social-link social-google fab fa-google border-no"></ALink>
                                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f border-no"></ALink>
                                                    <ALink href="#" className="social-link social-twitter fab fa-twitter border-no"></ALink>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel className="tab-pane">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your email address:</label>
                                                    <input type="email" className="form-control" id="register-email-2" name="register-email" placeholder="Your Email address *" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-password-2">Password:</label>
                                                    <input type="password" className="form-control" id="register-password-2" name="register-password" placeholder="Password *" required />
                                                </div>
                                                <div className="form-footer">
                                                    <div className="form-checkbox">
                                                        <input type="checkbox" className="custom-checkbox" id="register-agree-2" name="register-agree"
                                                            required />
                                                        <label className="form-control-label" htmlFor="register-agree-2">I agree to the privacy policy</label>
                                                    </div>
                                                </div>
                                                <button className="btn btn-dark btn-block btn-rounded" type="submit">Register</button>
                                            </form>
                                            <div className="form-choice text-center">
                                                <label className="ls-m">or Register With</label>
                                                <div className="social-links">
                                                    <ALink href="#" className="social-link social-google fab fa-google border-no"></ALink>
                                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f border-no"></ALink>
                                                    <ALink href="#" className="social-link social-twitter fab fa-twitter border-no"></ALink>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(Login);
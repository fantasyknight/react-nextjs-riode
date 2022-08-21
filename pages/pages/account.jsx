import React from 'react';
import Helmet from 'react-helmet';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/custom-link';

function Account() {
    return (
        <main className="main account">
            <Helmet>
                <title>Riode React eCommerce Template | Account</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Account</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Account</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mt-4 mb-10 pb-6">
                <div className="container">
                    <h2 className="title title-center mb-10">My Account</h2>

                    <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={ 0 } className="tab tab-vertical gutter-lg">
                        <TabList className="nav nav-tabs mb-4 col-lg-3 col-md-4" role="tablist">
                            <Tab className="nav-item">
                                <a className="nav-link">Dashboard</a>
                            </Tab>
                            <Tab className="nav-item">
                                <a className="nav-link">Orders</a>
                            </Tab>
                            <Tab className="nav-item">
                                <a className="nav-link">Downloads</a>
                            </Tab>
                            <Tab className="nav-item">
                                <a className="nav-link">Address</a>
                            </Tab>
                            <Tab className="nav-item">
                                <a className="nav-link">Account details</a>
                            </Tab>
                            <Tab className="nav-item">
                                <ALink className="nav-link" href="/">Logout</ALink>
                            </Tab>
                        </TabList>
                        <div className="tab-content col-lg-9 col-md-8">
                            <TabPanel className="tab-pane dashboard">
                                <p className="mb-0">
                                    Hello <span>User</span> (not <span>User</span>? <ALink href="/" className="text-primary">Log out</ALink>)
								</p>
                                <p className="mb-8">
                                    From your account dashboard you can view your <ALink href="#" className="link-to-tab text-primary">recent orders</ALink>, manage your shipping and billing
										addresses,<br />and edit your password and account details.
								</p>
                                <ALink href="/shop" className="btn btn-dark btn-rounded">Go To Shop<i className="d-icon-arrow-right"></i></ALink>
                            </TabPanel>
                            <TabPanel className="tab-pane">
                                <table className="order-table">
                                    <thead>
                                        <tr>
                                            <th className="pl-2">Order</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th className="pr-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#3596</ALink></td>
                                            <td className="order-date"><time>February 24, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$900.00 for 5 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#3593</ALink></td>
                                            <td className="order-date"><time>February 21, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$290.00 for 2 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#2547</ALink></td>
                                            <td className="order-date"><time>January 4, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$480.00 for 8 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#2549</ALink></td>
                                            <td className="order-date"><time>January 19, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$680.00 for 5 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#4523</ALink></td>
                                            <td className="order-date"><time>Jun 6, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$564.00 for 3 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                        <tr>
                                            <td className="order-number"><ALink href="#">#4526</ALink></td>
                                            <td className="order-date"><time>Jun 19, 2021</time></td>
                                            <td className="order-status"><span>On hold</span></td>
                                            <td className="order-total"><span>$123.00 for 8 items</span></td>
                                            <td className="order-action"><ALink href="#" className="btn btn-primary btn-link btn-underline">View</ALink></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel className="tab-pane downloads">
                                <p className="mb-4 text-body">No downloads available yet.</p>
                                <ALink href="/shop" className="btn btn-primary btn-link btn-underline">Browser Products<i className="d-icon-arrow-right"></i></ALink>
                            </TabPanel>
                            <TabPanel className="tab-pane">
                                <p className="mb-2">The following addresses will be used on the checkout page by default.
								</p>
                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-address">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Billing Address</h5>
                                                <p>John Doe<br />
                                                    Riode Company<br />
                                                        Steven street<br />
                                                            El Carjon, CA 92020
												</p>
                                                <ALink href="#" className="btn btn-link btn-secondary btn-underline">Edit <i className="far fa-edit"></i></ALink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-address">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Shipping Address</h5>
                                                <p>You have not set up this type of address yet.</p>
                                                <ALink href="#" className="btn btn-link btn-secondary btn-underline">Edit <i className="far fa-edit"></i></ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="tab-pane">
                                <form action="#" className="form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>First Name *</label>
                                            <input type="text" className="form-control" name="first_name" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Last Name *</label>
                                            <input type="text" className="form-control" name="last_name" required />
                                        </div>
                                    </div>

                                    <label>Display Name *</label>
                                    <input type="text" className="form-control mb-0" name="display_name" required />
                                    <small className="d-block form-text mb-7">This will be how your name will be displayed
										in the account section and in reviews</small>

                                    <label>Email Address *</label>
                                    <input type="email" className="form-control" name="email" required />
                                    <fieldset>
                                        <legend>Password Change</legend>
                                        <label>Current password (leave blank to leave unchanged)</label>
                                        <input type="password" className="form-control" name="current_password" />

                                        <label>New password (leave blank to leave unchanged)</label>
                                        <input type="password" className="form-control" name="new_password" />

                                        <label>Confirm new password</label>
                                        <input type="password" className="form-control" name="confirm_password" />
                                    </fieldset>

                                    <button type="submit" className="btn btn-primary">SAVE CHANGES</button>
                                </form>
                            </TabPanel>
                            <TabPanel className="tab-pane"></TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </main >
    )

}

export default React.memo( Account );
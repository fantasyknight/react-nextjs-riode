import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Collapse from 'react-bootstrap/Collapse';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';

import SlideToggle from 'react-slide-toggle';

import { toDecimal, getTotalPrice } from '~/utils';

function Checkout( props ) {
    const { cartList } = props;
    const [ isFirst, setFirst ] = useState( false );

    return (
        <main className="main checkout">
            <Helmet>
                <title>Riode React eCommerce Template | Checkout</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Checkout</h1>

            <div className={ `page-content pt-7 pb-10 ${ cartList.length > 0 ? 'mb-10' : 'mb-2' }` }>
                <div className="step-by pr-4 pl-4">
                    <h3 className="title title-simple title-step"><ALink href="/pages/cart">1. Shopping Cart</ALink></h3>
                    <h3 className="title title-simple title-step active"><ALink href="#">2. Checkout</ALink></h3>
                    <h3 className="title title-simple title-step"><ALink href="/pages/order">3. Order Complete</ALink></h3>
                </div>
                <div className="container mt-7">
                    {
                        cartList.length > 0 ?
                            <>
                                <div className="card accordion">
                                    <Card type="parse" title="<div class='alert alert-light alert-primary alert-icon mb-4 card-header'>
                            <i class='fas fa-exclamation-circle'></i> <span class='text-body'>Returning customer?</span> <a href='#' class='text-primary collapse'>Click here to login</a>
                        </div>">
                                        <div className="alert-body collapsed">
                                            <p>If you have shopped with us before, please enter your details below.
                            If you are a new customer, please proceed to the Billing section.</p>
                                            <div className="row cols-md-2">
                                                <form className="mb-4 mb-md-0">
                                                    <label htmlFor="username">Username Or Email *</label>
                                                    <input type="text" className="input-text form-control mb-0" name="username" id="username" autoComplete="username" />
                                                </form>
                                                <form className="mb-4 mb-md-0">
                                                    <label htmlFor="password">Password *</label>
                                                    <input className="input-text form-control mb-0" type="password" name="password" id="password" autoComplete="current-password" />
                                                </form>
                                            </div>
                                            <div className="checkbox d-flex align-items-center justify-content-between">
                                                <div className="form-checkbox pt-0 mb-0">
                                                    <input type="checkbox" className="custom-checkbox" id="signin-remember"
                                                        name="signin-remember" />
                                                    <label className="form-control-label" htmlFor="signin-remember">Remember
                                    Me</label>
                                                </div>
                                                <ALink href="#" className="lost-link">Lost your password?</ALink>
                                            </div>
                                            <div className="link-group">
                                                <ALink href="#" className="btn btn-dark btn-rounded mb-4">Login</ALink> <span className="d-inline-block text-body font-weight-semi-bold">or Login With</span> <div className="social-links mb-4">
                                                    <ALink href="#" className="social-link social-google fab fa-google"></ALink>
                                                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="card accordion">
                                    <Card title="
                                            <div class='alert alert-light alert-primary alert-icon mb-4 card-header'>
                                                <i class='fas fa-exclamation-circle'></i>
                                                <span class='text-body'>Have a coupon?</span>
                                                <a href='#' class='text-primary'>Click here to enter your code</a>
                                            </div>" type="parse">

                                        <div className="alert-body mb-4 collapsed">
                                            <p>If you have a coupon code, please apply it below.</p>
                                            <form className="check-coupon-box d-flex">
                                                <input type="text" name="coupon_code" className="input-text form-control text-grey ls-m mr-4"
                                                    id="coupon_code" placeholder="Coupon code" />
                                                <button type="submit" className="btn btn-dark btn-rounded btn-outline">Apply Coupon</button>
                                            </form>
                                        </div>
                                    </Card>
                                </div>
                                <form action="#" className="form">
                                    <div className="row">
                                        <div className="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
                                            <h3 className="title title-simple text-left text-uppercase">Billing Details</h3>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label>First Name *</label>
                                                    <input type="text" className="form-control" name="first-name" required />
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Last Name *</label>
                                                    <input type="text" className="form-control" name="last-name" required />
                                                </div>
                                            </div>
                                            <label>Company Name (Optional)</label>
                                            <input type="text" className="form-control" name="company-name" required />
                                            <label>Country / Region *</label>
                                            <div className="select-box">
                                                <select name="country" className="form-control" defaultValue="us">
                                                    <option value="us">United States (US)</option>
                                                    <option value="uk"> United Kingdom</option>
                                                    <option value="fr">France</option>
                                                    <option value="aus">Austria</option>
                                                </select>
                                            </div>
                                            <label>Street Address *</label>
                                            <input type="text" className="form-control" name="address1" required
                                                placeholder="House number and street name" />
                                            <input type="text" className="form-control" name="address2" required
                                                placeholder="Apartment, suite, unit, etc. (optional)" />
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label>Town / City *</label>
                                                    <input type="text" className="form-control" name="city" required />
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>State *</label>
                                                    <input type="text" className="form-control" name="state" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <label>ZIP *</label>
                                                    <input type="text" className="form-control" name="zip" required />
                                                </div>
                                                <div className="col-xs-6">
                                                    <label>Phone *</label>
                                                    <input type="text" className="form-control" name="phone" required />
                                                </div>
                                            </div>
                                            <label>Email Address *</label>
                                            <input type="text" className="form-control" name="email-address" required />

                                            <SlideToggle duration={ 300 } collapsed >
                                                { ( { onToggle, setCollapsibleElement } ) => (
                                                    <div className="form-checkbox mb-0 pt-0">
                                                        <input type="checkbox" className="custom-checkbox" id="create-account" name="create-account" onChange={ onToggle } />
                                                        <label className='form-control-label ls-s' htmlFor='create-account'>Create an account?</label>

                                                        <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                                            <label htmlFor="account_username" className="pt-4">Account username&nbsp;
                                                                    <abbr className="required" title="required">*</abbr>
                                                            </label>

                                                            <input type="text" className="form-control" name="account_username" id="account_username" placeholder="Username" rows="5" />

                                                            <label htmlFor="account_password">Create account password&nbsp;
                                                                    <abbr className="required" title="required">*</abbr>
                                                            </label>

                                                            <input type="password" className="form-control mb-3" name="account_password" id="account_password" placeholder="Password" rows="5" />
                                                        </div>
                                                    </div>
                                                ) }
                                            </SlideToggle>

                                            <SlideToggle duration={ 300 } collapsed >
                                                { ( { onToggle, setCollapsibleElement } ) => (
                                                    <div className="form-checkbox mb-6">
                                                        <input type="checkbox" className="custom-checkbox" id="different-address" name="different-address" onChange={ onToggle } />
                                                        <label className='form-control-label ls-s' htmlFor='different-address'>Ship to a different address?</label>

                                                        <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                                            <div className="row pt-4">
                                                                <div className="col-xs-6">
                                                                    <label>First Name *</label>
                                                                    <input type="text" className="form-control" name="first-name" required />
                                                                </div>
                                                                <div className="col-xs-6">
                                                                    <label>Last Name *</label>
                                                                    <input type="text" className="form-control" name="last-name" required />
                                                                </div>
                                                            </div>
                                                            <label>Company Name (Optional)</label>
                                                            <input type="text" className="form-control" name="company-name" required />
                                                            <label>Country / Region *</label>
                                                            <div className="select-box">
                                                                <select name="country" className="form-control" defaultValue="us">
                                                                    <option value="us">United States (US)</option>
                                                                    <option value="uk"> United Kingdom</option>
                                                                    <option value="fr">France</option>
                                                                    <option value="aus">Austria</option>
                                                                </select>
                                                            </div>
                                                            <label>Street Address *</label>
                                                            <input type="text" className="form-control" name="address1" required
                                                                placeholder="House number and street name" />
                                                            <input type="text" className="form-control" name="address2" required
                                                                placeholder="Apartment, suite, unit, etc. (optional)" />
                                                            <div className="row">
                                                                <div className="col-xs-6">
                                                                    <label>Town / City *</label>
                                                                    <input type="text" className="form-control" name="city" required />
                                                                </div>
                                                                <div className="col-xs-6">
                                                                    <label>State *</label>
                                                                    <input type="text" className="form-control" name="state" required />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xs-6">
                                                                    <label>ZIP *</label>
                                                                    <input type="text" className="form-control" name="zip" required />
                                                                </div>
                                                                <div className="col-xs-6">
                                                                    <label>Phone *</label>
                                                                    <input type="text" className="form-control" name="phone" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) }
                                            </SlideToggle>

                                            <h2 className="title title-simple text-uppercase text-left mt-6">Additional Information</h2>
                                            <label>Order Notes (Optional)</label>
                                            <textarea className="form-control pb-2 pt-2 mb-0" cols="30" rows="5"
                                                placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                        </div>

                                        <aside className="col-lg-5 sticky-sidebar-wrapper">
                                            <div className="sticky-sidebar mt-1" data-sticky-options="{'bottom': 50}">
                                                <div className="summary pt-5">
                                                    <h3 className="title title-simple text-left text-uppercase">Your Order</h3>
                                                    <table className="order-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                cartList.map( item =>
                                                                    <tr key={ 'checkout-' + item.name }>
                                                                        <td className="product-name">{ item.name } <span
                                                                            className="product-quantity">×&nbsp;{ item.qty }</span></td>
                                                                        <td className="product-total text-body">${ toDecimal( item.price * item.qty ) }</td>
                                                                    </tr>
                                                                )
                                                            }

                                                            <tr className="summary-subtotal">
                                                                <td>
                                                                    <h4 className="summary-subtitle">Subtotal</h4>
                                                                </td>
                                                                <td className="summary-subtotal-price pb-0 pt-0">${ toDecimal( getTotalPrice( cartList ) ) }
                                                                </td>
                                                            </tr>
                                                            <tr className="sumnary-shipping shipping-row-last">
                                                                <td colSpan="2">
                                                                    <h4 className="summary-subtitle">Calculate Shipping</h4>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="custom-radio">
                                                                                <input type="radio" id="flat_rate"
                                                                                    name="shipping" className="custom-control-input" defaultChecked />
                                                                                <label className="custom-control-label"
                                                                                    htmlFor="flat_rate">Flat rate</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="custom-radio">
                                                                                <input type="radio" id="free-shipping"
                                                                                    name="shipping" className="custom-control-input" />
                                                                                <label className="custom-control-label"
                                                                                    htmlFor="free-shipping">Free shipping</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div className="custom-radio">
                                                                                <input type="radio" id="local_pickup"
                                                                                    name="shipping" className="custom-control-input" />
                                                                                <label className="custom-control-label"
                                                                                    htmlFor="local_pickup">Local pickup</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                            <tr className="summary-total">
                                                                <td className="pb-0">
                                                                    <h4 className="summary-subtitle">Total</h4>
                                                                </td>
                                                                <td className=" pt-0 pb-0">
                                                                    <p className="summary-total-price ls-s text-primary">${ toDecimal( getTotalPrice( cartList ) ) }</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="payment accordion radio-type">
                                                        <h4 className="summary-subtitle ls-m pb-3">Payment Methods</h4>

                                                        <div className="checkbox-group">
                                                            <div className="card-header">
                                                                <ALink href="#" className={ `text-body text-normal ls-m ${ isFirst ? 'collapse' : '' }` } onClick={ () => { !isFirst && setFirst( !isFirst ) } }>Check payments</ALink>
                                                            </div>

                                                            <Collapse in={ isFirst }>
                                                                <div className="card-wrapper">
                                                                    <div className="card-body ls-m overflow-hidden">
                                                                        Please send a check to Store Name, Store Street,
                                                                        Store Town, Store State / County, Store Postcode.
                                                                    </div>
                                                                </div>
                                                            </Collapse>

                                                            <div className="card-header">
                                                                <ALink href="#" className={ `text-body text-normal ls-m ${ !isFirst ? 'collapse' : '' }` } onClick={ () => { isFirst && setFirst( !isFirst ) } }>Cash on delivery</ALink>
                                                            </div>

                                                            <Collapse in={ !isFirst }>
                                                                <div className="card-wrapper">
                                                                    <div className="card-body ls-m overflow-hidden">
                                                                        Please send a check to Store Name, Store Street,
                                                                        Store Town, Store State / County, Store Postcode.
                                                                    </div>
                                                                </div>
                                                            </Collapse>
                                                        </div>
                                                    </div>
                                                    <div className="form-checkbox mt-4 mb-5">
                                                        <input type="checkbox" className="custom-checkbox" id="terms-condition"
                                                            name="terms-condition" />
                                                        <label className="form-control-label" htmlFor="terms-condition">
                                                            I have read and agree to the website <ALink href="#">terms and conditions </ALink>*
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn btn-dark btn-rounded btn-order">Place Order</button>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </form>

                            </>
                            :
                            <div className="empty-cart text-center">
                                <p>Your cart is currently empty.</p>
                                <i className="cart-empty d-icon-bag"></i>
                                <p className="return-to-shop mb-0">
                                    <ALink className="button wc-backward btn btn-dark btn-md" href="/shop">
                                        Return to shop
                                </ALink>
                                </p>
                            </div>
                    }
                </div>
            </div>
        </main>
    )
}

function mapStateToProps( state ) {
    return {
        cartList: state.cart.data ? state.cart.data : []
    }
}

export default connect( mapStateToProps )( Checkout );
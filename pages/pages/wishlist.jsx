import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ALink from '~/components/features/custom-link';

import { cartActions } from '~/store/cart';
import { wishlistActions } from '~/store/wishlist';

import { toDecimal } from '~/utils';

function Wishlist( props ) {
    const { wishlist, addToCart, removeFromWishlist } = props;

    const moveToCart = ( e, item ) => {
        e.preventDefault();
        addToCart( { ...item, qty: 1, price: item.price[ 0 ] } );
        removeFromWishlist( item );
    }

    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template | Wishlist</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Wishlist</h1>
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Wishlist</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content pt-10 pb-10 mb-2">
                <div className="container">
                    {

                        wishlist.length > 0 ?
                            <>
                                <table className="shop-table wishlist-table mt-2 mb-4">
                                    <thead>
                                        <tr>
                                            <th className="product-name"><span>Product</span></th>
                                            <th></th>
                                            <th className="product-price"><span>Price</span></th>
                                            <th className="product-stock-status"><span>Stock status</span></th>
                                            <th className="product-add-to-cart"></th>
                                            <th className="product-remove"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="wishlist-items-wrapper">
                                        {
                                            wishlist.map( ( item ) =>
                                                <tr key={ 'wishlist-' + item.name }>
                                                    <td className="product-thumbnail">
                                                        <ALink href={ '/product/default/' + item.slug }>
                                                            <figure>
                                                                <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.pictures[ 0 ].url } width="100" height="100"
                                                                    alt="product" />
                                                            </figure>
                                                        </ALink>
                                                    </td>
                                                    <td className="product-name">
                                                        <ALink href={ '/product/default/' + item.slug }>{ item.name }</ALink>
                                                    </td>
                                                    <td className="product-price">
                                                        {
                                                            item.price[ 0 ] !== item.price[ 1 ] ?
                                                                < span className="amount">${ toDecimal( item.price[ 0 ] ) } – ${ toDecimal( item.price[ 1 ] ) }</span>
                                                                : item.discount > 0 && item.variants.length > 0 ?
                                                                    <>
                                                                        <span className="amount">${ toDecimal( item.salePrice ) }</span>
                                                                        <span className="amount">${ toDecimal( item.price ) }</span>
                                                                    </>
                                                                    : <span className="amount">${ toDecimal( item.price[ 0 ] ) }</span>
                                                        }
                                                    </td>
                                                    <td className="product-stock-status">
                                                        <span className={ item.stock > 0 ? 'wishlist-in-stock' : 'wishlist-out-stock' }>{ item.stock > 0 ? 'In Stock' : 'Out of Stock' }</span>
                                                    </td>
                                                    <td className="product-add-to-cart">
                                                        {
                                                            item.stock > 0 ?
                                                                item.variants.length > 0 ?
                                                                    <ALink href={ '/product/default/' + item.slug } className="btn-product btn-primary"><span>Select options</span></ALink>
                                                                    :
                                                                    <a href="#" className="btn-product btn-primary" onClick={ ( e ) => moveToCart( e, item ) }><span>Add to Cart</span></a>
                                                                : ""
                                                        }
                                                    </td>
                                                    <td className="product-remove">
                                                        <div>
                                                            <ALink href="#" className="remove" title="Remove this product"><i
                                                                className="fas fa-times" onClick={ () => removeFromWishlist( item ) }></i></ALink>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                <div className="social-links share-on">
                                    <h5 className="text-uppercase font-weight-bold mb-0 mr-4 ls-s">Share on:</h5>
                                    <ALink href="#" className="social-link social-icon social-facebook"
                                        title="Facebook"><i className="fab fa-facebook-f"></i></ALink>
                                    <ALink href="#" className="social-link social-icon social-twitter"
                                        title="Twitter"><i className="fab fa-twitter"></i></ALink>
                                    <ALink href="#" className="social-link social-icon social-pinterest"
                                        title="Pinterest"><i className="fab fa-pinterest-p"></i></ALink>
                                    <ALink href="#" className="social-link social-icon social-email"
                                        title="Email"><i className="far fa-envelope"></i></ALink>
                                    <ALink href="#" className="social-link social-icon social-whatsapp"
                                        title="Whatsapp"><i className="fab fa-whatsapp"></i></ALink>
                                </div>
                            </>
                            :
                            <div className="empty-cart text-center">
                                <i className="cart-empty d-icon-heart"></i>
                                <p>No products added to the wishlist.</p>
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
        wishlist: state.wishlist.data ? state.wishlist.data : []
    }
}

export default connect( mapStateToProps, { addToCart: cartActions.addToCart, removeFromWishlist: wishlistActions.removeFromWishlist } )( Wishlist );

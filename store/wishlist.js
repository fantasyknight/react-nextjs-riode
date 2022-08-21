import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const actionTypes = {
    TOGGLE_WISHLIST: 'TOGGLE_WISHLIST',
    REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
    REFRESH_STORE: 'REFRESH_STORE'
}

const initialState = {
    data: []
}

function wishlistReducer( state = initialState, action ) {
    switch ( action.type ) {
        case actionTypes.TOGGLE_WISHLIST:
            let index = state.data.findIndex( item => item.name === action.payload.product.name );
            let tmpData = [ ...state.data ];

            if ( index === -1 ) {
                tmpData.push( action.payload.product );
            } else {
                tmpData.splice( index );
            }

            return { ...state, data: tmpData };

        case actionTypes.REMOVE_FROM_WISHLIST:
            let wishlist = state.data.reduce( ( wishlistAcc, product ) => {
                if ( product.name !== action.payload.product.name ) {
                    wishlistAcc.push( product );
                }
                return wishlistAcc;
            }, [] );

            return { ...state, data: wishlist };

        case actionTypes.REFRESH_STORE:
            return initialState;

        default:
    }
    return state;
}

export const wishlistActions = {
    toggleWishlist: product => ( { type: actionTypes.TOGGLE_WISHLIST, payload: { product } } ),
    removeFromWishlist: product => ( { type: actionTypes.REMOVE_FROM_WISHLIST, payload: { product } } )
};

const persistConfig = {
    keyPrefix: "riode-",
    key: "wishlist",
    storage
}

export default persistReducer( persistConfig, wishlistReducer );
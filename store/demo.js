import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

export const actionTypes = {
    RefreshStore: "REFRESH_STORE"
};

let initialState = {
    current: 1
};

const demoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.RefreshStore:
            return {
                ...state,
                current: action.payload.current
            }

        default:
            return state;
    }
}

export const demoActions = {
    refreshStore: ( current ) => ( { type: actionTypes.RefreshStore, payload: { current } } )
};

const persistConfig = {
    keyPrefix: "riode-",
    key: "demo",
    storage
}

export default persistReducer( persistConfig, demoReducer );
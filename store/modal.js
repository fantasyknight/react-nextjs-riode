import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const actionTypes = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    OPEN_QUICKVIEW: 'OPEN_QUICKVIEW',
    CLOSE_QUICKVIEW: 'CLOSE_QUICKVIEW',
    REFRESH_STORE: 'REFRESH_STORE'
}

const initialState = {
    type: 'video',
    openModal: false,
    quickview: false,
    singleSlug: ''
}

function modalReducer( state = initialState, action ) {
    switch ( action.type ) {
        case actionTypes.OPEN_QUICKVIEW:
            return {
                ...state,
                quickview: true,
                singleSlug: action.payload.slug
            }

        case actionTypes.CLOSE_QUICKVIEW:
            return {
                ...state,
                quickview: false
            }

        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                singleSlug: action.payload.slug,
                openModal: true
            }

        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                openModal: false
            }

        case actionTypes.REFRESH_STORE:
            return initialState;

        default:
            return state;
    }
}

export const modalActions = {
    openModal: slug => ( { type: actionTypes.OPEN_MODAL, payload: { slug } } ),
    closeModal: modalType => ( { type: actionTypes.CLOSE_MODAL, payload: { modalType } } ),
    openQuickview: slug => ( { type: actionTypes.OPEN_QUICKVIEW, payload: { slug } } ),
    closeQuickview: () => ( { type: actionTypes.CLOSE_QUICKVIEW } )
};

const persistConfig = {
    keyPrefix: "riode-",
    key: "modal",
    storage
}

export default persistReducer( persistConfig, modalReducer );
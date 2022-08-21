import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleWare from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootSaga from '~/store/root-saga';

import cartReducer from '~/store/cart';
import modalReducer from '~/store/modal';
import wishlistReducer from '~/store/wishlist';
import demoReducer from '~/store/demo';

const sagaMiddleware = createSagaMiddleWare();

const rootReducers = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
    wishlist: wishlistReducer,
    demo: demoReducer
})

export const makeStore = (context) => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__persistor = persistStore(store);

    return store;
};

export const wrapper = createWrapper(makeStore);
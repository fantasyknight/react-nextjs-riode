import { all } from 'redux-saga/effects';

import { cartSaga } from '~/store/cart';

export default function* rootSaga() {
    yield all( [
        cartSaga()
    ] )
}
import { all } from 'redux-saga/effects';

import pixelSagas from './pixel'


export default function* rootSaga() {
    yield all([
        ...pixelSagas
    ])
}

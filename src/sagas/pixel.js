import { takeEvery } from 'redux-saga/effects'
import { PIXEL_CREATE } from '../actions'
import { pixelsRef } from '../firebase'


async function sendPixel(action) {
    await pixelsRef.add(action.pixel)
}

export default [
    takeEvery(PIXEL_CREATE, sendPixel)
]

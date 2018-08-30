import { takeEvery } from 'redux-saga/effects'
import { PIXEL_CREATE } from '../actions'
import { pixelsRef } from '../firebase'


async function sendPixel(action) {
    const pixel = {
        ...action.pixel,
        date: action.date
    }
    await pixelsRef.add(pixel)
}

export default [
    takeEvery(PIXEL_CREATE, sendPixel)
]

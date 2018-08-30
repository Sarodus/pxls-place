import {
    PIXEL_CREATE,
    PIXEL_RECEIVE,
    PIXEL_REMOVE
} from '../actions'

export default (state={pixels:{}}, action) => {
    switch(action.type) {
        case PIXEL_RECEIVE:
            return {
                ...state,
                pixels: {
                    ...state.pixels,
                    [action.pixel.date]: action.pixel
                }
            }

        case PIXEL_CREATE:
            return {
                ...state,
                pixels: {
                    ...state.pixels,
                    [action.date]: action.pixel
                }
            }

        case PIXEL_REMOVE:
            const pixels = state.pixels
            delete pixels[action.pixel.date]
            return {
                ...state,
                pixels: {
                    ...pixels
                }
            }

        default:
            return state
    }
}

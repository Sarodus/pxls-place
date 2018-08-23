import {
    PIXEL_LOAD,
    PIXELS_LOADED,
    PIXEL_CREATE,
} from '../actions'

export default (state={}, action) => {
    switch(action.type) {
        case PIXEL_LOAD:
            return state

        case PIXELS_LOADED:
            return state

        case PIXEL_CREATE:
            return state

        default:
            return state
    }
}
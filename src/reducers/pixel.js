import {
    PIXEL_CREATE,
    PIXEL_RECEIVE,
} from '../actions'

export default (state={pixels:[]}, action) => {
    switch(action.type) {
        case PIXEL_RECEIVE:
            console.log('receive!! lul', action.pixel)
            return {
                ...state,
                pixels: state.pixels.concat(action.pixel)
            }

        case PIXEL_CREATE:
            return {
                ...state,
                pixels: state.pixels.concat(action.pixel)
            }

        default:
            return state
    }
}

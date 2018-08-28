import {
    ZOOM_IN,
    ZOOM_OUT,
    PICK_COLOR,
    ADD_COLOR,
    REMOVE_COLOR,
    RESER_COLORS
} from '../actions'
import colors from 'colors.css'

const baisc_colors = Object.values(colors)

const defaultState = {
    color: 'black',
    pallete: baisc_colors,
    zoom: 1
}

const zoomStep = .2
const maxZoom = 4
const minZoom = .5

export default (state=defaultState, action) => {
    switch(action.type) {
        case ZOOM_IN:
            return {
                ...state,
                zoom: Math.min(state.zoom + zoomStep, maxZoom)
            }
        case ZOOM_OUT:
            return {
                ...state,
                zoom: Math.max(state.zoom - zoomStep, minZoom)
            }
        case PICK_COLOR:
            return {
                ...state,
                color: action.color
            }
        case ADD_COLOR:
            return {
                ...state,
                pallete: state.pallete.concat(action.color)
            }
        case REMOVE_COLOR:
            const index = state.pallete.indexOf(action.color)
            let pallete = state.pallete
            if (index > -1) {
                pallete = pallete.splice(index, 1)
            }
            return {
                ...state,
                pallete
            }
        case RESER_COLORS:
            return defaultState
        default:
            return state
    }
}
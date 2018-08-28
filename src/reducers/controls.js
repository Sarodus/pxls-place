import {
    PICK_COLOR,
    ADD_COLOR,
    REMOVE_COLOR,
    RESER_COLORS
} from '../actions'
import colors from 'colors.css'

const baisc_colors = Object.values(colors)

const defaultState = {
    color: 'black',
    pallete: baisc_colors
}

export default (state=defaultState, action) => {
    switch(action.type) {
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
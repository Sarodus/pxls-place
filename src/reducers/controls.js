import {
    TOGGLE_PICKER,
    PICK_COLOR,
} from '../actions'

export default (state={display:false, color: 'red'}, action) => {
    switch(action.type) {
        case TOGGLE_PICKER:
            return {
                ...state,
                display: !state.display
            }

        case PICK_COLOR:
            return {
                ...state,
                color: action.color
            }

        default:
            return state
    }
}
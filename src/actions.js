export const PIXEL_LOAD = 'PIXEL_LOAD'
export const PIXELS_LOADED = 'PIXELS_LOADED'
export const PIXEL_CREATE = 'PIXEL_CREATE'

export const TOGGLE_PICKER = 'TOGGLE_PICKER'
export const PICK_COLOR = 'PICK_COLOR'


export const togglePicker = () => ({
    type: TOGGLE_PICKER
})

export const pickColor = color => ({
    type: PICK_COLOR,
    color
})

export const PIXEL_LOAD = 'PIXEL_LOAD'
export const PIXELS_LOADED = 'PIXELS_LOADED'
export const PIXEL_CREATE = 'PIXEL_CREATE'

export const ZOOM_IN = 'ZOOM_IN'
export const ZOOM_OUT = 'ZOOM_OUT'
export const PICK_COLOR = 'PICK_COLOR'
export const ADD_COLOR = 'ADD_COLOR'
export const REMOVE_COLOR = 'REMOVE_COLOR'
export const RESER_COLORS = 'RESER_COLORS'

export const zoomIn = () => ({
    type: ZOOM_IN
})
export const zoomOut = () => ({
    type: ZOOM_OUT
})

export const pickColor = color => ({
    type: PICK_COLOR,
    color
})

export const addColor = color => ({
    type: ADD_COLOR,
    color
})

export const removeColor = color => ({
    type: REMOVE_COLOR,
    color
})

export const resetColors = () => ({
    type: RESER_COLORS
})

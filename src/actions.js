export const PIXEL_CREATE = 'PIXEL_CREATE'
export const PIXEL_RECEIVE = 'PIXEL_RECEIVE'

export const ZOOM_IN = 'ZOOM_IN'
export const ZOOM_OUT = 'ZOOM_OUT'
export const PICK_COLOR = 'PICK_COLOR'
export const ADD_COLOR = 'ADD_COLOR'
export const REMOVE_COLOR = 'REMOVE_COLOR'
export const RESER_COLORS = 'RESER_COLORS'

export const pixelCreate = pixel => ({
    type: PIXEL_CREATE,
    pixel
})

export const pixelReveice = pixel => ({
    type: PIXEL_RECEIVE,
    pixel
})

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

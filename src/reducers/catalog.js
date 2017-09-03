import {
    UPDATE
} from '../actionTypes/catalog'

const initialState = {
    visibleItems: [],
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                items: action.payload
            }

        default:
            return state
    }
}

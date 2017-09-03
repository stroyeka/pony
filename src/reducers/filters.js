import {
    APPLY
} from '../actionTypes/filters'

import { 
    CHOOSE_COLOR, 
    CHOOSE_KIND 
} from '../constants'

const initialState = {
    color: CHOOSE_COLOR,
    kind: CHOOSE_KIND,
    price_min: undefined,
    price_max: undefined,
    is_new: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLY:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

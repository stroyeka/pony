import * as types from '../actionTypes/filters'

export const apply = (data) => ({
    type: types.APPLY,
    payload: data
})
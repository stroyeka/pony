import * as types from '../actionTypes/catalog'

export const update = (data) => ({
    type: types.UPDATE,
    payload: data
})
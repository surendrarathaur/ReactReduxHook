import * as ACTION_TYPE from '../actions/actions_types'

export const initialState = {
    isloader: false
}

export const HookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SUCCESS:
            return {
                ...state,
                isloader: true
            }
        case ACTION_TYPE.FAILURE:
            return {
                ...state,
                isloader: false
            }
        default:
            return state
    }
}

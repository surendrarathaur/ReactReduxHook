import * as ACTION_TYPE from '../actions/actions_types'

const initialState = {
    isloader: false
}

const Reducer1 = (state = initialState, action) => {
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

export default Reducer1;
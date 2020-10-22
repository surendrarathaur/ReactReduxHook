import * as ACTION_TYPE from './actions_types'

export const SUCCESS = {
    type: ACTION_TYPE.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPE.FAILURE
}

export const success = () => {
    return {
        type: ACTION_TYPE.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPE.FAILURE
    }
}

export const user_input = (text) => {
    return {
        type: ACTION_TYPE.USER_INPUT,
        payload: text
    }
}
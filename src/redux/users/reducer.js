import { UserActionType } from './actions'

const INITIAL_STATE = {
    currentUser: null,
}

export function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UserActionType.SIGN_IN_ANONYMOUSLY_SUCCESS:
            return { ...state, currentUser: action.payload }
        default:
            return state
    }
}

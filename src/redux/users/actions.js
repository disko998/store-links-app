export const UserActionType = {
    SIGN_IN_ANONYMOUSLY: 'SIGN_IN_ANONYMOUSLY',
    SIGN_IN_ANONYMOUSLY_SUCCESS: 'SIGN_IN_ANONYMOUSLY_SUCCESS',
    SIGN_IN_ANONYMOUSLY_FAILURE: 'SIGN_IN_ANONYMOUSLY_FAILURE',
}

export const signInAnonymously = () => ({
    type: UserActionType.SIGN_IN_ANONYMOUSLY,
})

export const signInAnonymouslySuccess = user => ({
    type: UserActionType.SIGN_IN_ANONYMOUSLY_SUCCESS,
    payload: user,
})

export const signInAnonymouslyFailure = error => ({
    type: UserActionType.SIGN_IN_ANONYMOUSLY_FAILURE,
    payload: error,
})

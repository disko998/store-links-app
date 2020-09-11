import auth from '@react-native-firebase/auth'

import {
    signInAnonymously,
    signInAnonymouslySuccess,
    signInAnonymouslyFailure,
} from './actions'

let subscriber

export const signInAnonymouslyAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(signInAnonymously())

            subscriber = auth().onAuthStateChanged(async user => {
                if (user) {
                    return dispatch(signInAnonymouslySuccess(user))
                }

                console.log('sign in new user')

                const newUser = await auth().signInAnonymously()

                dispatch(signInAnonymouslySuccess(newUser))
            })
        } catch (error) {
            dispatch(signInAnonymouslyFailure(error.message))
        }
    }
}

export const unsubscribeUser = () => {
    subscriber()
    auth().signOut()
}

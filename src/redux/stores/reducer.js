import produce from 'immer'

import { StoreActionsType } from './actions'

const INITIAL_STATE = {
    stores: [],
    loading: false,
    error: null,
    favorites: [],
}

export function storeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case StoreActionsType.FETCH_STORES_START:
            return { ...state, loading: true }

        case StoreActionsType.FETCH_STORES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                stores: action.payload,
            }

        case StoreActionsType.FETCH_STORES_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case StoreActionsType.SET_FAVORITE_STORES:
            return { ...state, favorites: action.payload }

        default:
            return state
    }
}

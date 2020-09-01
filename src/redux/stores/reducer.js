import produce from 'immer'

import { StoreActionsType } from './actions'

const INITIAL_STATE = {
    stores: [],
    loading: false,
    error: null,
    favorites: [],
    submitted: false,
    currentCategory: 'my list',
    categories: [],
}

export function storeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case StoreActionsType.FETCH_STORES_START:
            return {
                ...state,
                loading: true,
                currentCategory: action.payload || 'my list',
            }

        case StoreActionsType.FETCH_STORES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                stores: action.payload,
            }

        case StoreActionsType.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                error: null,
                categories: action.payload,
            }

        case StoreActionsType.FETCH_CATEGORIES_FAILURE:
        case StoreActionsType.FETCH_STORES_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case StoreActionsType.SET_FAVORITE_STORES:
            return { ...state, favorites: action.payload }

        case StoreActionsType.TOGGLE_MODAL:
            return { ...state, submitted: !state.submitted }

        // case StoreActionsType.SET_CATEGORY:
        //     return { ...state, category: action.payload }

        default:
            return state
    }
}

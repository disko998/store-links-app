export const StoreActionsType = {
    FETCH_STORES_START: 'FETCH_STORES_START',
    FETCH_STORES_SUCCESS: 'FETCH_STORES_SUCCESS',
    FETCH_STORES_FAILURE: 'FETCH_STORES_FAILURE',

    SET_FAVORITE_STORES: 'SET_FAVORITE_STORES',
    TOGGLE_MODAL: 'TOGGLE_MODAL',

    SUBMIT_STORE_START: 'SUBMIT_STORE_START',
    SUBMIT_STORE_SUCCESS: 'SUBMIT_STORE_SUCCESS',
    SUBMIT_STORE_FAILURE: 'SUBMIT_STORE_FAILURE',
}

export const fetchStoresStart = () => ({
    type: StoreActionsType.FETCH_STORES_START,
})

export const fetchStoresSuccess = stores => ({
    type: StoreActionsType.FETCH_STORES_SUCCESS,
    payload: stores,
})

export const fetchStoresFailure = errorMessage => ({
    type: StoreActionsType.FETCH_STORES_FAILURE,
    payload: errorMessage,
})

export const setFavoriteStores = favorites => ({
    type: StoreActionsType.SET_FAVORITE_STORES,
    payload: favorites,
})

export const submitStoreStart = () => ({
    type: StoreActionsType.SUBMIT_STORE_START,
})

export const toggleModal = () => ({
    type: StoreActionsType.TOGGLE_MODAL,
})

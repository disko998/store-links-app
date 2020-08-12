export const StoreActionsType = {
    FETCH_STORES_START: 'FETCH_STORES_START',
    FETCH_STORES_SUCCESS: 'FETCH_STORES_SUCCESS',
    FETCH_STORES_FAILURE: 'FETCH_STORES_FAILURE',
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

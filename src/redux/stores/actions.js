export const StoreActionsType = {
    FETCH_STORES_START: 'FETCH_STORES_START',
    FETCH_STORES_SUCCESS: 'FETCH_STORES_SUCCESS',
    FETCH_STORES_FAILURE: 'FETCH_STORES_FAILURE',

    SET_FAVORITE_STORES: 'SET_FAVORITE_STORES',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SEARCH_CHANGE: 'SEARCH_CHANGE',

    SUBMIT_STORE_START: 'SUBMIT_STORE_START',
    SUBMIT_STORE_SUCCESS: 'SUBMIT_STORE_SUCCESS',
    SUBMIT_STORE_FAILURE: 'SUBMIT_STORE_FAILURE',

    SET_CATEGORY: 'SET_CATEGORY',
    FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
}

export const fetchStoresStart = category => ({
    type: StoreActionsType.FETCH_STORES_START,
    payload: category,
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

export const setCategory = categoryName => ({
    type: StoreActionsType.SET_CATEGORY,
    payload: categoryName,
})

export const fetchCategoriesStart = () => ({
    type: StoreActionsType.FETCH_CATEGORIES_START,
})

export const fetchCategoriesSuccess = categories => ({
    type: StoreActionsType.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
})

export const fetchCategoriesFailure = errorMessage => ({
    type: StoreActionsType.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage,
})

export const searchChange = text => ({
    type: StoreActionsType.SEARCH_CHANGE,
    payload: text,
})

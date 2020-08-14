import { createSelector } from 'reselect'

export const selectStoreFeatures = state => state.store

export const selectStores = createSelector(
    selectStoreFeatures,
    store => store.stores,
)

export const selectFavorites = createSelector(
    selectStoreFeatures,
    store => store.favorites,
)

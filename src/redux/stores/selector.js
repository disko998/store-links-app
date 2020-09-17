import { createSelector } from 'reselect'

export const selectStoreFeatures = state => state.store

export const selectStores = createSelector(selectStoreFeatures, state =>
    state.stores.filter(
        store =>
            store.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1,
    ),
)

export const selectFavorites = createSelector(
    selectStoreFeatures,
    store => store.favorites,
)

export const selectCurrentCategory = createSelector(
    selectStoreFeatures,
    store => store.currentCategory,
)

export const selectCategories = createSelector(
    selectStoreFeatures,
    store => store.categories,
)

export const selectStoresLoading = createSelector(
    selectStoreFeatures,
    store => store.loading,
)

export const selectFilter = createSelector(
    selectStoreFeatures,
    store => store.filter,
)

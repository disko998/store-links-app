import { createSelector } from 'reselect'

export const selectStoryFeatures = state => state.users

export const selectUser = createSelector(
    selectStoryFeatures,
    users => users.currentUser,
)

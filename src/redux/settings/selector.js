import { createSelector } from 'reselect'

export const selectSettingsFeatures = state => state.settings

export const selectCountries = createSelector(
    selectSettingsFeatures,
    story => story.countries,
)

export const selectCurrentCountry = createSelector(
    selectSettingsFeatures,
    story => story.currentCountry,
)

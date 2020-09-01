export const SettingsActionType = {
    FETCH_COUNTRIES_START: 'FETCH_COUNTRIES_START',
    FETCH_COUNTRIES_SUCCESS: 'FETCH_COUNTRIES_SUCCESS',
    FETCH_COUNTRIES_FAILURE: 'FETCH_COUNTRIES_FAILURE',

    SET_COUNTRY: 'SET_COUNTRY',
}

export const fetchCountriesStart = () => ({
    type: SettingsActionType.FETCH_COUNTRIES_START,
})

export const fetchCountriesSuccess = data => ({
    type: SettingsActionType.FETCH_COUNTRIES_SUCCESS,
    payload: data,
})

export const fetchCountriesFailure = error => ({
    type: SettingsActionType.FETCH_COUNTRIES_FAILURE,
    payload: error,
})

export const setCountry = data => ({
    type: SettingsActionType.SET_COUNTRY,
    payload: data,
})

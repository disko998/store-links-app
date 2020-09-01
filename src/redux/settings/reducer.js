import { SettingsActionType } from './actions'

const INITIAL_STATE = {
    countries: [],
    loading: false,
    error: '',
    currentCountry: '',
}

export function settingsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SettingsActionType.FETCH_COUNTRIES_START:
            return { ...state, loading: true }
        case SettingsActionType.FETCH_COUNTRIES_SUCCESS:
            return { ...state, countries: action.payload, loading: false }
        case SettingsActionType.FETCH_COUNTRIES_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case SettingsActionType.SET_COUNTRY:
            return { ...state, currentCountry: action.payload }
        default:
            return state
    }
}

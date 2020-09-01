import {
    fetchCountriesFailure,
    fetchCountriesStart,
    fetchCountriesSuccess,
    setCountry,
} from './actions'
import { getCollectionDocs } from '../../firebase/utils'
import AsyncStorage from '@react-native-community/async-storage'

export const fetchCountriesAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchCountriesStart())

            const countries = await getCollectionDocs('countries')

            dispatch(fetchCountriesSuccess(countries))
        } catch (error) {
            dispatch(fetchCountriesFailure(error.message))
        }
    }
}

export const getCountryAsync = () => {
    return async (dispatch, getState) => {
        try {
            const country = await AsyncStorage.getItem('country')

            dispatch(setCountry(country || ''))
        } catch (error) {
            dispatch(fetchCountriesFailure(error.message))
        }
    }
}

export const setCountryAsync = country => {
    return async (dispatch, getState) => {
        try {
            await AsyncStorage.setItem('country', country)

            dispatch(setCountry(country))
        } catch (error) {
            dispatch(fetchCountriesFailure(error.message))
        }
    }
}

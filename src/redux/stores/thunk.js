import { fetchStoresStart, fetchStoresSuccess } from './actions'
import { getCollectionDocs } from '../../firebase/utils'

export const fetchStoresAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStoresStart())

            const stores = await getCollectionDocs('stores')

            dispatch(fetchStoresSuccess(stores))
        } catch (error) {
            dispatch(fetchStoresSuccess(error.message))
        }
    }
}

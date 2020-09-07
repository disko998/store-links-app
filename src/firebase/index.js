import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import analytics from '@react-native-firebase/analytics'

export const db = firestore()
export const fileStorage = storage()
export const fbAnalytics = analytics()

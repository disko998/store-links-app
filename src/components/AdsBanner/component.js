import React from 'react'
import { View } from 'react-native'

import { TouchableBanner, BannerImage } from './styles'
import { streamAd, getDoc } from '../../firebase/utils'
import { useNavigation } from '@react-navigation/native'
import routes from '../../navigation/routes'
import { fbAnalytics } from '../../firebase'

export default function AdsBanner() {
    const navigation = useNavigation()
    const [ad, setAd] = React.useState(null)

    React.useEffect(() => {
        streamAd('ads', 'ad', data => setAd(data))
    }, [])

    const onAdPress = React.useCallback(async () => {
        const store = await getDoc('stores', ad.storeId)
        fbAnalytics.logEvent('ad_click', { store_name: store.name })
        navigation.navigate(routes.STORE, store)
    }, [ad, navigation])

    if (!ad) {
        return null
    }

    return ad.show ? (
        <TouchableBanner onPress={onAdPress}>
            <BannerImage source={{ uri: ad.image }} />
        </TouchableBanner>
    ) : (
        <View />
    )
}

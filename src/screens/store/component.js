import React from 'react'
import { Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
    StoreWrapper,
    StoreBanner,
    StoreAvatar,
    StoreTitle,
    StoreDetails,
    ActionBar,
    InfoWrapper,
} from './styles'
import { ActionButton, PrimaryButton, Header } from '../../components'
import { openWhatsApp } from '../../utils/helper'
import { toggleFavoriteStoreAsync, selectFavorites } from '../../redux/stores'
import routes from '../../navigation/routes'
import { fbAnalytics } from '../../firebase'

export default function StoreScreen({ navigation, route }) {
    const store = JSON.parse(route.params)
    const { name, title, logo, image, order_link, id } = store

    React.useEffect(() => {
        fbAnalytics.logEvent('view_store', {
            store_id: store.id,
            store_name: store.name,
        })
    }, [])

    // hooks
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    const { t } = useTranslation()

    // handlers
    const onOrder = React.useCallback(() => {
        navigation.navigate(routes.STORE_VIEW, { uri: store.order_link })
        fbAnalytics.logEvent('order_link', {
            store_id: store.id,
            store_name: store.name,
            order_link: store.order_link,
        })
    }, [navigation, store])

    const onLocation = React.useCallback(() => {
        fbAnalytics.logEvent('open_location', {
            store_id: store.id,
            store_name: store.name,
            store_locations: store.locations,
        })
        navigation.navigate(routes.STORE_LOCATION, { store })
    }, [store, navigation])

    const onCall = React.useCallback(async () => {
        fbAnalytics.logEvent('call_number', {
            store_id: store.id,
            store_name: store.name,
            call_number: store.call_number,
        })
        await Linking.openURL(`tel:${store.call_number}`)
    }, [store])

    const onWhatsApp = React.useCallback(() => {
        fbAnalytics.logEvent('open_whatsApp', {
            store_id: store.id,
            store_name: store.name,
            whatsApp_number: store.whatsApp_number,
        })
        openWhatsApp(store.whatsApp_number)
    }, [store])

    const toggleFavorite = React.useCallback(() => {
        dispatch(toggleFavoriteStoreAsync(store))
    }, [dispatch, store])

    return (
        <StoreWrapper>
            <StoreBanner source={{ uri: image }}>
                <Header
                    onBack={navigation.goBack}
                    onFavorite={toggleFavorite}
                    isFavorite={favorites.includes(id)}
                />
            </StoreBanner>
            <InfoWrapper>
                <StoreAvatar source={{ uri: logo }} />
                <StoreTitle>{name}</StoreTitle>
                <StoreDetails>{title}</StoreDetails>
                <ActionBar>
                    <ActionButton
                        logo="whatsapp"
                        title={t('whatsapp')}
                        onPress={onWhatsApp}
                    />
                    <ActionButton
                        logo="compass-outline"
                        title={t('location')}
                        onPress={onLocation}
                    />
                    <ActionButton
                        logo="phone"
                        title={t('call')}
                        onPress={onCall}
                    />
                </ActionBar>
                <PrimaryButton
                    title={order_link ? t('order_now') : t('no_store_link')}
                    disabled={!order_link}
                    onPress={onOrder}
                />
            </InfoWrapper>
        </StoreWrapper>
    )
}

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

export default function StoreScreen({ navigation, route }) {
    const store = JSON.parse(route.params)
    const {
        name,
        title,
        logo,
        image,
        order_link,
        call_number,
        whatsApp_number,
        id,
    } = store

    // hooks
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    const { t } = useTranslation()

    // handlers
    const onOrder = React.useCallback(() => {
        navigation.navigate(routes.STORE_VIEW, { uri: order_link })
    }, [order_link, navigation])

    const onLocation = React.useCallback(() => {
        navigation.navigate(routes.STORE_LOCATION, { store })
    }, [store, navigation])

    const onCall = React.useCallback(async () => {
        await Linking.openURL(`tel:+${call_number}`)
    }, [call_number])

    const onWhatsApp = React.useCallback(() => {
        openWhatsApp(whatsApp_number)
    }, [whatsApp_number])

    const toggleFavorite = React.useCallback(() => {
        dispatch(toggleFavoriteStoreAsync(JSON.parse(route.params)))
    }, [dispatch, route])

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

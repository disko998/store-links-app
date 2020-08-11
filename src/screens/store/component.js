import React from 'react'
import { Linking } from 'react-native'

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

export default function StoreScreen({ navigation, route }) {
    const { name, title, logo, image, order_link, call_number } = JSON.parse(
        route.params,
    )

    const redirectToWebsite = React.useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(order_link)

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(order_link)
        } else {
            alert(`Can't open this URL: ${order_link}`)
        }
    }, [order_link])

    const onCall = React.useCallback(async () => {
        await Linking.openURL(`tel:+${call_number}`)
    }, [call_number])

    return (
        <StoreWrapper>
            <StoreBanner source={{ uri: image }}>
                <Header
                    onBack={navigation.goBack}
                    onFavorite={() => alert('added to favorite')}
                />
            </StoreBanner>
            <InfoWrapper>
                <StoreAvatar source={{ uri: logo }} />
                <StoreTitle>{title}</StoreTitle>
                <StoreDetails>Authorized {name}</StoreDetails>
                <ActionBar>
                    <ActionButton
                        logo="whatsapp"
                        title="Whatsapp"
                        onPress={() => {}}
                    />
                    <ActionButton
                        logo="compass-outline"
                        title="Location"
                        onPress={() => {}}
                    />
                    <ActionButton logo="phone" title="Call" onPress={onCall} />
                </ActionBar>
                <PrimaryButton
                    title={order_link ? 'Ordern Now' : 'No link for this store'}
                    disabled={!Boolean(order_link)}
                    onPress={redirectToWebsite}
                />
            </InfoWrapper>
        </StoreWrapper>
    )
}

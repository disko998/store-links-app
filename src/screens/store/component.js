import React from 'react'

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

const avatar = {
    uri: 'https://www.rubber-siliconehoses.com/images/brend/scania-logo.jpg',
}

const banner = {
    uri:
        'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/54518493_2246086942386173_2424004418589425664_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=6bwWA1gdF48AX-SoTGy&_nc_ht=scontent.fbeg4-1.fna&oh=b47f853766c535d16fc928009e676d80&oe=5F4BD79A',
}

export default function StoreScreen({ navigation, route }) {
    const { name, details, logo, image } = route.params
    console.log(route.params)

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
                <StoreTitle>{name}</StoreTitle>
                <StoreDetails>{details}</StoreDetails>
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
                    <ActionButton
                        logo="phone"
                        title="Call"
                        onPress={() => {}}
                    />
                </ActionBar>
                <PrimaryButton title="Ordern Now" />
            </InfoWrapper>
        </StoreWrapper>
    )
}

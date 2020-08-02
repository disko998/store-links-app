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

export default function StoreScreen({ navigation }) {
    return (
        <StoreWrapper>
            <StoreBanner>
                <Header
                    onBack={navigation.goBack}
                    onFavorite={() => alert('added to favorite')}
                />
                <StoreAvatar source={avatar} />
            </StoreBanner>
            <InfoWrapper>
                <StoreTitle>H&S</StoreTitle>
                <StoreDetails>Some details about the store </StoreDetails>
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

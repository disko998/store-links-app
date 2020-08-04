import React from 'react'

import { GradientButton } from '../../components'
import { Colors } from '../../styles/colors'
import {
    Card,
    Gradient,
    Illustration,
    Title,
    Divider,
    BlackTitle,
    SkipButton,
} from './styles'
import routes from '../../navigation/routes'

const image = {
    uri:
        'https://img.favpng.com/4/1/25/feature-phone-smartphone-chinese-illustration-cartoon-mobile-phone-png-favpng-iHBp12w9yRckMiWLFCtzFPngL.jpg',
}

export default function AddPopupScreen({ navigation }) {
    return (
        <Gradient colors={Colors.addStorePopupBackground}>
            <Card>
                <Illustration source={image} />
                <Title>Contact Us for Ads Here!</Title>
                <GradientButton
                    colors={[Colors.purple, Colors.mainBlue]}
                    title="Let's Chat"
                    onPress={() => {}}
                />
                <Divider />
                <BlackTitle>Missing any Store?!</BlackTitle>
                <GradientButton
                    colors={[Colors.yellow, Colors.orange]}
                    title="Add New Store"
                    onPress={() => navigation.navigate(routes.ADD_STORE)}
                />
            </Card>
            <SkipButton onPress={navigation.goBack}>Skip</SkipButton>
        </Gradient>
    )
}

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
import { cook } from '../../assets/images'

export default function AddPopupScreen({ navigation }) {
    return (
        <Gradient colors={Colors.addStorePopupBackground}>
            <Card>
                <Illustration source={cook} />
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

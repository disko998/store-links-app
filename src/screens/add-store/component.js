import React from 'react'

import { Wrapper, GrayText, DarkText, Container } from './styles'
import { PrimaryButton, Header } from '../../components'

export default function AddStoreScreen({ navigation }) {
    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />
            <Container>
                <GrayText>Add</GrayText>
                <DarkText>New Store</DarkText>

                <PrimaryButton title="Send Request" />
            </Container>
        </Wrapper>
    )
}

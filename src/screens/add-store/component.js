import React from 'react'

import { PrimaryButton, Header, TextField } from '../../components'
import {
    Wrapper,
    GrayText,
    DarkText,
    Container,
    Row,
    Column,
    AvatarInput,
    ImageIcon,
    LogoText,
} from './styles'

export default function AddStoreScreen({ navigation }) {
    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />
            <Container>
                <GrayText>Add</GrayText>
                <DarkText>New Store</DarkText>
                <TextField placeholder="Store Link" />
                <Row>
                    <Column>
                        <AvatarInput onPress={() => {}}>
                            <ImageIcon size={40} name="image-plus" />
                            <LogoText>Logo</LogoText>
                        </AvatarInput>
                    </Column>
                    <Column>
                        <TextField placeholder="Instagram" />
                        <TextField placeholder="Whatsapp" />
                    </Column>
                </Row>
                <TextField placeholder="Store Number" />
                <TextField placeholder="Owner Number" />
                <TextField placeholder="Contact Email" />
                <PrimaryButton title="Send Request" />
            </Container>
        </Wrapper>
    )
}

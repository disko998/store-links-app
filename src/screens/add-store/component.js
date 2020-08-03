import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'

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
    styles,
} from './styles'
import { Colors } from '../../styles'

const data = [
    {
        label: 'I Like this Store',
    },
    {
        label: "I'm Store owner",
    },
]

export default function AddStoreScreen({ navigation }) {
    const [isOwner, setIsOwner] = React.useState(false)

    const onSelectChange = e => setIsOwner(e.label === data[1].label)

    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />
            <Container>
                <GrayText>Add</GrayText>
                <DarkText>New Store</DarkText>
                <TextField placeholder="Store Link" />
                <RadioButtonRN
                    initial={1}
                    box={false}
                    activeColor={Colors.orange}
                    data={data}
                    selectedBtn={onSelectChange}
                    boxStyle={styles.radioBox}
                    textStyle={styles.radioLabel}
                    animationTypes={['shake']}
                />
                {isOwner && (
                    <Wrapper>
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
                    </Wrapper>
                )}
                <PrimaryButton title="Send Request" onPress={() => {}} />
            </Container>
        </Wrapper>
    )
}

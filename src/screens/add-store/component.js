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
    const [formData, setFormData] = React.useState({
        store_link: '',
        instagram: '',
        whatsApp: '',
        store_number: '',
        owner_number: '',
        email: '',
    })

    const onSelectChange = e => setIsOwner(e.label === data[1].label)

    console.log(formData)

    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />
            <Container>
                <GrayText>Add</GrayText>
                <DarkText>New Store</DarkText>
                <TextField
                    placeholder="Store Link"
                    onChangeText={value =>
                        setFormData(state => ({ ...state, store_link: value }))
                    }
                    value={formData.store_link}
                />
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
                                <TextField
                                    placeholder="Instagram"
                                    onChangeText={value =>
                                        setFormData(state => ({
                                            ...state,
                                            instagram: value,
                                        }))
                                    }
                                    value={formData.instagram}
                                />
                                <TextField
                                    placeholder="Whatsapp"
                                    onChangeText={value =>
                                        setFormData(state => ({
                                            ...state,
                                            whatsApp: value,
                                        }))
                                    }
                                    value={formData.whatsApp}
                                />
                            </Column>
                        </Row>
                        <TextField
                            placeholder="Store Phone Number"
                            onChangeText={value =>
                                setFormData(state => ({
                                    ...state,
                                    store_number: value,
                                }))
                            }
                            value={formData.store_number}
                        />
                        <TextField
                            placeholder="Owner Phone Number"
                            onChangeText={value =>
                                setFormData(state => ({
                                    ...state,
                                    owner_number: value,
                                }))
                            }
                            value={formData.owner_number}
                        />
                        <TextField
                            placeholder="Contact Email"
                            onChangeText={value =>
                                setFormData(state => ({
                                    ...state,
                                    email: value,
                                }))
                            }
                            value={formData.email}
                        />
                    </Wrapper>
                )}
                <PrimaryButton title="Send Request" onPress={() => {}} />
            </Container>
        </Wrapper>
    )
}

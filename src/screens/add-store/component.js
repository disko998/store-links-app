import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import { Formik } from 'formik'

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
import {
    submitNewStoreAsync,
    AddStoreSchema,
    AddStoreOwnerSchema,
    INITIAL_FORM_VALUE,
} from '../../redux/stores'
import { useDispatch } from 'react-redux'
import { pickImage } from '../../utils/helper'

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
    const dispatch = useDispatch()

    const onSelectChange = e => setIsOwner(e.label === data[1].label)

    const onSubmit = React.useCallback(
        (values, { resetForm }) => {
            dispatch(submitNewStoreAsync({ ...values, isOwner }))
            resetForm()
        },
        [dispatch, isOwner],
    )

    const onImagePicker = React.useCallback(handleChange => {
        const uri = pickImage()

        if (uri) {
            const logoStateHandler = handleChange('logo')
            console.log(logoStateHandler)
            logoStateHandler(uri)
        }
    }, [])

    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />
            <Formik
                initialValues={INITIAL_FORM_VALUE}
                validationSchema={
                    isOwner ? AddStoreOwnerSchema : AddStoreSchema
                }
                onSubmit={onSubmit}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                }) => (
                    <Container>
                        <GrayText>Add</GrayText>
                        <DarkText>New Store</DarkText>
                        <TextField
                            placeholder="Store Link"
                            onChangeText={handleChange('store_link')}
                            onBlur={handleBlur('store_link')}
                            error={errors.store_link}
                            value={values.store_link}
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
                                        <AvatarInput
                                            onPress={() =>
                                                onImagePicker(handleChange)
                                            }>
                                            <ImageIcon
                                                size={40}
                                                name="image-plus"
                                            />
                                            <LogoText>Logo</LogoText>
                                        </AvatarInput>
                                    </Column>
                                    <Column>
                                        <TextField
                                            placeholder="Instagram"
                                            onChangeText={handleChange(
                                                'instagram',
                                            )}
                                            onBlur={handleBlur('instagram')}
                                            value={values.instagram}
                                            error={errors.instagram}
                                        />
                                        <TextField
                                            placeholder="Whatsapp"
                                            onChangeText={handleChange(
                                                'whatsApp',
                                            )}
                                            onBlur={handleBlur('whatsApp')}
                                            value={values.whatsApp}
                                            error={errors.whatsApp}
                                        />
                                    </Column>
                                </Row>
                                <TextField
                                    placeholder="Store Phone Number"
                                    onChangeText={handleChange('store_number')}
                                    onBlur={handleBlur('store_number')}
                                    value={values.store_number}
                                    error={errors.store_number}
                                />
                                <TextField
                                    placeholder="Owner Phone Number"
                                    onChangeText={handleChange('owner_number')}
                                    onBlur={handleBlur('owner_number')}
                                    value={values.owner_number}
                                    error={errors.owner_number}
                                />
                                <TextField
                                    placeholder="Contact Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={errors.email}
                                />
                            </Wrapper>
                        )}
                        <PrimaryButton
                            title="Send Request"
                            onPress={handleSubmit}
                        />
                    </Container>
                )}
            </Formik>
        </Wrapper>
    )
}

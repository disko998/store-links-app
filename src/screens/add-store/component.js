import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { pickImage } from '../../utils/helper'
import { Colors } from '../../styles'
import {
    submitNewStoreAsync,
    AddStoreSchema,
    AddStoreOwnerSchema,
    INITIAL_FORM_VALUE,
    toggleModal,
} from '../../redux/stores'
import {
    PrimaryButton,
    Header,
    TextField,
    MessageModal,
} from '../../components'
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
    LogoImage,
    styles,
} from './styles'

const data = [
    {
        label: 'I Like this Store',
    },
    {
        label: "I'm Store owner",
    },
]

export default function AddStoreScreen({ navigation }) {
    const dispatch = useDispatch()
    const submitted = useSelector(state => state.store.submitted)
    const [isOwner, setIsOwner] = React.useState(false)
    const [logo, setLogo] = React.useState({})

    const onSelectChange = e => setIsOwner(e.label === data[1].label)

    const onSubmit = React.useCallback(
        (values, { resetForm }) => {
            dispatch(submitNewStoreAsync({ ...values, isOwner, logo }))
            resetForm()
            setLogo({})
        },
        [dispatch, isOwner, logo],
    )

    const onImagePicker = React.useCallback(handleChange => {
        pickImage(result => {
            handleChange('logo')(result.uri)
            setLogo(result)
        })
    }, [])

    const onModalClose = React.useCallback(() => {
        dispatch(toggleModal())
        navigation.goBack()
    }, [navigation, dispatch])

    return (
        <Wrapper>
            <Header onBack={navigation.goBack} />

            <Formik
                validateOnBlur={false}
                validateOnChange={false}
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
                                            {values.logo ? (
                                                <LogoImage
                                                    source={{
                                                        uri: values.logo,
                                                    }}
                                                />
                                            ) : (
                                                <ImageIcon
                                                    size={40}
                                                    name="image-plus"
                                                />
                                            )}
                                        </AvatarInput>
                                        <LogoText error={errors.logo}>
                                            {logo.fileName || 'Logo'}
                                        </LogoText>
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
                                            keyboardType="phone-pad"
                                        />
                                    </Column>
                                </Row>
                                <TextField
                                    placeholder="Store Phone Number"
                                    onChangeText={handleChange('store_number')}
                                    onBlur={handleBlur('store_number')}
                                    value={values.store_number}
                                    error={errors.store_number}
                                    keyboardType="phone-pad"
                                />
                                <TextField
                                    placeholder="Owner Phone Number"
                                    onChangeText={handleChange('owner_number')}
                                    onBlur={handleBlur('owner_number')}
                                    value={values.owner_number}
                                    error={errors.owner_number}
                                    keyboardType="phone-pad"
                                />
                                <TextField
                                    placeholder="Contact Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={errors.email}
                                    keyboardType="email-address"
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

            <MessageModal
                onDismiss={onModalClose}
                visible={submitted}
                title="Thanks"
                message="We will add the new store asap"
            />
        </Wrapper>
    )
}

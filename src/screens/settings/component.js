import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ModalSelectList } from 'react-native-modal-select-list'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { openWhatsApp } from '../../utils/helper'
import { StyledItem, styles, DrawerHeader, AppName, Dot } from './styles'
import { HeaderButton, BackIcon } from '../../components/Header/styles'
import routes from '../../navigation/routes'
import { Colors, CONTACT_NUMBER } from '../../styles'
import {
    selectCountries,
    selectCurrentCountry,
    setCountryAsync,
    storeLanguageAsync,
} from '../../redux/settings'

export default function SettingsScreen(props) {
    const dispatch = useDispatch()
    const countries = useSelector(selectCountries)
    const country = useSelector(selectCurrentCountry)
    const { t, i18n } = useTranslation()

    // country modal ref
    let modalRef
    const openModal = () => modalRef.show()
    const hideModal = () => modalRef.dismiss()
    const saveModalRef = ref => (modalRef = ref)
    const onSelectedOption = value => {
        dispatch(setCountryAsync(value))
    }

    // language modal ref
    let langModalRef
    const openLangModal = () => langModalRef.show()
    const hideLangModal = () => langModalRef.dismiss()
    const saveLangModalRef = ref => (langModalRef = ref)
    const onSelectedLanguage = lang => {
        i18n.changeLanguage(lang)
        dispatch(storeLanguageAsync(lang))
    }

    // callbacks
    const goToAddStore = React.useCallback(
        () => props.navigation.navigate(routes.ADD_POPUP),
        [props.navigation],
    )
    const onContact = React.useCallback(() => openWhatsApp(CONTACT_NUMBER), [])
    const options = React.useMemo(
        () =>
            countries && countries.map(c => ({ value: c.name, label: c.name })),
        [countries],
    )

    return (
        <>
            <DrawerContentScrollView {...props}>
                <DrawerHeader>
                    <AppName>
                        {t('appName')} <Dot>.</Dot>
                    </AppName>
                </DrawerHeader>
                <StyledItem
                    icon={({ focused, color, size }) => (
                        <Icon
                            color={Colors.white}
                            size={size}
                            name="translate"
                        />
                    )}
                    label={t('languages')}
                    labelStyle={styles.labelStyle}
                    onPress={openLangModal}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => (
                        <Icon color={Colors.white} size={size} name="flag" />
                    )}
                    label={country || t('country')}
                    labelStyle={styles.labelStyle}
                    onPress={openModal}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => (
                        <Icon
                            color={Colors.white}
                            size={size}
                            name="storefront-outline"
                        />
                    )}
                    label={t('add_store')}
                    labelStyle={styles.labelStyle}
                    onPress={goToAddStore}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => (
                        <Icon
                            color={Colors.white}
                            size={size}
                            name="whatsapp"
                        />
                    )}
                    label={t('contact_us')}
                    labelStyle={styles.labelStyle}
                    onPress={onContact}
                />
            </DrawerContentScrollView>
            <ModalSelectList
                ref={saveModalRef}
                placeholder={`${t('search')} ${t('country')}...`}
                closeButtonComponent={
                    <HeaderButton onPress={hideModal}>
                        <BackIcon size={20} name="arrowdown" />
                    </HeaderButton>
                }
                options={options}
                onSelectedOption={onSelectedOption}
            />
            <ModalSelectList
                ref={saveLangModalRef}
                placeholder={`${t('search')} ${t('languages')}...`}
                closeButtonComponent={
                    <HeaderButton onPress={hideLangModal}>
                        <BackIcon size={20} name="arrowdown" />
                    </HeaderButton>
                }
                options={[
                    { label: 'English', value: 'en' },
                    { label: 'Arabic', value: 'ar' },
                ]}
                onSelectedOption={onSelectedLanguage}
            />
        </>
    )
}

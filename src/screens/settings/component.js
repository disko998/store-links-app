import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Picker } from '@react-native-community/picker'
import { ModalSelectList } from 'react-native-modal-select-list'

import {
    selectCountries,
    selectCurrentCountry,
    setCountryAsync,
} from '../../redux/settings'
import { StyledItem, styles, DrawerHeader, AppName, Dot } from './styles'
import { Colors, CONTACT_NUMBER } from '../../styles'
import { openWhatsApp } from '../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'

export default function SettingsScreen(props) {
    const dispatch = useDispatch()
    const countries = useSelector(selectCountries)
    const country = useSelector(selectCurrentCountry)

    const onContact = React.useCallback(() => openWhatsApp(CONTACT_NUMBER), [])

    let modalRef
    const openModal = () => modalRef.show()
    const saveModalRef = ref => (modalRef = ref)
    const onSelectedOption = value => {
        console.log(`You selected: ${value}`)
        dispatch(setCountryAsync(value))
    }

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
                        Linkat <Dot>.</Dot>
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
                    label="Languages"
                    labelStyle={styles.labelStyle}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => (
                        <Icon color={Colors.white} size={size} name="flag" />
                    )}
                    label={country || 'Country'}
                    labelStyle={styles.labelStyle}
                    onPress={openModal}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => (
                        <Icon
                            color={Colors.white}
                            size={size}
                            name="whatsapp"
                        />
                    )}
                    label="Contact us"
                    labelStyle={styles.labelStyle}
                    onPress={onContact}
                />
            </DrawerContentScrollView>
            <ModalSelectList
                ref={saveModalRef}
                placeholder={'Search country...'}
                closeButtonText={'Close'}
                options={options}
                onSelectedOption={onSelectedOption}
                disableTextSearch={false}
                numberOfLines={3}
            />
        </>
    )
}

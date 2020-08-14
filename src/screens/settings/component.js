import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { StyledItem, styles, DrawerHeader, AppName, Dot } from './styles'
import { Colors, CONTACT_NUMBER } from '../../styles'
import { openWhatsApp } from '../../utils/helper'

export default function SettingsScreen(props) {
    const onContact = React.useCallback(() => openWhatsApp(CONTACT_NUMBER), [])
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader>
                <AppName>
                    Linkat <Dot>.</Dot>
                </AppName>
            </DrawerHeader>
            <StyledItem
                icon={({ focused, color, size }) => (
                    <Icon color={Colors.white} size={size} name="translate" />
                )}
                label="Languages"
                labelStyle={styles.labelStyle}
            />
            <DrawerItem
                icon={({ focused, color, size }) => (
                    <Icon color={Colors.white} size={size} name="flag" />
                )}
                label="Kuwait"
                labelStyle={styles.labelStyle}
            />
            <DrawerItem
                icon={({ focused, color, size }) => (
                    <Icon color={Colors.white} size={size} name="whatsapp" />
                )}
                label="Contact us"
                labelStyle={styles.labelStyle}
                onPress={onContact}
            />
        </DrawerContentScrollView>
    )
}

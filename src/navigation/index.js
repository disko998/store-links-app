import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNav from './MainNav'
import DrawerNav from './DrawerNav'

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    )
}

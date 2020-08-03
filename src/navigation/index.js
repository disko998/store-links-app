import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNav from './DrawerNav'

export default function RootNavigation(props) {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    )
}

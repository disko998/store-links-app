import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNav from './MainNav'

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <MainNav />
        </NavigationContainer>
    )
}

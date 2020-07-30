import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../screens'
import routes from './routes'

const Stack = createStackNavigator()

export default function MainNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.MAIN} component={MainScreen} />
        </Stack.Navigator>
    )
}

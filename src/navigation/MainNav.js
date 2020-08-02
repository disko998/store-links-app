import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen, StoreScreen, AddStoreScreen } from '../screens'
import routes from './routes'

const Stack = createStackNavigator()

export default function MainNav() {
    return (
        <Stack.Navigator initialRouteName={routes.MAIN} headerMode="none">
            <Stack.Screen name={routes.MAIN} component={MainScreen} />
            <Stack.Screen name={routes.STORE} component={StoreScreen} />
            <Stack.Screen name={routes.ADD_STORE} component={AddStoreScreen} />
        </Stack.Navigator>
    )
}

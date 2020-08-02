import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import routes from './routes'
import MainNav from './MainNav'

const Drawer = createDrawerNavigator()

export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName={routes.MAIN}>
            <Drawer.Screen name={routes.MAIN} component={MainNav} />
        </Drawer.Navigator>
    )
}

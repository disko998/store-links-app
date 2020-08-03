import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { styles } from '../screens/settings/styles'
import routes from './routes'
import MainNav from './MainNav'
import { SettingsScreen } from '../screens'
import { Colors } from '../styles'

const Drawer = createDrawerNavigator()

export default function DrawerNav(prop) {
    console.log(prop)
    return (
        <Drawer.Navigator
            initialRouteName={routes.MAIN}
            drawerContent={props => <SettingsScreen {...props} />}
            drawerType="back"
            overlayColor="rgba(51, 102, 255, 0.1)"
            // sceneContainerStyle={{
            //     paddingVertical: 50,
            //     marginLeft: -20,
            //     backgroundColor: Colors.mainBlue,
            // }}
            drawerStyle={styles.drawerStyle}>
            <Drawer.Screen name={routes.MAIN} component={MainNav} />
        </Drawer.Navigator>
    )
}

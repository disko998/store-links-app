import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { styles } from '../screens/settings/styles'
import routes from './routes'
import MainNav from './MainNav'
import { SettingsScreen } from '../screens'

const Drawer = createDrawerNavigator()
export const DrawerContext = React.createContext()

export default function DrawerNav() {
    const [isOpen, setIsOpen] = React.useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <DrawerContext.Provider value={{ onOpen, onClose }}>
            <Drawer.Navigator
                initialRouteName={routes.MAIN}
                drawerContent={props => <SettingsScreen {...props} />}
                drawerType="back"
                overlayColor="rgba(51, 102, 255, 0.1)"
                sceneContainerStyle={isOpen ? styles.sceneStyle : null}
                drawerStyle={styles.drawerStyle}>
                <Drawer.Screen name={routes.MAIN} component={MainNav} />
            </Drawer.Navigator>
        </DrawerContext.Provider>
    )
}

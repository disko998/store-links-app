import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack'

import {
    MainScreen,
    StoreScreen,
    AddStoreScreen,
    StoryScreen,
    StoreWebView,
    StoreLocation,
} from '../screens'
import routes from './routes'
import { DrawerContext } from './DrawerNav'
import { Platform, StatusBar } from 'react-native'
import { Colors, windowHeight } from '../styles'

const Stack = createStackNavigator()

export default function MainNav({ navigation }) {
    const context = React.useContext(DrawerContext)
    const [barStyle, setBarStyle] = React.useState('dark-content')

    React.useEffect(() => {
        const unsubscribeOpen = navigation.addListener('drawerOpen', e => {
            context.onOpen()
            setBarStyle('light-content')
        })

        const unsubscribeClose = navigation.addListener('drawerClose', e => {
            context.onClose()
            setBarStyle('dark-content')
        })

        return () => {
            unsubscribeOpen()
            unsubscribeClose()
        }
    }, [context, navigation, barStyle])
    return (
        <>
            <StatusBar
                showHideTransition="slide"
                backgroundColor={
                    barStyle === 'light-content'
                        ? Colors.mainBlue
                        : Colors.white
                }
                animated={true}
                barStyle={barStyle}
            />
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    gestureResponseDistance: {
                        vertical: windowHeight,
                    },
                    cardOverlayEnabled: false,
                    cardStyle: {
                        borderRadius: barStyle === 'light-content' ? 10 : 0,
                    },
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }}
                initialRouteName={routes.MAIN}
                headerMode="none">
                <Stack.Screen name={routes.MAIN} component={MainScreen} />
                <Stack.Screen name={routes.STORE} component={StoreScreen} />

                <Stack.Screen
                    name={routes.ADD_STORE}
                    component={AddStoreScreen}
                />
                <Stack.Screen name={routes.STORY} component={StoryScreen} />
                <Stack.Screen
                    name={routes.STORE_VIEW}
                    component={StoreWebView}
                />
                <Stack.Screen
                    name={routes.STORE_LOCATION}
                    component={StoreLocation}
                />
            </Stack.Navigator>
        </>
    )
}

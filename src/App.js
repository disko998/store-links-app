import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import RootNavigation from './navigation'
import { Colors } from './styles/colors'
import store from './redux'

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            <Provider store={store}>
                <RootNavigation />
            </Provider>
        </>
    )
}

const styles = StyleSheet.create({
    app: { flex: 1, backgroundColor: Colors.white },
})

export default App

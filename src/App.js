import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import RootNavigation from './navigation'
import { Colors } from './styles/colors'
import AppProvider from './context/AppContext'

const App = () => {
    return (
        <AppProvider>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <SafeAreaView style={styles.app}>
                <RootNavigation />
            </SafeAreaView>
        </AppProvider>
    )
}

const styles = StyleSheet.create({
    app: { flex: 1, backgroundColor: Colors.white },
})

export default App

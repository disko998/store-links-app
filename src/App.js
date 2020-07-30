import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import RootNavigation from './navigation'

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <RootNavigation />
            </SafeAreaView>
        </>
    )
}

export default App

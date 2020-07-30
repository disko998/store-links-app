import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import RootNavigation from './navigation'

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <RootNavigation />
            </SafeAreaView>
        </>
    )
}

export default App

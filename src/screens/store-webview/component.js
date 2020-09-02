import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

import { Header } from '../../components'
import { Colors } from '../../styles'
import { styles, LoadingView } from './styles'

export default function StoreWebView({ navigation, route }) {
    const { uri } = route.params

    return (
        <View>
            <Header onBack={navigation.goBack} bg={Colors.white} />
            <WebView
                source={{ uri }}
                containerStyle={styles.webView}
                startInLoadingState={true}
                renderLoading={() => (
                    <LoadingView>
                        <ActivityIndicator size="large" color={Colors.orange} />
                    </LoadingView>
                )}
            />
        </View>
    )
}

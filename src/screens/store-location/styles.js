import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

export const styles = StyleSheet.create({
    webView: {
        flex: 0,
        height: '100%',
        width: '100%',
    },
})

export const LoadingView = styled.View`
    width: 100%
    height: 100%
    justify-content: center
    align-items: center
`

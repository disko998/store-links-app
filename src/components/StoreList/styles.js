import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import { Colors, font } from '../../styles'

export const styles = StyleSheet.create({
    listColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
})

export const StoresList = styled.FlatList`
    flex: 1;
    margin-top: 5px;
`

export const EmptyWrapper = styled.View`
    width: 100%;
    align-items: center
    justify-content: center
    text-align: center
    padding: 50px 0
`

export const EmptyText = styled.Text`
    font-family: ${font.bold}
    color: ${Colors.black}
    font-size: 20px
`

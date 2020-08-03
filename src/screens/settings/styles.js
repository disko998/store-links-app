import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'

import { Colors } from '../../styles/colors'
import { windowWidth } from '../../styles/dimensions'

export const styles = StyleSheet.create({
    labelStyle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: -20,
    },
    drawerStyle: {
        backgroundColor: Colors.mainBlue,
        // width: windowWidth,
        padding: 20,
    },
})

export const StyledItem = styled(DrawerItem)``

export const DrawerHeader = styled.View`
    flex: 1
    padding: 30px
`
export const AppName = styled.Text`
    fontSize: 43px
    font-weight: bold
    color: ${Colors.white}
    text-align: center
`

export const Dot = styled(AppName)`
    color: ${Colors.orange};
`

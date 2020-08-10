import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'

import { Colors, font } from '../../styles'
import { windowWidth } from '../../styles/dimensions'

export const styles = StyleSheet.create({
    labelStyle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: font.regular,
        marginLeft: -20,
    },
    drawerStyle: {
        backgroundColor: Colors.mainBlue,
        // width: windowWidth,
        padding: 20,
    },
    sceneStyle: {
        paddingVertical: 50,
        marginLeft: -20,
        backgroundColor: Colors.mainBlue,
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
    font-family: SFProDisplay-Regular
    color: ${Colors.white}
    text-align: center
`

export const Dot = styled(AppName)`
    color: ${Colors.orange};
`

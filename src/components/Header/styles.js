import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Colors, font } from '../../styles'
import { windowWidth } from '../../styles/dimensions'

export const HeaderWrapper = styled.View`
    width: ${windowWidth}px
    min-height: 60px
    flex-direction: row
    justify-content: space-between
    align-items: center
    padding-top: ${getStatusBarHeight()}px
    padding-left: 15px 
    padding-right: 15px
    padding-bottom: 5px 
    background: ${props => (props.bg ? props.bg : 'transparent')}

    ${props =>
        props.absolute &&
        `position: absolute;
        top: 0`}
   
`

export const HeaderButton = styled.TouchableOpacity`
    border-radius: 13px
    width: 40px
    height: 40px
    padding: 5px
    border: 1px solid ${Colors.white}
    justify-content: center
    align-items: center
    background: ${Colors.mainBlue}
`

export const Title = styled.Text`
    text-align: center;
    align-self: center;
    color: ${Colors.white}
    font-size: 18px
    font-family: ${font.regular}
`

export const BookmarkIcon = styled(Foundation)``

export const BackIcon = styled(AntDesign)`
    color: ${Colors.white};
`

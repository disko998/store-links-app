import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors, font } from '../../styles'

export const styles = StyleSheet.create({})

export const Gradient = styled(LinearGradient)`
    flex: 1
    width: 100%
    justify-content: center
    align-items: center
`

export const Card = styled.View`
    min-height: 60%
    width: 90%
    border-radius: 47px
    padding: 30px 
    background: ${Colors.white}
    justify-content: center
    align-items: center
`

export const Illustration = styled.Image`
    height: 140px
    width: 130px
`

export const Title = styled.Text`
    font-size: 20px
    color: ${Colors.mainBlue}
    text-align: center
    font-family: ${font.bold}
    
    margin-top: 15px
`

export const BlackTitle = styled(Title)`
    font-size: 19px
    color: ${Colors.black} 
`

export const Divider = styled.View`
    height: 1.4px
    width: 100%
    background: ${Colors.lightGray}
`

export const SkipButton = styled.Text`
    font-size: 15px
    color: ${Colors.white}
    text-decoration: underline
    font-family: ${font.bold}
    textDecorationColor: ${Colors.white}

    position: absolute
    bottom: 50px

`

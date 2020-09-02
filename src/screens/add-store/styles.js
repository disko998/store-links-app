import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors, font } from '../../styles'

export const styles = StyleSheet.create({
    radioBox: { marginVertical: 10 },
    radioLabel: {
        fontSize: 20,
        color: Colors.black,
        fontFamily: font.bold,
    },
})

export const Wrapper = styled.ScrollView`
    flex: 1
    background: ${Colors.white}
`

export const Container = styled.ScrollView`
    padding: 30px;
`

export const GrayText = styled.Text`
    color: ${Colors.gray}
    font-size: 20px
    text-align: left
    font-family: ${font.bold}
`

export const LogoText = styled.Text`
    color: ${props => (props.error ? Colors.error : Colors.black)}
    font-size: 14px
    text-align: center
    font-family: ${font.bold}
`

export const DarkText = styled(GrayText)`
    color: ${Colors.black}
    font-size: 24px
`

export const StoreAvatar = styled.Image`
    height: 100%
    width: 100%
    border-radius: 50px
`

export const ImageIcon = styled(Icon)`
    color: ${Colors.darkGray};
`

export const AvatarInput = styled.TouchableOpacity`
    width: 100px
    height: 100px
    background: ${Colors.light}
    border: 2px solid ${Colors.lightGray}
    border-radius: 50px

    justify-content: center
    align-items: center
`
export const LogoImage = styled.Image`
    width: 100%
    height: 100%
    border-radius: 50px
`

export const Row = styled.View`
    flex: 1
    flex-direction: row;
`

export const Column = styled.View`
    flex: 1
    flex-direction: column
    justify-content: center
    align-items: center
`

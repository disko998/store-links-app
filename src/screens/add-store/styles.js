import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../../styles/colors'

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
    font-weight: bold
`

export const LogoText = styled.Text`
    color: ${Colors.black}
    font-size: 14px
    text-align: center
    font-weight: bold
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
    padding: 10px

    justify-content: center
    align-items: center
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

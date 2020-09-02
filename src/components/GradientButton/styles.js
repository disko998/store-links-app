import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors, font } from '../../styles'

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 50px
    overflow: hidden
    width: 100%
    height: 45px

    margin-vertical: 20px
`

export const Title = styled.Text`
    color: ${props => (props.disabled ? Colors.gray : Colors.white)}
    font-size: 16px;
    text-align: center;
    font-family: ${font.bold}
`

export const Gradient = styled(LinearGradient)`
    flex: 1
    width: 100%
    justify-content: center
    align-items: center
    padding: 15px
`

export const Shadow = styled.View`
    position: absolute
    background: ${Colors.lightGray}
    top: 0
    bottom: -20px
    right: 20px
    left: 20px
    height: 50px
`

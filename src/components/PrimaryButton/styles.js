import styled from 'styled-components/native'

import { Colors, font } from '../../styles'

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 50px
    overflow: hidden
    width: 100%
    height: 60px
    background: ${props => (props.disabled ? Colors.lightGray : Colors.orange)}
    padding: 15px
    justify-content: center
    align-items: center
    
    margin-vertical: 20px
`

export const Title = styled.Text`
    color: ${props => (props.disabled ? Colors.gray : Colors.white)}
    font-size: 24px;
    text-align: center;
    font-family: ${font.bold}
`

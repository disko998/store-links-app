import styled from 'styled-components/native'

import { Colors, font } from '../../styles'

export const InputWrapper = styled.ScrollView`
    width: 100%
    background: ${Colors.white}
    border: 1.5px solid ${Colors.lightGray}
    border-radius: 5px
    overflow: visible
    
    margin-vertical: 10px
`

export const StyledTextInput = styled.TextInput`
    flex: 1
    height: 50px
    color: ${Colors.orange}
    font-size: 16px
    font-weight: bold
    font-family: SFProDisplay-Regular
    background: ${Colors.white}
    padding: 10px
`

export const ErrorMessage = styled.Text`
    color: ${Colors.error}
    font-size: 16px
    font-family: ${font.regular}
    margin-top: 10px
    margin-bottom: -5px
    text-align: left
`

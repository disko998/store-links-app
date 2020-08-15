import styled from 'styled-components/native'

import { Colors, font } from '../../styles'

export const Overlay = styled.TouchableOpacity`
    flex: 1
    backgroundColor: rgba(255,255,255,.9)
    padding: 20px

    justify-content: center
    align-items: center
`

export const Title = styled.Text`
    font-family: ${font.bold};
    color: ${Colors.black}
    font-size: 39px
    text-align: center
`

export const Message = styled(Title)`
    color: ${Colors.darkGray}
    font-size: 24px

    margin-top: 15px
`

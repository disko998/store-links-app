import styled from 'styled-components/native'

import { Colors, font } from '../../styles'

export const MapWrapper = styled.View`
    width: 100%
    height: 100%
    justify-content: center
    align-items: center
`

export const InfoText = styled.Text`
    font-family: ${font.bold}
    font-size: 30px
    text-align: center
`

export const CustomMarkerView = styled.ImageBackground`
    height: 30px
    width: 30px
    overflow: hidden
    border-radius: 50px
`

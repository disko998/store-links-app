import styled from 'styled-components/native'

import { Colors, font } from '../../styles'
import { windowWidth, windowHeight } from '../../styles/dimensions'

export const StoryWrapper = styled.ImageBackground`
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`

export const ContentWrapper = styled.TouchableOpacity`
    flex: 1
    background: rgba(0,0,0,.1)
    flex-direction: column
    justify-content: space-between
    padding: 20px
    height: ${windowHeight}px
`

export const StoryName = styled.Text`
    color: ${Colors.white};
    font-family: ${font.regular};
    font-size: 15px;
`

export const InfoWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Avatar = styled.Image`
    border-radius: 50px
    height: 40px
    width: 40px
    margin-right: 10px
`

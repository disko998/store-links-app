import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Colors, font } from '../../styles'
import { windowWidth, windowHeight } from '../../styles/dimensions'

export const StoryWrapper = styled.ImageBackground`
    height: 100%;
    width: ${windowWidth}px;
    overflow: hidden;
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
    justify-content: flex-start
    width: 100%;
`

export const Avatar = styled.Image`
    border-radius: 50px
    height: 40px
    width: 40px
    margin-right: 10px
`

export const HeaderWrapper = styled.View`
    flex-direction: column;
`

export const PageIndicatorsWrapper = styled.View`
    flex-direction: row;
    width: 100%;
`

export const PageIndicator = styled.View`
    flex: 1
    border-radius: 5px
    height: 5px
    margin: 5px 3px 20px 3px
    background: ${props => (props.active ? Colors.white : Colors.darkGray)}
`

export const CloseButton = styled.TouchableOpacity`
    align-self: flex-end;
    margin-left: auto;
    margin-bottom: 5px;
`

export const CloseIcon = styled(Icon)`
    color: ${Colors.white};
`

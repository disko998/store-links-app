import styled from 'styled-components/native'

import {
    Colors,
    windowWidth,
    font,
    STORE_BUTTON_HEIGHT,
    STORE_BUTTON_WIDTH,
} from '../../styles'

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 16px
    border: 1px solid ${Colors.lightGray}
    overflow: visible
    width: ${windowWidth * 0.4}px
    maxWidth: ${STORE_BUTTON_WIDTH}px
    height: ${STORE_BUTTON_HEIGHT}px
    background: ${Colors.white}
    margin: 10px
`

export const StoreImage = styled.ImageBackground`
    width: 100%
    height: 100%
    border-radius: 16px
    flex-direction: column
    justify-content: flex-end
    align-items: center
    overflow: hidden
`

export const InfoWrapper = styled.View`
    width:100%
    flex-direction: row
    justify-content: flex-start
    align-items: center
    padding: 5px
`

export const Overlay = styled.View`
    flex: 1
    width:100%
    background: rgba(0,0,0,.2)
    flex-direction: column
    justify-content: flex-end
    align-items: center
`

export const StoreLogo = styled.Image`
    width: 45px
    height: 45px
    border-radius: 50px
    border-width: 1px
    border-color: ${Colors.white}
    margin-right: 10px
`

export const StoreName = styled.Text`
    font-family: ${font.regular}
    font-size: 16px
    color: ${Colors.white}
`

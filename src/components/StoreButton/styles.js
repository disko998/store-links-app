import styled from 'styled-components/native'

import { Colors, windowWidth } from '../../styles'

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 16px
    border: 1px solid ${Colors.lightGray}
    overflow: visible
    width: ${windowWidth * 0.259}px
    height: ${windowWidth * 0.259}px
    background: ${Colors.white}

    margin: 10px 10px
`

export const StoreLogo = styled.Image`
    width: 100%
    height: 100%
    border-radius: 16px
`

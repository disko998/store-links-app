import styled from 'styled-components/native'

import { Colors } from '../../styles/colors'

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 16px
    border: 1px solid ${Colors.gray}
    overflow: visible
    width: 90px
    height: 90px
    background: ${Colors.white}

    margin: 10px 5px
`

export const StoreLogo = styled.Image`
    width: 100%
    height: 100%
    border-radius: 16px
`

import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { Colors } from '../../styles/colors'

export const MainWrapper = styled.View`
    flex: 1
    background: ${Colors.white}
    padding: 10px 15px
    padding-top: ${getStatusBarHeight()}px
`

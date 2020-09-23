import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Animated } from 'react-native'

import { Colors } from '../../styles/colors'

export const MainWrapper = styled.View`
    flex: 1
    background: ${Colors.white}
    padding-top: ${getStatusBarHeight()}px
`

export const AnimatedHeader = styled(Animated.View)`
    right: 0
    left: 0
    top: ${getStatusBarHeight()}px
    position: absolute
    overflow: hidden
    padding: 0 15px 5px 15px
`

export const ListWrapper = styled.View`
    padding-top: ${props => props.paddingTop}px;
    flex: 1;
`

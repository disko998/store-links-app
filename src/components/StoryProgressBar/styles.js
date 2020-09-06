import styled from 'styled-components/native'
import * as Progress from 'react-native-progress'

import { Colors } from '../../styles/colors'

export const PageIndicator = styled(Progress.Bar)`
    flex: 1
    border-radius: 5px
    height: 5px
    margin: 5px 3px 20px 3px
`
// background: ${props => (props.active ? Colors.white : Colors.darkGray)}

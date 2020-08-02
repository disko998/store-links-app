import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Colors } from '../../styles/colors'

export const BarWrapper = styled.View`
   flex-direction: row
   justify-content: center
   align-items: center
`

export const SearchInput = styled.TextInput`
    flex: 1
    height: 50px
    padding: 10px
    font-size: 24px
`

export const SettingsButton = styled.TouchableOpacity`
    margin-left: 5px;
`

export const SettingsIcon = styled(Icon)`
    color: ${Colors.gray};
`

export const SearchIcon = styled(Ionicons)`
    color: ${Colors.gray};
`
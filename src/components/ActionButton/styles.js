import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../../styles/colors'

export const Wrapper = styled.TouchableOpacity`
    flex-direction: column
    justify-content: center
    align-items: center
`

export const StyledTouchable = styled.TouchableOpacity`
    border-radius: 25px
    overflow: hidden
    width: 65px
    height: 65px
    background: ${Colors.lightGray}
    padding: 5px
    justify-content: center
    align-items: center
`

export const Logo = styled(MaterialCommunityIcons)`
    color: ${Colors.black};
`

export const Title = styled.Text`
    color: ${Colors.black};
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
`

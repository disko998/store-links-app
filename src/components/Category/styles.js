import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Colors } from '../../styles/colors'

export const CategoryButton = styled.TouchableOpacity`
    border-radius: 50px
    padding: 10px
    background: ${props =>
        props.isActive ? Colors.mainBlue : Colors.lightGray}
    justify-content: center
    align-items: center
    flex-direction: row
    max-width: 150px
    min-width: 100px
    overflow: hidden
`
export const CategoryIcon = styled(Icon)`
    color: ${props => (props.isActive ? Colors.white : Colors.darkBlue)};
    margin-right: 2px;
`

export const Title = styled.Text`
    color: ${props => (props.isActive ? Colors.white : Colors.darkBlue)};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`

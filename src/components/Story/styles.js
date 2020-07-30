import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Colors } from '../../styles/colors'

export const BorderButton = styled.TouchableOpacity`
    border: 2px ${props =>
        props.image ? `solid ${Colors.mainBlue}` : `dotted ${Colors.orange}`}
    border-radius: 50px
    height: 58px
    width: 58px
    padding: 5px
    background: ${Colors.white}
    justify-content: center
    align-items: center
`

export const StoryImage = styled.Image`
    border-radius: 50px
    height: 100%
    width: 100%
`

export const PlusIcon = styled(Icon)`
    color: ${Colors.orange};
`

export const AddText = styled.Text`
    color: ${Colors.orange};
    font-size: 15px;
    font-weight: bold;
`

export const StoryWrapper = styled.View`
    flex-direction: column
    justify-content: center
    align-items: center
`

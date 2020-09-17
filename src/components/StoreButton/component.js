import React from 'react'

import { StyledTouchable, StoreLogo } from './styles'
import { FavoriteMark, UniqueMark } from '../withMark'
import { useNavigation } from '@react-navigation/native'
import routes from '../../navigation/routes'

export default function StoreButton({
    onPress,
    favorite,
    unique,
    image,
    onLongPress,
}) {
    const navigation = useNavigation()

    const openUniquePopup = React.useCallback(() => {
        navigation.navigate(routes.UNIQUE)
    }, [navigation])

    return (
        <StyledTouchable onPress={onPress} onLongPress={onLongPress}>
            <FavoriteMark show={favorite}>
                <UniqueMark show={unique} onPress={openUniquePopup}>
                    <StoreLogo source={image} />
                </UniqueMark>
            </FavoriteMark>
        </StyledTouchable>
    )
}

import React from 'react'

import {
    StyledTouchable,
    StoreImage,
    InfoWrapper,
    StoreName,
    StoreLogo,
    Overlay,
} from './styles'
import { FavoriteMark, UniqueMark } from '../withMark'
import { useNavigation } from '@react-navigation/native'
import routes from '../../navigation/routes'

export default function StoreButton({
    onPress,
    favorite,
    unique,
    image,
    logo,
    storeName,
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
                    <StoreImage source={image}>
                        <Overlay>
                            <InfoWrapper>
                                <StoreLogo source={logo} />
                                <StoreName>{storeName}</StoreName>
                            </InfoWrapper>
                        </Overlay>
                    </StoreImage>
                </UniqueMark>
            </FavoriteMark>
        </StyledTouchable>
    )
}

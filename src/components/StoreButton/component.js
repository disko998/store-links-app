import React from 'react'
import { useNavigation } from '@react-navigation/native'
import DoubleClick from 'react-native-double-tap'

import { FavoriteMark, UniqueMark } from '../withMark'
import routes from '../../navigation/routes'
import {
    StyledTouchable,
    StoreImage,
    InfoWrapper,
    StoreName,
    StoreLogo,
    Overlay,
} from './styles'

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
        <StyledTouchable>
            <DoubleClick
                singleTap={onPress}
                doubleTap={onLongPress}
                delay={200}>
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
            </DoubleClick>
        </StyledTouchable>
    )
}

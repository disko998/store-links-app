import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { startStoryAsync, selectStoryIndex } from '../../redux/story'
import {
    StoryWrapper,
    ContentWrapper,
    StoryName,
    Avatar,
    InfoWrapper,
    HeaderWrapper,
    PageIndicatorsWrapper,
    PageIndicator,
    CloseButton,
    CloseIcon,
} from './styles'
import { PrimaryButton } from '../PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { redirectToWebsite } from '../../utils/helper'
import routes from '../../navigation/routes'

export default function StoryView({
    logo,
    name,
    order_link,
    page,
    images,
    currentPage,
}) {
    const dispatch = useDispatch()
    const index = useSelector(selectStoryIndex)
    const navigation = useNavigation()

    React.useEffect(() => {
        if (page === currentPage) {
            dispatch(startStoryAsync(images))
        }
    }, [dispatch, images, page, currentPage])

    const onOrderPress = React.useCallback(async () => {
        navigation.navigate(routes.STORE_VIEW, { uri: order_link })
    }, [order_link, navigation])

    return (
        <StoryWrapper source={{ uri: images[index] }}>
            <ContentWrapper disabled={true}>
                <HeaderWrapper>
                    <PageIndicatorsWrapper>
                        {images.map((image, i) => (
                            <PageIndicator key={image} active={index >= i} />
                        ))}
                    </PageIndicatorsWrapper>
                    <InfoWrapper>
                        <Avatar source={{ uri: logo }} />
                        <StoryName>{name}</StoryName>
                        <CloseButton onPress={navigation.goBack}>
                            <CloseIcon name="close" size={30} />
                        </CloseButton>
                    </InfoWrapper>
                </HeaderWrapper>

                <PrimaryButton
                    disabled={!Boolean(order_link)}
                    title={order_link ? 'Ordern Now' : 'No link for this store'}
                    onPress={onOrderPress}
                />
            </ContentWrapper>
        </StoryWrapper>
    )
}

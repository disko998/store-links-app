import React from 'react'

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
} from './styles'
import { PrimaryButton } from '../PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { redirectToWebsite } from '../../utils/helper'

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

    React.useEffect(() => {
        if (page === currentPage) {
            dispatch(startStoryAsync(images))
        }
    }, [dispatch, images, page, currentPage])

    const onOrderPress = React.useCallback(async () => {
        redirectToWebsite(order_link)
    }, [order_link])

    return (
        <StoryWrapper source={{ uri: images[index] }}>
            <ContentWrapper disabled={true}>
                <HeaderWrapper>
                    <PageIndicatorsWrapper>
                        {images.map((image, i) => (
                            <PageIndicator active={index >= i} />
                        ))}
                    </PageIndicatorsWrapper>
                    <InfoWrapper>
                        <Avatar source={{ uri: logo }} />
                        <StoryName>{name}</StoryName>
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

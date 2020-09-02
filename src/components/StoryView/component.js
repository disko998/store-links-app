import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()

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
                    disabled={!order_link}
                    title={order_link ? t('order_now') : t('no_store_link')}
                    onPress={onOrderPress}
                />
            </ContentWrapper>
        </StoryWrapper>
    )
}

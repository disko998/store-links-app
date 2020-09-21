import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import * as Progress from 'react-native-progress'

import {
    startStoryAsync,
    selectStoryIndex,
    selectTimer,
} from '../../redux/story'
import {
    StoryWrapper,
    ContentWrapper,
    StoryName,
    Avatar,
    InfoWrapper,
    HeaderWrapper,
    PageIndicatorsWrapper,
    CloseButton,
    CloseIcon,
} from './styles'
import { PrimaryButton } from '../PrimaryButton'
import { StoryProgressBar } from '../StoryProgressBar'
import routes from '../../navigation/routes'
import { fbAnalytics } from '../../firebase'
import { Colors } from '../../styles'
import { STORY_INTERVAL_TIME } from '../../redux/story/const'

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
    const timer = useSelector(selectTimer)
    const navigation = useNavigation()
    const { t } = useTranslation()

    React.useEffect(() => {
        if (page === currentPage) {
            dispatch(startStoryAsync(images))
        }
    }, [dispatch, images, page, currentPage])

    const onOrderPress = React.useCallback(async () => {
        fbAnalytics.logEvent('story_order_link', {
            order_link: order_link,
        })
        navigation.navigate(routes.STORE_VIEW, { uri: order_link })
    }, [order_link, navigation])

    return (
        <StoryWrapper source={{ uri: images[index] }}>
            <ContentWrapper disabled={true}>
                <HeaderWrapper>
                    <PageIndicatorsWrapper>
                        {images.map((image, i) => (
                            <StoryProgressBar
                                key={image}
                                currentIndex={index}
                                imageIndex={i}
                                timer={
                                    index === i
                                        ? timer
                                        : index > i
                                        ? STORY_INTERVAL_TIME
                                        : 0
                                }
                            />
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

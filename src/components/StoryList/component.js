import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { Story } from '../Story'
import { HorizontalScroll, StoryWrapper } from './styles'
import routes from '../../navigation/routes'
import { selectStores } from '../../redux/stores'

export default function StoryList() {
    // hooks
    const stories = useSelector(selectStores)
    const navigation = useNavigation()

    // handlers
    const onStoryPress = React.useCallback(
        storyIndex =>
            navigation.navigate(routes.STORY, JSON.stringify(storyIndex)),
        [navigation],
    )

    const onStoryAdd = React.useCallback(
        () => navigation.navigate(routes.ADD_POPUP),
        [navigation],
    )

    return (
        <HorizontalScroll>
            {stories.slice(1, 5).map((story, index) => (
                <StoryWrapper key={story.id}>
                    <Story
                        image={{ uri: story.logo }}
                        onPress={() => onStoryPress(index)}
                    />
                </StoryWrapper>
            ))}
            <StoryWrapper>
                <Story onPress={onStoryAdd} />
            </StoryWrapper>
        </HorizontalScroll>
    )
}

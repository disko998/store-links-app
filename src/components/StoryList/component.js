import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { Story } from '../Story'
import { HorizontalScroll, StoryWrapper } from './styles'
import routes from '../../navigation/routes'
import { selectStories } from '../../redux/story'
import { fbAnalytics } from '../../firebase/index'

export default function StoryList() {
    // hooks
    const stories = useSelector(selectStories)
    const navigation = useNavigation()

    // handlers
    const onStoryPress = React.useCallback(
        storyIndex => {
            fbAnalytics.logEvent('view_story', {
                story_index: storyIndex,
            })
            navigation.navigate(routes.STORY, JSON.stringify(storyIndex))
        },
        [navigation],
    )

    const onAddStore = React.useCallback(
        () => navigation.navigate(routes.ADD_POPUP),
        [navigation],
    )

    return (
        <HorizontalScroll>
            {stories.slice(0, 4).map((story, index) => (
                <StoryWrapper key={story.id}>
                    <Story
                        image={{ uri: story.logo }}
                        onPress={() => onStoryPress(index)}
                    />
                </StoryWrapper>
            ))}
            <StoryWrapper>
                <Story onPress={onAddStore} />
            </StoryWrapper>
        </HorizontalScroll>
    )
}

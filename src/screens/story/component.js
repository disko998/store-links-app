import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { HorizontalScroll } from './styles'
import { StoryView } from '../../components/StoryView'
import { stopStoryAsync, selectStories } from '../../redux/story'

export default function StoryScreen({ navigation, route }) {
    const stories = useSelector(selectStories)
    const dispatch = useDispatch()

    const storyIndex = JSON.parse(route.params)
    const [page, setPage] = React.useState(storyIndex)

    React.useEffect(() => {
        return () => {
            dispatch(stopStoryAsync())
        }
    }, [dispatch])

    const onPageSelected = e => {
        setPage(e.nativeEvent.position)
    }

    return (
        <HorizontalScroll
            initialPage={storyIndex}
            showPageIndicator={true}
            onPageSelected={onPageSelected}>
            {stories.map((story, index) => (
                <StoryView
                    key={index}
                    currentPage={page}
                    page={index}
                    images={story.images}
                    {...story}
                />
            ))}
        </HorizontalScroll>
    )
}

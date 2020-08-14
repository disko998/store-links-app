import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { HorizontalScroll } from './styles'
import { StoryView } from '../../components/StoryView'
import { selectStores } from '../../redux/stores'
import { stopStoryAsync } from '../../redux/story'

export default function StoryScreen({ navigation, route }) {
    // we need to pull stories here
    const stories = useSelector(selectStores)
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
            onPageSelected={onPageSelected}>
            {stories.slice(1, 5).map((story, index) => (
                <StoryView
                    key={index}
                    currentPage={page}
                    page={index}
                    images={[story.image, ...storyImages]}
                    {...story}
                />
            ))}
        </HorizontalScroll>
    )
}

const storyImages = [
    'https://trendmakers.com.pa/en/wp-content/uploads/sites/8/2016/10/01-2-900x600.jpg',
    'https://q-xx.bstatic.com/images/hotel/max1024x768/172/172892674.jpg',
]

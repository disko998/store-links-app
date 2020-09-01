import {
    startStoryTime,
    nextStory,
    resetStoryTime,
    fetchStoriesStart,
    fetchStoriesSuccess,
    fetchStoriesFailure,
} from './actions'
import { STORY_INTERVAL_TIME } from '../../styles'
import { getCollectionDocs } from '../../firebase/utils'

let interval = null
export const startStoryAsync = stories => {
    return async (dispatch, getState) => {
        dispatch(stopStoryAsync())
        dispatch(startStoryTime())

        interval = setInterval(() => {
            const { story } = getState()

            if (stories.length <= story.storyIndex + 1) {
                dispatch(resetStoryTime())
            } else {
                dispatch(nextStory())
            }
        }, 15000)
    }
}

export const stopStoryAsync = () => {
    return async (dispatch, getState) => {
        clearInterval(interval)
        dispatch(resetStoryTime())
    }
}

export const fetchStoriesAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStoriesStart())

            const stories = await getCollectionDocs('story')

            dispatch(fetchStoriesSuccess(stories))
        } catch (error) {
            dispatch(fetchStoriesFailure(error.message))
        }
    }
}

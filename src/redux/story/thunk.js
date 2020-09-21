import {
    startStoryTime,
    nextStory,
    resetStoryTime,
    fetchStoriesStart,
    fetchStoriesSuccess,
    fetchStoriesFailure,
    updateTimer,
} from './actions'
import { STORY_INTERVAL_TIME } from './const'
import { getCollectionDocs } from '../../firebase/utils'

const ms = 1000
let interval = null

export const startStoryAsync = stories => {
    return async (dispatch, getState) => {
        dispatch(stopStoryAsync())
        dispatch(startStoryTime())

        interval = setInterval(() => {
            dispatch(updateTimer(ms))
            const { story } = getState()

            if (story.timer >= STORY_INTERVAL_TIME) {
                stories.length <= story.storyIndex + 1
                    ? dispatch(resetStoryTime())
                    : dispatch(nextStory())
            }
        }, ms)
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

import { startStoryTime, nextStory, resetStoryTime } from './actions'
import { STORY_INTERVAL_TIME } from './const'

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
        }, STORY_INTERVAL_TIME)
    }
}

export const stopStoryAsync = () => {
    return async (dispatch, getState) => {
        clearInterval(interval)
        dispatch(resetStoryTime())
    }
}

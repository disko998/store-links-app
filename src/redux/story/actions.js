export const StoryActionType = {
    START_STORY_TIME: 'START_STORY_TIME',
    NEXT_STORY: 'NEXT_STORY',
    UPDATE_TIME: 'UPDATE_TIME',
    RESET_STORY_TIME: 'RESET_STORY_TIME',
    FETCH_STORIES_START: 'FETCH_STORIES_START',
    FETCH_STORIES_SUCCESS: 'FETCH_STORIES_SUCCESS',
    FETCH_STORIES_FAILURE: 'FETCH_STORIES_FAILURE',
}

export const startStoryTime = () => ({
    type: StoryActionType.START_STORY_TIME,
})

export const updateTimer = time => ({
    type: StoryActionType.UPDATE_TIME,
    payload: time,
})

export const nextStory = () => ({
    type: StoryActionType.NEXT_STORY,
})

export const resetStoryTime = () => ({
    type: StoryActionType.RESET_STORY_TIME,
})

export const fetchStoriesStart = () => ({
    type: StoryActionType.FETCH_STORIES_START,
})

export const fetchStoriesSuccess = stories => ({
    type: StoryActionType.FETCH_STORIES_SUCCESS,
    payload: stories,
})

export const fetchStoriesFailure = error => ({
    type: StoryActionType.FETCH_STORIES_FAILURE,
    payload: error,
})

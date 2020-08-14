export const StoryActionType = {
    START_STORY_TIME: 'START_STORY_TIME',
    NEXT_STORY: 'NEXT_STORY',
    RESET_STORY_TIME: 'RESET_STORY_TIME',
}

export const startStoryTime = () => ({
    type: StoryActionType.START_STORY_TIME,
})

export const nextStory = () => ({
    type: StoryActionType.NEXT_STORY,
})

export const resetStoryTime = () => ({
    type: StoryActionType.RESET_STORY_TIME,
})

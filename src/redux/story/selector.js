import { createSelector } from 'reselect'

export const selectStoryFeatures = state => state.story

export const selectStoryIndex = createSelector(
    selectStoryFeatures,
    story => story.storyIndex,
)

export const selectStories = createSelector(
    selectStoryFeatures,
    story => story.stories,
)

export const selectTimer = createSelector(
    selectStoryFeatures,
    story => story.timer,
)

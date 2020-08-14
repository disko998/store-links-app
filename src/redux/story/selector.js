import { createSelector } from 'reselect'

export const selectStoryFeatures = state => state.story

export const selectStoryIndex = createSelector(
    selectStoryFeatures,
    story => story.storyIndex,
)

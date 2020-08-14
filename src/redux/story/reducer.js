import produce from 'immer'

import { StoryActionType } from './actions'

const INITIAL_STATE = {
    storyIndex: 0,
}

export function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case StoryActionType.NEXT_STORY:
            return { ...state, storyIndex: ++state.storyIndex }
        case StoryActionType.RESET_STORY_TIME:
            return { ...state, storyIndex: 0 }
        default:
            return state
    }
}

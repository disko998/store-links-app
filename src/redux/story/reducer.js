import { StoryActionType } from './actions'

const INITIAL_STATE = {
    storyIndex: 0,
    stories: [],
    loading: false,
    error: '',
}

export function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case StoryActionType.NEXT_STORY:
            return { ...state, storyIndex: ++state.storyIndex }
        case StoryActionType.RESET_STORY_TIME:
            return { ...state, storyIndex: 0 }
        case StoryActionType.FETCH_STORIES_START:
            return { ...state, loading: true }
        case StoryActionType.FETCH_STORIES_SUCCESS:
            return { ...state, stories: action.payload, loading: false }
        case StoryActionType.FETCH_STORIES_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}

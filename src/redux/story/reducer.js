import { StoryActionType } from './actions'

const INITIAL_STATE = {
    timer: 0,
    storyIndex: 0,
    stories: [],
    loading: false,
    error: '',
}

export function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case StoryActionType.NEXT_STORY:
            return { ...state, storyIndex: ++state.storyIndex, timer: 0 }
        case StoryActionType.RESET_STORY_TIME:
            return { ...state, storyIndex: 0, timer: 0 }
        case StoryActionType.FETCH_STORIES_START:
            return { ...state, loading: true }
        case StoryActionType.FETCH_STORIES_SUCCESS:
            return { ...state, stories: action.payload, loading: false }
        case StoryActionType.FETCH_STORIES_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case StoryActionType.UPDATE_TIME:
            return { ...state, timer: state.timer + action.payload }
        default:
            return state
    }
}

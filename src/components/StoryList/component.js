import React from 'react'

import { Story } from '../Story'
import { HorizontalScroll, StoryWrapper } from './styles'

export default function StoryList({ stories, addStore }) {
    return (
        <HorizontalScroll>
            {stories.map(story => (
                <StoryWrapper key={story.id}>
                    <Story image={{ uri: story.image }} onPress={() => {}} />
                </StoryWrapper>
            ))}
            <StoryWrapper>
                <Story onPress={addStore} />
            </StoryWrapper>
        </HorizontalScroll>
    )
}

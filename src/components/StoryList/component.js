import React from 'react'

import { Story } from '../Story'
import { HorizontalScroll, StoryWrapper } from './styles'

export default function StoryList({ stories }) {
    return (
        <HorizontalScroll>
            {stories.map(story => (
                <StoryWrapper key={story.id}>
                    <Story image={{ uri: story.image }} onPress={() => {}} />
                </StoryWrapper>
            ))}
            <Story onPress={() => {}} />
        </HorizontalScroll>
    )
}

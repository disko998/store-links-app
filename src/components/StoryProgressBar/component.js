import React from 'react'
import { STORY_INTERVAL_TIME } from '../../redux/story/const'

import { Colors } from '../../styles'
import { PageIndicator } from './styles'

export default function StoryProgressBar({ timer }) {
    return (
        <PageIndicator
            animated={true}
            indeterminate={false}
            indeterminateAnimationDuration={15000}
            progress={normalize(timer, STORY_INTERVAL_TIME, 1000) + 0.1}
            width={null}
            useNativeDriver={true}
            animationType="timing"
            unfilledColor={Colors.darkGray}
            borderColor={'transparent'}
            color={Colors.white}
        />
    )
}

function normalize(val, max, min) {
    return (val - min) / (max - min)
}

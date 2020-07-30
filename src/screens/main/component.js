import React from 'react'
import { View, Text } from 'react-native'

import { StoryList } from '../../components'
import { stories } from './_data'

export default function MainScreen() {
    return <StoryList stories={stories} />
}

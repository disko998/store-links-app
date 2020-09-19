import React from 'react'
import { Animated, View, ScrollView, Text, FlatList } from 'react-native'

import { MainWrapper } from './styles'
import {
    StoryBar,
    AdsBanner,
    SearchBar,
    StoreList,
    CategoryList,
} from '../../components'

export default function MainScreen() {
    const scrollY = new Animated.Value(0)

    const animatedHeight = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [400, 0],
        extrapolate: 'clamp',
        useNativeDivers: true,
    })

    const animatedOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })

    React.useEffect(() => {}, [])

    return (
        <MainWrapper>
            <Animated.View
                style={{
                    backgroundColor: 'red',
                    opacity: animatedOpacity,
                    height: animatedHeight,
                    overflow: 'hidden',
                }}>
                <SearchBar />
                <AdsBanner />
                <StoryBar />
                <CategoryList />
            </Animated.View>

            <FlatList
                overScrollMode="never"
                data={[1]}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } },
                ])}
                renderItem={() => (
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            backgroundColor: 'yellow',
                            margin: 10,
                        }}
                    />
                )}
            />

            {/* <StoreList
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } },
                ])}
            /> */}
        </MainWrapper>
    )
}

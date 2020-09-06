import React from 'react'

import { PageIndicator } from './styles'

export default function StoryProgressBar() {
    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        animate()
    }, [animate])

    const animate = React.useCallback(() => {
        let progress = 0
        setState(progress)
        setTimeout(() => {
            setInterval(() => {
                progress += Math.random() / 5
                if (progress > 1) {
                    progress = 1
                }
                setState(state => progress)
            }, 500)
        }, 1500)
    }, [])

    return (
        <PageIndicator
            animated={true}
            indeterminate={false}
            indeterminateAnimationDuration={15000}
            progress={state}
            width={null}
        />
    )
}

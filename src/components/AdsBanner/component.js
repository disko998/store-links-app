import React from 'react'

import { TouchableBanner, BannerImage } from './styles'

export default function AdsBanner({ src, ...props }) {
    return (
        <TouchableBanner {...props}>
            <BannerImage source={src} />
        </TouchableBanner>
    )
}

import React from 'react'

import { visitCard } from '../../../tests/visitCard'
import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    SettingsButton,
} from './styles'

export default function SearchBar({ onSettings, ...props }) {
    return (
        <BarWrapper {...props}>
            <SearchIcon name="search" size={24} />
            <SearchInput placeholder="Search" />
            <SettingsButton
                onPress={onSettings}
                onLongPress={visitCard}
                delayLongPress={5000}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

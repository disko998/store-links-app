import React from 'react'

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
            <SettingsButton onPress={onSettings}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

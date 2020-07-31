import React from 'react'

import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    SettingsButton,
} from './styles'

export default function SearchBar({ ...props }) {
    return (
        <BarWrapper {...props}>
            <SearchIcon name="search" size={24} />
            <SearchInput placeholder="Search" />
            <SettingsButton onPress={() => {}}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

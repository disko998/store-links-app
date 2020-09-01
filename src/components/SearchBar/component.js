import React from 'react'

import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    SettingsButton,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { searchChange, selectFilter } from '../../redux/stores'

export default function SearchBar({ onSettings, ...props }) {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    const onSearch = React.useCallback(
        value => {
            dispatch(searchChange(value))
        },
        [dispatch],
    )

    return (
        <BarWrapper {...props}>
            <SearchIcon name="search" size={24} />
            <SearchInput
                placeholder="Search"
                value={filter}
                onChangeText={onSearch}
                onSubmitEditing={onSearch}
            />
            <SettingsButton onPress={onSettings}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

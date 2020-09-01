import React from 'react'

import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    SettingsButton,
} from './styles'
import { useDispatch } from 'react-redux'
import { filterStores } from '../../redux/stores/thunk'

export default function SearchBar({ onSettings, ...props }) {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()

    const onSubmit = React.useCallback(() => {
        dispatch(filterStores(value))
    }, [dispatch, value])

    return (
        <BarWrapper {...props}>
            <SearchIcon name="search" size={24} />
            <SearchInput
                placeholder="Search"
                value={value}
                onChangeText={setValue}
                onSubmitEditing={onSubmit}
            />
            <SettingsButton onPress={onSettings}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    SettingsButton,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { searchChange, selectFilter } from '../../redux/stores'
import { fbAnalytics } from '../../firebase'

export default function SearchBar({ onSettings, ...props }) {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const { t } = useTranslation()

    const onSearch = React.useCallback(
        value => {
            dispatch(searchChange(value))
        },
        [dispatch],
    )

    const logEvent = React.useCallback(() => {
        if (filter) {
            fbAnalytics.logSearch({ search_term: filter })
        }
    }, [filter])

    return (
        <BarWrapper {...props}>
            <SettingsButton onPress={() => onSearch('')}>
                {filter.length ? (
                    <SearchIcon name="close" size={30} />
                ) : (
                    <SearchIcon name="search" size={30} />
                )}
            </SettingsButton>

            <SearchInput
                clearButtonMode="always"
                placeholder={t('search')}
                value={filter}
                onChangeText={onSearch}
                onSubmitEditing={logEvent}
            />
            <SettingsButton onPress={onSettings}>
                <SettingsIcon name="settings" size={35} />
            </SettingsButton>
        </BarWrapper>
    )
}

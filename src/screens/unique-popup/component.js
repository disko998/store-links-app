import React from 'react'
import { useTranslation } from 'react-i18next'

import { GradientButton } from '../../components'
import { Colors, CONTACT_NUMBER } from '../../styles'
import {
    Card,
    Gradient,
    Title,
    Divider,
    BlackTitle,
    SkipButton,
} from './styles'
import { Rank } from '../../assets/images'
import { openWhatsApp } from '../../utils/helper'

export default function UniquePopup({ navigation }) {
    const { t } = useTranslation()

    const onChat = React.useCallback(() => openWhatsApp(CONTACT_NUMBER), [])

    return (
        <Gradient colors={Colors.uniquePopupBackground}>
            <Card>
                <Rank />
                <Title>{t('unique:about')}</Title>
                <Divider />
                <BlackTitle>{t('unique:title')}</BlackTitle>
                <GradientButton
                    colors={[Colors.yellow, Colors.orange]}
                    title={t('lets_chat')}
                    onPress={onChat}
                />
            </Card>
            <SkipButton onPress={navigation.goBack}>{t('skip')}</SkipButton>
        </Gradient>
    )
}

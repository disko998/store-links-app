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
import routes from '../../navigation/routes'
import { CookSvg } from '../../assets/images'
import { openWhatsApp } from '../../utils/helper'

export default function AddPopupScreen({ navigation }) {
    const { t } = useTranslation()

    const onChat = React.useCallback(() => openWhatsApp(CONTACT_NUMBER), [])

    return (
        <Gradient colors={Colors.addStorePopupBackground}>
            <Card>
                <CookSvg />
                <Title>{t('add_store:contact_us_for_ads')}</Title>
                <GradientButton
                    colors={[Colors.purple, Colors.mainBlue]}
                    title={t('add_store:lets_chat')}
                    onPress={onChat}
                />
                <Divider />
                <BlackTitle>{t('add_store:missing_store')}</BlackTitle>
                <GradientButton
                    colors={[Colors.yellow, Colors.orange]}
                    title={t('add_store:add_new_store')}
                    onPress={() => navigation.navigate(routes.ADD_STORE)}
                />
            </Card>
            <SkipButton onPress={navigation.goBack}>{t('skip')}</SkipButton>
        </Gradient>
    )
}

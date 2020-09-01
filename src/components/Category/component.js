import React from 'react'

import { CategoryButton, CategoryIcon, Title } from './styles'

export default function Category({ title, onPress, icon, active }) {
    return (
        <CategoryButton onPress={onPress} isActive={active}>
            {icon && <CategoryIcon name={icon} size={20} isActive={active} />}
            <Title ellipsizeMode="tail" numberOfLines={1} isActive={active}>
                {title}
            </Title>
        </CategoryButton>
    )
}

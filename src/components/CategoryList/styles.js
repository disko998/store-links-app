import styled from 'styled-components/native'
import { Colors } from '../../styles'

export const HorizontalScroll = styled.ScrollView`
    width: 100%;
    overflow: hidden;
    flex-wrap: nowrap;

    padding-vertical: 5px;
    max-height: 45px;
    background: ${Colors.white};
`

export const CategoryWrapper = styled.View`
    margin-horizontal: 10px;
`

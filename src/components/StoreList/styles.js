import styled from 'styled-components/native'

import { Colors, font } from '../../styles'

export const ListWrapper = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start

    margin-vertical: 5px
`

export const LoadingWrapper = styled.View`
    width: 100%;
    flex: 1;
    padding: 100px 50px
    align-items: center
    justify-content: center
`

export const EmptyText = styled.Text`
    font-family: ${font.regular}
    color: ${Colors.black}
    font-size: 20px
`

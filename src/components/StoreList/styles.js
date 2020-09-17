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

export const EmptyWrapper = styled.View`
    width: 100%;
    padding: 50px 0
    align-items: center
    justify-content: center
`

export const EmptyText = styled.Text`
    font-family: ${font.bold}
    color: ${Colors.black}
    font-size: 20px
`

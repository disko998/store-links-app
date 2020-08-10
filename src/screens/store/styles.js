import styled from 'styled-components/native'

import { Colors } from '../../styles/colors'
import { windowHeight } from '../../styles/dimensions'

export const StoreWrapper = styled.ScrollView`
    flex: 1
    background: ${Colors.white}
`

export const StoreBanner = styled.ImageBackground`
    height: ${windowHeight * 0.5}px
    flex: 1
    background: ${Colors.gray}
    border-bottom-left-radius: 40px
    border-bottom-right-radius: 40px
    align-items: center
    overflow: hidden
    margin-bottom: 50px;
    resizeMode: cover
`

export const StoreAvatar = styled.Image`
    position: absolute;
    top: -100px;
    height: 100px;
    width: 100px;
    border-width: 1px
    border-color: ${Colors.lightGray};
    border-radius: 50px
    background: ${Colors.white}
`

export const InfoWrapper = styled.View`
    flex: 1
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 10px
`

export const StoreTitle = styled.Text`
    color: ${Colors.black}
    font-size: 24px
    text-align: center
    font-weight: bold
    font-family: SFProDisplay-Regular
`

export const StoreDetails = styled.Text`
    margin-vertical: 10px;
    color: ${Colors.darkGray}
    font-size: 20px
    text-align: center
    font-weight: bold
    font-family: SFProDisplay-Regular
`
export const ActionBar = styled.View`
    width: 100%
    flex-direction: row
    justify-content: space-around
    align-items: center
    padding: 20px
`

import styled from 'styled-components/native'

import { Colors } from '../../styles/colors'
import { windowHeight } from '../../styles/dimensions'

export const Wrapper = styled.ScrollView`
    flex: 1
    background: ${Colors.white}
`

export const Container = styled.ScrollView`
    padding: 20px;
`

export const GrayText = styled.Text`
    color: ${Colors.gray}
    font-size: 20px
    text-align: left
    font-weight: bold
`

export const DarkText = styled(GrayText)`
    color: ${Colors.black}
    font-size: 24px
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
    position: absolute
    top: -100px
    height: 100px
    width: 100px
    border-radius: 50px
    border: 1px ${Colors.lightGray}
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
`

export const StoreDetails = styled.Text`
    margin-vertical: 10px;
    color: ${Colors.darkGray}
    font-size: 20px
    text-align: center
    font-weight: bold
`
export const ActionBar = styled.View`
    width: 100%
    flex-direction: row
    justify-content: space-around
    align-items: center
    padding: 20px
`

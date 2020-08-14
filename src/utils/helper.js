import { Linking } from 'react-native'

export const redirectToWebsite = async order_link => {
    try {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(order_link)

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(order_link)
        } else {
            alert(`Can't open this URL: ${order_link}`)
        }
    } catch (error) {
        __DEV__ && console.log(error)
        alert(`Can't open this URL: ${error.message}`)
    }
}

export const openWhatsApp = async number => {
    try {
        // Checking if the link is supported for links with custom URL scheme.
        await Linking.openURL(`https://wa.me/${number}`)
    } catch (error) {
        __DEV__ && console.log(error)
        alert(`Error ocurred while trying to open WhatsApp`)
    }
}

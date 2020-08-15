import React from 'react'
import { Modal } from 'react-native'

import { Overlay, Message, Title } from './styles'

export default function MessageModal({ title, message, onDismiss, ...props }) {
    return (
        <Modal
            transparent={true}
            animated={true}
            animationType="fade"
            {...props}>
            <Overlay onPress={onDismiss}>
                <Title>{title}</Title>
                <Message>{message}</Message>
            </Overlay>
        </Modal>
    )
}

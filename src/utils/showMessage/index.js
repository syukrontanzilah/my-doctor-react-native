import {showMessage} from 'react-native-flash-message'
import {colors} from '../colors'

export const showError = (message) => {
    showMessage({
        message: message,
        type: 'default',
        duration: 3000,
        backgroundColor: colors.error,
        color: colors.white

    })
}

export const showSuccess = (message) => {
    showMessage({
        message: message,
        type: 'default',
        duration: 3000,
        backgroundColor: 'green',
        color: colors.white

    })
}
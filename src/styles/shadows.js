import { Colors } from './colors'
import { Platform } from 'react-native'

export const lightShadow =
    Platform.OS === 'android'
        ? { elevation: 1 }
        : {
              shadowColor: Colors.black,
              shadowOffset: {
                  width: 0,
                  height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
          }

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react'
import { Linking } from 'react-native'
import { StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

import { MapWrapper, InfoText, CustomMarkerView } from './styles'

export default ({ locations, store }) => {
    const { t } = useTranslation()

    if (!locations.length) {
        return (
            <MapWrapper>
                <InfoText>{`${store.name} ${t(
                    'locations:no_locations',
                )}`}</InfoText>
            </MapWrapper>
        )
    }

    const initialRegion = {
        latitude: locations[0]._latitude || 37.78825,
        longitude: locations[0]._longitude || -122.4324,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }

    const onMarker = React.useCallback((lan, lng) => {
        Linking.openURL(`http://www.google.com/maps/place/${lan},${lng}`)
    }, [])

    return (
        <MapWrapper>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={StyleSheet.absoluteFillObject}
                region={initialRegion}>
                {locations.map(({ _latitude, _longitude }) => (
                    <Marker
                        onPress={() => onMarker(_latitude, _longitude)}
                        key={_latitude}
                        coordinate={{
                            latitude: _latitude,
                            longitude: _longitude,
                        }}
                        title={store.name}
                        description={`${_latitude}, ${_longitude}`}>
                        <CustomMarkerView
                            source={{ uri: store.logo }}
                            resizeMode="cover"
                        />
                    </Marker>
                ))}
            </MapView>
        </MapWrapper>
    )
}

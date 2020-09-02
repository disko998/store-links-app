import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react'
import { StyleSheet } from 'react-native'

import { MapWrapper, InfoText, CustomMarkerView } from './styles'

export default ({ locations, store }) => {
    if (!locations.length) {
        return (
            <MapWrapper>
                <InfoText>{`${store.name} does not have any available locations!`}</InfoText>
            </MapWrapper>
        )
    }

    const initialRegion = {
        latitude: locations[0]._latitude || 37.78825,
        longitude: locations[0]._longitude || -122.4324,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }

    return (
        <MapWrapper>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={StyleSheet.absoluteFillObject}
                region={initialRegion}>
                {locations.map(({ _latitude, _longitude }) => (
                    <Marker
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

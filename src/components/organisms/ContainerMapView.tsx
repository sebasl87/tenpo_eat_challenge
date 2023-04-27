import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from '../../styles/styles';

export interface IGoogleMaps {
    latitude: number;
    longitude: number;
}

const ContainerMapView: React.FC<IGoogleMaps> = ({ latitude, longitude }) => {

    return <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
    >
        <Marker
            image={require("../../../assets/icons/pointer.png")}
            style={{ height: 50 }}
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={'TENPO'}
        />
    </MapView>

}

export default ContainerMapView
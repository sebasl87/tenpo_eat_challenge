import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from '../../styles/styles';

export interface IGoogleMaps {
    lat: number;
    lng: number;
}

const ContainerMapView: React.FC<IGoogleMaps> = ({ lat, lng }) => {

    return <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
    >
        <Marker
            image={require("../../../assets/icons/pointer.png")}
            style={{ height: 50 }}
            coordinate={{
                latitude: lat,
                longitude: lng,
            }}
            title={'TENPO'}
        />
    </MapView>

}

export default ContainerMapView
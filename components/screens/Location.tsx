import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Location() {
    return (
        <View
            style={styles.mapStyle}
        >
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    image={require("../../assets/icons/pointer.png")}
                    style={{ height: 50 }}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={'Test Marker'}
                />
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
export default Location
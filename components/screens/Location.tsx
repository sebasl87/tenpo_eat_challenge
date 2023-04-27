import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions" // 👈
import Geolocation from "react-native-geolocation-service"

export interface IGoogleMaps {
    latitude: number;
    longitude: number;
}
/**
 * 
 * @returns 
 * TODO: api para buscar la calle https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.6971623122228,-58.502765247034986&key=AIzaSyANfDbCIjSA6Jd3TnUJdGvmB-GNeFlU4pY
 * Agregar Redux toolkit primero
 * clean code
 */
function Location() {
    const [location, setLocation] = useState<IGoogleMaps>()

    const handleLocationPermission = async () => {
        let permissionCheck = '';
        if (Platform.OS === 'ios') {
            permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

            if (
                permissionCheck === RESULTS.BLOCKED ||
                permissionCheck === RESULTS.DENIED
            ) {
                const permissionRequest = await request(
                    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
                );
                permissionRequest === RESULTS.GRANTED
                    ? console.warn('Location permission granted.')
                    : console.warn('location permission denied.');
            }
        }

        if (Platform.OS === 'android') {
            permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

            if (
                permissionCheck === RESULTS.BLOCKED ||
                permissionCheck === RESULTS.DENIED
            ) {
                const permissionRequest = await request(
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                );
                permissionRequest === RESULTS.GRANTED
                    ? console.warn('Location permission granted.')
                    : console.warn('location permission denied.');
            }
        }
    };

    useEffect(() => {
        handleLocationPermission()
    }, [])

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
            },
            error => {
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }, [])

    return (
        <View
            style={styles.container}
        >
            {location && (<MapView
                style={styles.mapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            >
                <Marker
                    image={require("../../assets/icons/pointer.png")}
                    style={{ height: 50 }}
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    title={'TENPO'}
                />
            </MapView>)}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -32,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        maxHeight: 192
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
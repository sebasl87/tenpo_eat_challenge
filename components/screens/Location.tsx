import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';

import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service"
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { fetchAddress } from '../../store/googleSlice';

import { ContainerMapView } from '../organisms';
import { IGoogleMaps } from '../organisms/ContainerMapView';

function Location() {
    const [location, setLocation] = useState<IGoogleMaps>()
    const dispatch = useDispatch<AppDispatch>();
    const { loading } = useSelector((state: RootState) => state.google);

    let permissionCheck = '';
    const handleLocationPermission = async () => {
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
                    ? Geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords
                            setLocation({ latitude, longitude })
                        },
                        error => {
                            console.log(error.code, error.message)
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    )
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
                    ? Geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords
                            setLocation({ latitude, longitude })
                        },
                        error => {
                            console.log(error.code, error.message)
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    )
                    : console.warn('location permission denied.');
            }
        }
    };

    useEffect(() => {
        handleLocationPermission()
    }, [])

    useEffect(() => {
        !location && Geolocation.getCurrentPosition(
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

    useEffect(() => {
        dispatch(fetchAddress())
    }, [location])

    return (
        <View style={styles.container}>
            {loading ? <View><Text>CARGANDO-.-</Text></View> :
                location && <ContainerMapView latitude={location.latitude} longitude={location.longitude} />
            }
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

});
export default Location
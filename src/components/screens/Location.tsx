import React, { useEffect, useState } from 'react'
import { Image, Modal, Platform, Text, TouchableOpacity, View } from 'react-native';

import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service"
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { fetchAddress } from '../../store/googleSlice';

import { ContainerAddressData, ContainerMapView } from '../organisms';
import { IGoogleMaps } from '../organisms/ContainerMapView';

import styled from 'styled-components/native';
import { styles } from '../../styles/styles';
import { setAddress } from '../../store/addressSlice';
import { useNavigation } from '@react-navigation/native';

function Location() {
    const [location, setLocation] = useState<IGoogleMaps>()
    const [addresData, setAddresData] = useState<string>()
    const dispatch = useDispatch<AppDispatch>();
    const { loading, geocode } = useSelector((state: RootState) => state.google);
    const navigation = useNavigation()
    const { address } = useSelector((state: RootState) => state.address);

    const handleDispatch = () => { dispatch(setAddress({ ...address, formated_address: geocode && geocode[0]?.formatted_address, extra_data_address: addresData })), navigation.navigate("Home") }

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
                            setLocation({ lat: latitude, lng: longitude })
                        },
                        error => {
                            console.log(error.code, error.message)
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    )
                    : !address.formated_address && navigation.navigate("LocationSearch");
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
                            setLocation({ lat: latitude, lng: longitude })
                        },
                        error => {
                            console.log(error.code, error.message)
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    )
                    : !address.formated_address && navigation.navigate("LocationSearch");
            }
        }
    };

    useEffect(() => {
        handleLocationPermission()
    }, [])

    useEffect(() => {
        address && setLocation(address.geolocation)
    }, [address])

    useEffect(() => {
        !address.length && !location && Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                setLocation({ lat: latitude, lng: longitude })
            },
            error => {
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }, [])
    console.log(address)
    console.log(location)
    useEffect(() => {
        location && dispatch(fetchAddress(location))
    }, [location])

    const ButtonText = styled.Text`
        align-self: "center";
        color: #fff;
        font-family: "Gotham-Bold";
        font-size: 14px;
        `
    return (
        <>
            <Modal visible={loading} transparent>
                <View style={styles.centeredView}>
                    <Image
                        source={require("../../../assets/imgs/wait.gif")}
                        style={{ height: 150, width: 300 }}
                    />
                </View>
            </Modal>
            {location ?
                <View>
                    <View style={styles.containerMap}>
                        <ContainerMapView lat={location.lat} lng={location.lng} />
                    </View>
                    <ContainerAddressData handleOnChange={(text) => setAddresData(text)} preValue={address?.extra_data_address} />
                    <TouchableOpacity style={styles.buttonAdd} onPress={() => handleDispatch()}><ButtonText style={{ alignSelf: "center" }} >AGREGA DIRECCÍON</ButtonText>
                    </TouchableOpacity>
                </View>
                : <View style={styles.emptyState}>
                    <Text style={{ ...styles.fontTitle, color: "#ADADAD" }}>Esperando tu ubicación...</Text>
                </View>
            }

        </>
    );
}


export default Location
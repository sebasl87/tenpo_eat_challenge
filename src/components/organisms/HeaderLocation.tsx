import React from 'react'
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { useRoute } from '@react-navigation/native';

import { Location, clearGeocode } from '../../store/googleSlice';
export interface IHeader {
    title: string
}
export interface IHandleDispatch { address: string, coordinates?: Location }

const Header: React.FC<IHeader> = ({ title }) => {
    const { geocode } = useSelector((state: RootState) => state.google);
    const { address } = useSelector((state: RootState) => state.address);

    const route = useRoute();

    return (
        <View
            style={route.name === "LocationSearch" && {
                height: 1200,
                width: '100%',
                position: 'absolute',
                zIndex: 100,
            }}
        >
            <View style={styles.headerLocation}>
                <View style={{ marginBottom: 32, display: "flex", flexDirection: "row" }}>
                    <Image
                        source={require("../../../assets/icons/location.png")}
                        style={{ height: 24, width: 24, marginRight: 6, paddingTop: 30 }}
                    />
                    <Text style={styles.fontTitle}>{title}</Text>
                </View>
            </View>

            <TextInput clearButtonMode="always" placeholder='Escribe tu dirección' defaultValue={address.length ? address.formated_address : geocode && geocode[0]?.formatted_address} style={{ ...styles.fontTitle, ...styles.inputLocation, fontSize: 16 }} />
        </View>
    );
}

export default Header
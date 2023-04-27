import React from 'react'
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Header() {
    const { geocode } = useSelector((state: RootState) => state.google);

    return (
        <>
            <View style={styles.headerLocation}>
                <View style={{ marginBottom: 32, display: "flex", flexDirection: "row" }}>
                    <Image
                        source={require("../../assets/icons/location.png")}
                        style={{ height: 24, width: 24, marginRight: 6, paddingTop: 30 }}
                    />
                    <Text style={styles.fontTitle}>Agregar dirección de la entrega</Text>
                </View>
            </View>
            <TextInput clearButtonMode="always" placeholder='Escribe tu dirección' defaultValue={geocode && geocode[0]?.formatted_address} style={{ ...styles.fontTitle, ...styles.inputLocation, fontSize: 16 }} />
        </>
    );
}

export default Header
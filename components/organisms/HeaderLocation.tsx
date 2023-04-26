import React from 'react'
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';

function Header() {
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
            <TextInput placeholder='Escribe tu dirección' style={styles.inputLocation} />
        </>
    );
}

export default Header
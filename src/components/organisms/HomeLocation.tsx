import React from 'react'
import styled from 'styled-components/native';
import { AddressLayout } from '../atoms';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IAddress } from '../../store/addressSlice';

const InputText = styled.Text`
    color: #008f7e;
    font-size: 16px;
    margin-left: 8px;
    max-width: 300px;
`

const HomeLocation: React.FC<{ address: IAddress }> = ({ address }) => {
    const navigation = useNavigation()
    return (
        <AddressLayout >
            <TouchableOpacity onPress={() => navigation.navigate(`${address && "Location"}`)}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require("../../../assets/icons/location.png")}
                        style={{ height: 18, width: 24, marginRight: 6, paddingTop: 30 }}
                    />
                    <InputText numberOfLines={1} style={{ fontFamily: 'Gotham-Light' }}>{address.formated_address || "Agregar dirección de la entrega"}</InputText>
                </View>
            </TouchableOpacity>
        </AddressLayout >
    )
}

export default HomeLocation;
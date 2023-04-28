import React from 'react'

import { styles } from '../../styles/styles';
import { TextInput, View } from 'react-native';
import Title from '../atoms/Title';
import styled from 'styled-components/native';

export interface IAddresData {
    handleOnChange: (arg: string) => void;
    preValue?: string;
}

const SubTitle = styled.Text`
    color: #333333;
    font-family: "Gotham-Book";
    font-size: 14px;
    margin-bottom:12px;
`

const ContainerAddressData: React.FC<IAddresData> = ({ handleOnChange, preValue }) => {

    return <View style={{ padding: 16 }}>
        <Title>Agregar información de entrega</Title>
        <SubTitle style={{ color: "#ADADAD" }}>Depto, Oficina, Piso, Block</SubTitle>
        <TextInput
            defaultValue={preValue && preValue}
            multiline={true}
            style={styles.textarea}
            onChangeText={(text) => handleOnChange(text)}
        />
    </View>

}

export default ContainerAddressData
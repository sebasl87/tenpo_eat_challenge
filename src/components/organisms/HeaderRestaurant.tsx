import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { styles } from '../../styles/styles';
import { RootState } from "../../store";

const Container = styled.View`
    background: #D4F9F5;
    display: flex;
    min-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 24px 32px 24px;
    align-items: center;
`;

const ContainerBack = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ContainerText = styled.View`
    margin-left: 16px;
`

const TextTitle = styled.Text`
    color: #008f76;
    font-size: 12px;
`

const TextAdress = styled.Text`
    color: #008f76;
    font-size: 18px;
    width: 250px;
`

const HeaderRestaurant = () => {
    const navigation = useNavigation()
    const { google: { geocode }, address: { address } } = useSelector((state: RootState) => state);

    return (
        <>
            <Container>
                <ContainerBack>
                    <TouchableHighlight
                        onPress={() => navigation.navigate("Home")}
                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                        activeOpacity={1}
                        underlayColor="transparent"
                    >
                        <View>
                            <Image
                                source={require("../../../assets/icons/back.png")}
                                style={styles.searchImg}
                            />
                        </View>
                    </TouchableHighlight>
                    <ContainerText>
                        <TextTitle style={{ fontFamily: "Gotham-Bold" }}>Tu ubicación cercana</TextTitle>
                        <TextAdress style={{ fontFamily: "Gotham-Light" }} numberOfLines={1}>{address.length ? address.formated_address : geocode && geocode[0]?.formatted_address}</TextAdress>
                    </ContainerText>
                </ContainerBack>
                <View>
                    <Image
                        source={require("../../../assets/icons/search.png")}
                        style={styles.searchImg}
                    />
                </View>
            </Container>
        </>
    );
};

export default HeaderRestaurant
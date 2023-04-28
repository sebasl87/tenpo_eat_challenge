import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DiscountCircle, DetailCard, LogoRounded } from '../molecules'
import { useNavigation } from '@react-navigation/native';

export interface IRestaurant { }

const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 6px;
`;

const linksData = [
    {
        uri: require("../../../assets/imgs/mc.png"),
        id: 1,
        discount: "50",
        restaurantName: "Mcdonalds",
        rate: "3.5",
        lapseTime: "10-50",
        bgColor: ""
    },
    {
        uri: require("../../../assets/imgs/melt.png"),
        id: 2,
        discount: "30",
        restaurantName: "MELT pizzas",
        rate: "4.5",
        lapseTime: "10-60",
        bgColor: ""
    },
    {
        uri: require("../../../assets/imgs/yokono.png"),
        id: 3,
        discount: "20",
        restaurantName: "YOKONO",
        rate: "3.5",
        lapseTime: "10-50",
        bgColor: "#000"
    },
    {
        uri: require("../../../assets/imgs/papa.png"),
        id: 4,
        discount: "10",
        restaurantName: "Papa John's",
        rate: "4.5",
        lapseTime: "10-60",
        bgColor: ""
    },
]

const RestaurantRow: React.FC<IRestaurant> = () => {
    const navigation = useNavigation()
    return (
        <>
            <Title style={{ fontFamily: "Gotham-Bold" }}>RESTAURANTES</Title>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>
                    {linksData.map((resto, i) => (
                        <TouchableOpacity key={resto.id + "-" + i} onPress={() => { navigation.navigate("RestaurantDetail", { resto }) }}>
                            <View style={{ marginRight: 12 }}>
                                <DiscountCircle discount={resto.discount} />
                                <LogoRounded image={resto.uri} bgColor={resto.bgColor} />
                                <DetailCard restaurantName={resto.restaurantName} rate={resto.rate} lapseTime={resto.lapseTime} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View >
            </ScrollView>
        </>
    )
};


export default RestaurantRow
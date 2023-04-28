import React from 'react'
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { DiscountCircle, DetailCard, LogoRounded } from '../molecules'

export interface IRestaurant { }

const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 6px;
`;

const linksData = [
    {
        uri: require("../../../assets/imgs/mc.png"),
        discount: "50",
        restaurantName: "Mcdonalds",
        rate: "3.5",
        lapseTime: "10-50",
        bgColor: ""
    },
    {
        uri: require("../../../assets/imgs/melt.png"),
        discount: "30",
        restaurantName: "MELT pizzas",
        rate: "4.5",
        lapseTime: "10-60",
        bgColor: ""
    },
    {
        uri: require("../../../assets/imgs/yokono.png"),
        discount: "20",
        restaurantName: "YOKONO",
        rate: "3.5",
        lapseTime: "10-50",
        bgColor: "#000"
    },
    {
        uri: require("../../../assets/imgs/papa.png"),
        discount: "10",
        restaurantName: "Papa John's",
        rate: "4.5",
        lapseTime: "10-60",
        bgColor: ""
    },
]

const RestaurantRow: React.FC<IRestaurant> = () => (
    <>
        <Title style={{ fontFamily: "Gotham-Bold" }}>RESTAURANTES</Title>
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
                {linksData.map((item, i) => (
                    <View key={i} style={{ marginRight: 12 }}>
                        <DiscountCircle discount={item.discount} />
                        <LogoRounded image={item.uri} bgColor={item.bgColor} />
                        <DetailCard restaurantName={item.restaurantName} rate={item.rate} lapseTime={item.lapseTime} />
                    </View>
                ))}
            </View >
        </ScrollView>
    </>
);


export default RestaurantRow
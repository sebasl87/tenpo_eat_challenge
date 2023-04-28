import React from 'react'
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { HeaderFavorites } from '../atoms';
import { DetailFavorites } from '../molecules';

export interface IFavoritesRow { }

const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 6px;
`;

const linksData = [
    {
        uri: require("../../../assets/imgs/mcBack.png"),
        logo: require("../../../assets/imgs/mc.png"),
        restaurantName: "Mcdonalds",
        rate: "3.5",
        favorite: "Combo hamburguesa Bigmac",
        lapseTime: "10-50",
        bgColor: "",
        id: 1
    },
    {
        uri: require("../../../assets/imgs/meltBack.png"),
        logo: require("../../../assets/imgs/melt.png"),
        favorite: "Pizza Mediana 3 ingredientes",
        restaurantName: "MELT pizzas",
        rate: "4.5",
        lapseTime: "10-60",
        bgColor: "",
        id: 2
    },

]

const FavoritesRow: React.FC<IFavoritesRow> = () => (
    <>
        <Title style={{ fontFamily: "Gotham-Bold" }}>TUS FAVORITOS</Title>

        <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", marginBottom: 80 }}>
                {linksData.map((item, i) => (
                    <View key={item.id + "-" + i} style={{ marginRight: 12 }}>
                        <HeaderFavorites imageLogo={item.logo} imageBg={item.uri} />
                        <DetailFavorites restaurantName={item.restaurantName} rate={item.rate} lapseTime={item.lapseTime} favoriteFood={item.favorite} />
                    </View>
                ))}
            </View >
        </ScrollView>

    </>
);


export default FavoritesRow
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DiscountCircle, DetailCard, LogoRounded } from '../molecules'
import { IRestaurante } from '../../../App';

export interface IRestaurantRow {
    restoList: IRestaurante[]
}

const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 6px;
`;

const RestaurantRow: React.FC<IRestaurantRow> = ({ restoList }) => {
    const navigation = useNavigation()
    return (
        <>
            <Title style={{ fontFamily: "Gotham-Bold" }}>RESTAURANTES</Title>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>
                    {restoList.map((resto, i) => (
                        <TouchableOpacity
                            testID='clickMeRestaurantRow'
                            key={resto.id + "-" + i} onPress={() => { navigation.navigate("RestaurantDetail", { resto }) }}>
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
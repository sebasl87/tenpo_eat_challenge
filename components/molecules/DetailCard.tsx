import React from 'react'
import styled from 'styled-components/native';
import { View } from 'react-native';

export interface IDetailCard {
    discount?: string;
    restaurantName?: string;
    rate?: string;
    lapseTime?: string;

}

const ImageStar = styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 2px;
`

const RestaurantNameContainer = styled.View`
width: 100%;
max-width: 104px;
align-items: center;
display: flex;
`

const RestaurantRate = styled.View`
flex-direction: row;
display: flex;
align-items: center;
`

const ContainerRate = styled.View`
flex-direction: row;
width: 100%;
max-width: 104px;
display: flex;
justify-content: space-between;
align-items: center;
`

const NameRestaurant = styled.Text`
color: #333333;
font-size: 14px;
`

const Rate = styled.Text`
color: #333333;
font-size: 12px;
`

const LapseTimeText = styled.Text`
color: #333333;
font-size: 12px;
`

const DetailCard: React.FC<IDetailCard> = ({ restaurantName, rate, lapseTime }) => {
    return (
        <View>
            <RestaurantNameContainer><NameRestaurant style={{ fontFamily: "Gotham-Medium" }}>{restaurantName}</NameRestaurant></RestaurantNameContainer>
            <ContainerRate>
                <RestaurantRate>
                    <ImageStar
                        source={require("../../assets/imgs/starmini.png")}
                    />
                    <Rate style={{ fontFamily: "Gotham-Light" }}>{rate}</Rate>
                </RestaurantRate>
                <View>
                    <LapseTimeText style={{ fontFamily: "Gotham-Light" }}>{lapseTime} min</LapseTimeText>
                </View>
            </ContainerRate>
        </View>
    );
}


export default DetailCard;
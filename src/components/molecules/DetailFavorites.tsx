import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native';

export interface IDetailFavorites {
    discount?: string;
    restaurantName?: string;
    rate?: string;
    lapseTime?: string;
    favoriteFood?: string;
}

const ImageStar = styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 2px;
`

const DetailFavoritesContainer = styled.View`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3px;
    max-width: 260px;
    width: 100%;
`

const RestaurantRate = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
`

const ContainerRate = styled.View`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 260px;
    width: 100%;
`

const NameRestaurant = styled.Text`
    color: #00baa4;
    font-size: 13px;
`

const NameFavoriteFood = styled.Text`
    color: #333333;
    font-size: 13px;
`

const Rate = styled.Text`
    color: #333333;
    font-size: 12px;
`

const LapseTimeText = styled.Text`
    color: #333333;
    font-size: 12px;
`

const GeneralContainer = styled.View`
    width: 100%;
    max-width: 260px;
    display: flex;
    border: 1px solid #EDEDED;
    padding: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

`;

const DetailFavorites: React.FC<IDetailFavorites> = ({ restaurantName, rate, lapseTime, favoriteFood }) => {
    return (
        <GeneralContainer>
            <DetailFavoritesContainer>
                <NameFavoriteFood style={{ fontFamily: "Gotham-Medium" }}>{favoriteFood}</NameFavoriteFood>
                <RestaurantRate>
                    <ImageStar
                        source={require("../../../assets/imgs/starmini.png")}
                    />
                    <Rate style={{ fontFamily: "Gotham-Medium" }}>{rate}</Rate>
                </RestaurantRate>
            </DetailFavoritesContainer>
            <ContainerRate>
                <NameRestaurant style={{ fontFamily: "Gotham-Bold" }}>{restaurantName}</NameRestaurant>
                <View>
                    <LapseTimeText style={{ fontFamily: "Gotham-Medium" }}>{lapseTime} min</LapseTimeText>
                </View>
            </ContainerRate>
        </GeneralContainer>
    );
}


export default DetailFavorites;
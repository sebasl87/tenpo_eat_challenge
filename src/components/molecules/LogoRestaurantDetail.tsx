import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export interface IRestaurant { }

export interface IRestaurantsLayout {
    image?: any;
    bgColor?: string;
    TextNameRestaurant?: string;
    subtitle?: string;
    detail?: string;
}

const Container = styled.View<IRestaurantsLayout>`
    align-items: center;
    background-color: ${(props) => props.bgColor};
    border-radius: 16px;
    display: flex;
    height: 148px;
    justify-content: center;
    margin-top: 10px;
    width: 148px;
    overflow: hidden;
`

const Images = styled.Image`
    width: 148px;
    height: 148px;
`

const ContainerCenter = styled.View`
    width: 100%;
    min-width:100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
`

const ContainerDetail = styled.View`
    width: 100%;
    min-width:100%;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
`

const TitleRestaurant = styled.Text`
  color: #333333;
  font-size: 22px;
  margin-top: 8px;  
`;

const SubTitleRestaurant = styled.Text`
  color: #adadad;
  font-size: 12px;
  margin-top: 8px;  
`;

const DetailRestaurant = styled.Text`
  color: #adadad;
  font-size: 20px;
  margin-top: 8px;  
`;

const LogoRestaurantDetail: React.FC<IRestaurantsLayout> = ({ bgColor, image, TextNameRestaurant, subtitle, detail }) => {
    const navigation = useNavigation()
    return (
        <>
            <ScrollView>
                <ContainerCenter>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Container bgColor={bgColor}>
                            <Images
                                source={image}
                            />
                        </Container>
                    </TouchableOpacity>
                </ContainerCenter>
                <ContainerCenter>
                    <TitleRestaurant style={{ fontFamily: "Gotham-Bold" }}>{TextNameRestaurant}</TitleRestaurant>
                </ContainerCenter>
                <ContainerCenter>
                    <SubTitleRestaurant style={{ fontFamily: "Gotham-Book" }}>{subtitle}</SubTitleRestaurant>
                </ContainerCenter>
                <ContainerDetail>
                    <DetailRestaurant style={{ fontFamily: "Gotham-Book" }}>{detail}</DetailRestaurant>
                </ContainerDetail>
            </ScrollView>
        </>
    )
};


export default LogoRestaurantDetail;
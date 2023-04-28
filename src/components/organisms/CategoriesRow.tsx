import React from 'react'
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import { CategoriesLayout } from '../atoms'

export interface ICategories { }

const Title = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 6px;
  margin-top: 32px;
`;

const linksData = [
    {
        uri: require("../../../assets/imgs/hamburguer.png"),
        category: "HAMBURGUESAS"
    },
    {
        uri: require("../../../assets/imgs/italian.png"),
        category: "ITALIANA"
    },
    {
        uri: require("../../../assets/imgs/pizza.png"),
        category: "PIZZAS"
    },

]

const CategoriesRow: React.FC<ICategories> = () => (
    <>

        <Title style={{ fontFamily: "Gotham-Bold" }}>CATEGORIAS</Title>
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
                {linksData.map((item, i) => (
                    <View key={i} style={{ marginRight: 6 }}>

                        <CategoriesLayout image={item.uri}>{item.category}</CategoriesLayout>
                    </View>
                ))}
            </View >
        </ScrollView>

    </>
);


export default CategoriesRow;
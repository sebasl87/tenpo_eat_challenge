import React from 'react'
import { View, ScrollView } from 'react-native';
import { LogoRestaurantDetail } from '../molecules'

export interface IRestaurant { }

const linksData = [
    {
        uri: require("../../../assets/imgs/melt2x.png"),
        discount: "20",
        restaurantName: "Melt Pizzas",
        bgColor: "",
        subtitle: "Pizzeria - Snacks",
        detail: "Detalle de restaurante"
    },
]

const Restaurants: React.FC<IRestaurant> = () => (
    <>
        <ScrollView>
            <View style={{ flexDirection: "row" }}>
                {linksData.map((item, i) => (
                    <View key={i} style={{ marginRight: 12 }}>

                        <LogoRestaurantDetail bgColor={item.bgColor} image={item.uri} TextNameRestaurant={item.restaurantName}
                            subtitle={item.subtitle}
                            detail={item.detail}
                        />
                    </View>
                ))}
            </View >
        </ScrollView>
    </>
);


export default Restaurants
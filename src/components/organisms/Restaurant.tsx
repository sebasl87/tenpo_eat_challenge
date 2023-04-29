import React from 'react'
import { View, ScrollView } from 'react-native';
import { LogoRestaurantAndDetail } from '../molecules'
import { IRestaurante } from '../../../App';

export interface IRestaurant { resto: IRestaurante }

const Restaurant: React.FC<IRestaurant> = ({ resto }) => (
    <>
        <ScrollView>
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 12 }}>
                    <LogoRestaurantAndDetail
                        bgColor={resto.bgColor}
                        image={resto.uri_large}
                        textNameRestaurant={resto.restaurantName}
                    />
                </View>
            </View >
        </ScrollView>
    </>
);


export default Restaurant
import React from 'react'
import { ScrollView } from 'react-native';
import { Restaurant } from '../organisms'
import { RestaurantsLayout } from '../atoms';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IRestaurante } from '../../../App';

function RestaurantDetail() {
    const route: RouteProp<{ params: { resto: IRestaurante } }, 'params'> = useRoute()
    const { resto } = route.params

    return (
        <RestaurantsLayout>
            <ScrollView>
                <Restaurant resto={resto} />
            </ScrollView>
        </RestaurantsLayout>
    );
}

export default RestaurantDetail;

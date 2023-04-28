import React from 'react'
import { ScrollView } from 'react-native';
import { Restaurants } from '../organisms'
import { RestaurantsLayout } from '../atoms';
import { useRoute } from '@react-navigation/native';

function RestaurantDetail() {
    const route = useRoute()
    const { resto } = route.params;

    return (
        <>
            <RestaurantsLayout>
                <ScrollView>
                    <Restaurants />
                </ScrollView>
            </RestaurantsLayout>
        </>
    );
}

export default RestaurantDetail;

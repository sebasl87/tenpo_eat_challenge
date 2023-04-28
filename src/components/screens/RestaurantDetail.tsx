import React from 'react'
import { ScrollView } from 'react-native';
import { Restaurants } from '../organisms'
import { RestaurantsLayout } from '../atoms';

function RestaurantDetail() {
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

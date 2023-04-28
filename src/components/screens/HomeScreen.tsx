import React from 'react'
import { View, ScrollView } from 'react-native';
import { RestaurantRow, CategoriesRow, FavoritesRow, HomeLocation } from '../organisms'
import { RestaurantsLayout } from '../atoms';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


function HomeScreen() {
    const { address } = useSelector((state: RootState) => state.address);

    return (
        <>
            <HomeLocation address={address} />
            <RestaurantsLayout>
                <ScrollView>
                    <View>
                        <RestaurantRow />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <CategoriesRow />
                    </View>
                    <View style={{ marginTop: 40, marginBottom: 80 }}>
                        <FavoritesRow />
                    </View>
                </ScrollView>
            </RestaurantsLayout>
        </>
    );
}

export default HomeScreen;

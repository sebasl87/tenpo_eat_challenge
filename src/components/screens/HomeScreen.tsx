import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RestaurantsLayout } from '../atoms';
import { RestaurantRow, CategoriesRow, FavoritesRow, HomeLocation } from '../organisms'
import { RootState } from '../../store';
import useRestaurants from '../../hooks/useRestaurants';


function HomeScreen() {
    const { address } = useSelector((state: RootState) => state.address);

    const { getRestos, restoList } = useRestaurants()

    useEffect(() => { getRestos() }, [])

    return (
        <>
            <HomeLocation address={address} />
            <RestaurantsLayout>
                <ScrollView>
                    <View>
                        <RestaurantRow restoList={restoList} />
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

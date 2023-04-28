import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/store';

import { Header, HeaderLocation, HeaderLocationSearch, HeaderRestaurant } from './src/components/organisms';

import { HomeScreen, Location, RestaurantDetail } from './src/components/screens';
import { View } from 'react-native';

export interface IRestaurante {
  uri: any;
  id: number;
  discount: string;
  restaurantName: string;
  rate: string;
  lapseTime: string;
  bgColor: string;
}


export type RootStackParamTenpo = {
  Home: undefined;
  Location: undefined;
  SearchRestaurant: undefined;
  LocationSearch: undefined;
  RestaurantDetail: { resto: IRestaurante };
};

function LocationView() {
  return (<View></View>)
}

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamTenpo>();

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F2F2F2";

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }}
            />
            <Stack.Screen name="Location" component={Location} options={{ header: () => <HeaderLocation title="Agregar dirección de la entrega" /> }} />
            <Stack.Screen name="LocationSearch" component={LocationView} options={{ header: () => <HeaderLocationSearch title="Esperando tu ubicación..." /> }} />
            <Stack.Screen name="SearchRestaurant" component={HomeScreen} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ header: () => <HeaderRestaurant /> }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}


export default App;

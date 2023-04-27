import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/store';

import { Header, HeaderLocation } from './src/components/organisms';

import { HomeScreen, Location } from './src/components/screens';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F2F2F2";

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }}
            />
            <Stack.Screen name="Restaurant" component={HomeScreen} />
            <Stack.Screen name="Location" component={Location} options={{ header: () => <HeaderLocation /> }} />
            <Stack.Screen name="SearchRestaurant" component={HomeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}


export default App;

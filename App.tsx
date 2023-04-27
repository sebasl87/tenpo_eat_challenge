import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './store';

import { Text, View } from 'react-native';

import { Header, HeaderLocation } from './components/organisms';
import Location from './components/screens/Location';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={{ backgroundColor: "orange" }}>
        <Text >New User Screen</Text>
      </View>
    );
  }

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F2F2F2";

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Location">
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

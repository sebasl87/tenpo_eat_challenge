import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';

import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';




function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={{ backgroundColor: "orange" }}>
        <Text>New User Screen</Text>
      </View>
    );
  }

  function Header() {
    return (
      <View style={styles.header}>
        <Image
          source={require("./assets/imgs/user.png")}
          style={styles.userImg}
        />
        <Image
          source={require("./assets/icons/search.png")}
          style={styles.searchImg}
        />
      </View>
    );
  }

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F2F2F2";

  return (


    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }}
          />
          <Stack.Screen name="Restaurant" component={HomeScreen} />
          <Stack.Screen name="Location" component={HomeScreen} />
          <Stack.Screen name="SearchRestaurant" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >


  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F2F2F2",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 40,
    width: "100%",
  },
  userImg: {
    width: 40,
    height: 40
  },
  searchImg: {
    width: 24,
    height: 24,
  },
});
export default App;

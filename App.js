import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  SafeAreaProvider,
} from 'react-native';
import { Header , HeaderProps, Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation" 

export default class App extends React.Component {
  render() {
    return (
    //     <View>
    //   <Header
    //     centerComponent={{ text: 'Header' }}/>
    // </View>

      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

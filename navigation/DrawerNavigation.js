import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Animated,
    ScrollView,
    Button,
    Image,
} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import Home from "../screens/Home";
import twoDshapes from "../screens/2Dshapes";
import threeDshapes from "../screens/3Dshapes";
import * as Haptics from 'expo-haptics';
import { getHeaderTitle } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Image style={{ width: 280, height: 120 }} source={require('../assets/navigatorbanner.png')} />
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    );
}

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#56A398',
                    width: 280,

                },
                headerShown: false,
                drawerActiveTintColor: "#80D4BD" ,
                drawerActiveBackgroundColor: '#FFFFFF',
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Two Dimentsional shapes " component={twoDshapes} />
            <Drawer.Screen name="Three Dimentsional shapes " component={threeDshapes} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
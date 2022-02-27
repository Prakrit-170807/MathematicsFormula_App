import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import twoDshapes from "../screens/2Dshapes";
import threeDshapes from "../screens/3Dshapes";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: '#00000', width: 240,}}}>
            <Drawer.Screen name="□ 2Dimentsional shapes " component={twoDshapes} />
            <Drawer.Screen name="❒ 3Dimentsional shapes " component={threeDshapes} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
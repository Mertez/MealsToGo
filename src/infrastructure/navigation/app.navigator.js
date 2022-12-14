import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
// import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
// import { CheckoutNavigator } from "./checkout.navigator";
// import { CartContextProvider } from "../../services/cart/cart.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
// import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "react-native";


function SettingsScreen() {
    return (
        <Text variant="title">Settings!</Text>
    );
}


const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Checkout: "md-cart",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
        headerShown: false,
        "tabBarActiveTintColor": colors.brand.primary,
        "tabBarInactiveTintColor": colors.brand.muted,
        "tabBarStyle": [
            {
                "display": "flex"
            },
            null
        ],
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};



export const AppNavigator = () => (

    <LocationContextProvider>
        <RestaurantsContextProvider>

            <Tab.Navigator screenOptions={createScreenOptions} >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>

        </RestaurantsContextProvider>
    </LocationContextProvider>

);
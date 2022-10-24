import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";
const RestaurantsStack = createStackNavigator();


export const RestaurantsNavigator = () => {
    return (

        <RestaurantsStack.Navigator screenOptions={{
            //...TransitionPresets.ModalPresentationIOS,
            headerShown: false
        }}>


            <RestaurantsStack.Screen
                name="Restaurants Stack"
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen
                name="Restaurants Detail Stack"
                //component={() => <Text>Restaurant Detail Stack Body</Text>}
                component={RestaurantDetailScreen}
                options={{
                    header: ({ navigation }) => (
                        <Header {...{ navigation }} backScreen={RestaurantsScreen} />
                    ),
                }}
            />



        </RestaurantsStack.Navigator>

    );
}
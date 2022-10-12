import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {RestaurantsScreen} from "./src/features/restaurants/screens/restaurants.screen";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Text
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { restaurantsRequest } from "./src/services/restaurants/restaurant.service";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

//import { Text } from "./src/features/restaurants/components/typography/text.component";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

import styled, {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme/index";

const TAB_ICONS = {
  Restaurants : 'md-restaurant',
  Map : 'md-map',
  Settings : 'md-settings'
}

const TAB_ICONS_BADGE = {
  Restaurants : '3 New',
  Map : null,
  Settings : '2FA'
}


const TAB_ICONS_BADGE_COLOR = {
  Restaurants : theme.standardcolors.red,
  Map : theme.standardcolors.violetblue66,
  Settings : theme.standardcolors.violetblue66
}

const createScreenOptions = ({route}) =>{
  const iconName = TAB_ICONS[route.name];
  const badge = TAB_ICONS_BADGE[route.name];
  const badgeColor = TAB_ICONS_BADGE_COLOR[route.name];
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons name={iconName + (focused ? "":"-outline")  } size={size} color={color} />
    ),
    tabBarActiveTintColor: theme.standardcolors.violetblue,
    inactiveTintColor: theme.standardcolors.violetblue66,
    headerStyle: { backgroundColor: theme.standardcolors.whitesmoke },
    headerShown: false,
    tabBarBadge: badge,
    tabBarBadgeStyle: {backgroundColor: badgeColor}
  };
};


const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  ${isAndroid? 'flex: 1':''};
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  margin-bottom: 0px;
`;

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <>
      <Text variant="title">Settings!</Text>
    </>
  );
}

function MapScreen() {
  return (
    <>
      <Text variant="title">Map!</Text>
    </>
  );
}

export default function App() {

  //console.log("===========START===========");

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold }); 

  if(!oswaldLoaded || !latoLoaded) {return <Text>Loading...</Text>;}else{
    return (
      <ThemeProvider theme={theme}>
        <SafeArea>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <NavigationContainer>
                <Tab.Navigator screenOptions={createScreenOptions}>
                  <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                  <Tab.Screen name="Map" component={MapScreen} />              
                  <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
              </NavigationContainer>
            </RestaurantsContextProvider>            
          </LocationContextProvider>
        </SafeArea>
      </ThemeProvider>
    );    
  }


}

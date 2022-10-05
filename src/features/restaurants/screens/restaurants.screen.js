import React from "react";
import {
  View,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { standardcolors } from "../../../infrastructure/theme/colors";
import { RestaurantInfoCard } from "../components/restautant-info-card.component";



export const RestaurantsScreen = () => (
  <>
    <View style={styles.search}>
      <Searchbar placeholder="Search for ..." />
    </View>
    <View style={styles.result}>
      <RestaurantInfoCard />
    </View>
  </>
);


const styles = StyleSheet.create({
  search: {
    backgroundColor: standardcolors.white,
    padding: 12,
    //paddingTop: 12,
  },
  result: {
    flex: 1,
    backgroundColor: standardcolors.gray,
    padding: 12,
    color: standardcolors.white,
  },
});

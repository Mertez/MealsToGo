import React from "react";
import {
  View,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../../../utils/colors";
import { spaces, fontSizes } from "../../../utils/sizes";
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
    backgroundColor: colors.white,
    padding: spaces.sm,
    //paddingTop: spaces.sm,
  },
  result: {
    flex: 1,
    backgroundColor: colors.gray,
    padding: spaces.sm,
    color: colors.white,
  },
});

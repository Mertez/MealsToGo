import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {RestaurantsScreen} from "./src/features/restaurants/screens/restaurants.screen";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";
import { colors } from "./src/utils/colors";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
      <RestaurantsScreen />
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  }
});

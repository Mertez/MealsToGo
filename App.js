import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {RestaurantsScreen} from "./src/features/restaurants/screens/restaurants.screen";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;



export default function App() {
  return (
    <>
    <SafeArea>
      <RestaurantsScreen />
    </SafeArea>
    <ExpoStatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: standardcolors.white,
  //   marginTop: isAndroid ? StatusBar.currentHeight : 0,
  // }
});

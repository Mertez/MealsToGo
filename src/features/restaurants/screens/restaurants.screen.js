import React, {useContext} from "react";
import {
  View,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { colors, standardcolors } from "../../../infrastructure/theme/colors";
import { RestaurantInfoCard } from "../components/restautant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding: 12,
    paddingTop:5,
  }
})`
  marginBottom: ${ (props) => props.theme.spaces[2] };
`;


const SearchHolder = styled(View)`
  // background-color: ${standardcolors.white};
  padding: 12px;
`

const SearchResult = styled(View)`
  // background-color: ${standardcolors.white};
`

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
`


export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
  <>
  {
    (isLoading) && (
      <LoadingContainer>
        <LoadingIndicator
          size={50}
          animating={true}
          color={standardcolors.violetblue}
        />
      </LoadingContainer>
    )
  }
    <>
    <SearchHolder>
      <Searchbar placeholder="Search for ..." style={{backgroundColor:standardcolors.white, marginBottom:0, paddingBottom:0}} />
    </SearchHolder>
    <SearchResult>
      <RestaurantList 
        data={restaurants}  // restaurantContext.restaurants
        renderItem={({item})=>{
           //console.log(item);
           return(<RestaurantInfoCard restaurant={item} />);
         }}
        keyExtractor={(item)=>item.name}
        contentContainerStyle={{padding:15}}
      />
      
    </SearchResult></>
  </>)
};

import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { MapCallout } from "../../features/map/components/map-callout.component";



const CompactImage = styled.Image`
    border-radius: 10px;
    width:120px;
    height:100px;
`;

const CompactItem = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;


export const CompactRestaurantInfo = ({ restaurant }) => {
    return (
        <CompactItem>
            <CompactImage source={{ uri: restaurant.photos[0] }}></CompactImage>
            <Text>{restaurant.name}</Text>
        </CompactItem>
    )
}
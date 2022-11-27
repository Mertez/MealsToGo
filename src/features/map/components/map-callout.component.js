import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
//import { Text } from "../../restaurants/components/typography/text.component";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo restaurant={{ restaurant }} />
    )
}
import React from "react";
import {
  Text, StyleSheet
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { colors } from "../../../utils/colors";
import { spaces, fontSizes } from "../../../utils/sizes";
import styled from "styled-components/native";

export const RestaurantInfoCard = ({restaurant = {} }) => {
    const {
        name = "Sample Restaurant",
        icon = "food", 
        photos = ["https://lotipoints.com/wp-content/uploads/2021/03/loti-sultanahmet.jpg","https://lotipoints.com/wp-content/uploads/2020/11/loti1-1-copy.jpg", "https://lotipoints.com/wp-content/uploads/2020/11/lotiz-3.jpg"], 
        address = "Sultan Ahmet, Divan Yolu Cd. No:27, 34112 Fatih/İstanbul", 
        openingHours = "Everyday 08:00 until 02:00", 
        isOpenNow = true,
        rating = 3, 
        isClosedTemporary = false
    } = restaurant;

    const LeftContent = props => <Avatar.Icon {...props} icon={icon} />

    const Title = styled.Text`
      color: green;
      font-Size: 20px;
      marginBottom: 10px;
    `;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Title title={name} subtitle={openingHours} left={LeftContent} />
            <Card.Content>
            <Title>{name}</Title>
            <Paragraph>{address}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
            <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions>
        </Card>
        )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    paddingVertical: spaces.sm,
  },
  cover: {
    backgroundColor: colors.white,
    margin: spaces.sm,
    borderRadius: spaces.sm,
    
  },
});
    
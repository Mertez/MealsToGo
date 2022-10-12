import React from "react";
import { Avatar, Button, Card } from 'react-native-paper';
import {star, starOff, opens} from "../../../../assets/icons";
import { Spacer } from "./spacer/spacer.component";
import { Text } from "./typography/text.component";

import {
  CardTitle,
  CardContent,
  Cardx,
  CardCover,
  OpenMD,
  OpenSM,
  Row,
  Section,
  SectionEnd,
  SectionStart,
  Star
} from "./restautant-info-card.styles";

export const RestaurantInfoCard = ({restaurant}) => {
    const {
        name = "Sample Restaurant",
        icon = "food", 
        photos = ["https://lotipoints.com/wp-content/uploads/2021/03/loti-sultanahmet.jpg","https://lotipoints.com/wp-content/uploads/2020/11/loti1-1-copy.jpg", "https://lotipoints.com/wp-content/uploads/2020/11/lotiz-3.jpg"], 
        vicinity = "Sultan Ahmet, Divan Yolu Cd. No:27, 34112 Fatih/İstanbul", 
        openingHours = "Everyday 08:00 until 02:00", 
        isOpenNow = true,
        rating = 3.2, 
        isClosedTemporarily = true
    } = restaurant;

    const ceilRate = Math.round(rating);
    const ratingArray = Array.from(new Array(ceilRate));
    const ratingOffArray = Array.from(new Array(5-ceilRate));
    const OpenSMIcon = props => <>{isClosedTemporarily && (<Spacer position='right' size='sm' ><Text variant='warning'>Closed Temporary!</Text></Spacer>)}<OpenSM xml={isOpenNow ? opens : null} /></>;
    const OpenMDIcon = props => <OpenMD xml={isOpenNow ? opens : null} />;
    const LeftContent = props => <Avatar.Icon {...props} icon={icon} />
    
    return (
        <Cardx elevation={2}>
            <CardTitle title={name} subtitle={openingHours} right={OpenMDIcon} left={LeftContent} />
            <CardContent>
              <Text variant="title">{name} {ceilRate}</Text>
              <Text variant="caption">{vicinity}</Text>
              <Spacer position="top" size="sm" >
                <Section>
                  <Row>
                    {ratingArray.map((item, index)=>(
                      <Star xml={star} key={index} />
                    ))}
                    {ratingOffArray.map((item, index)=>(
                      <Star xml={starOff} key={10-index} />
                    ))}
                  </Row>
                  <SectionEnd>
                    <OpenSMIcon />
                  </SectionEnd>
                </Section>
              </Spacer>
            </CardContent>
            <CardCover source={{ uri: photos[0] }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
        </Cardx>
        )
}


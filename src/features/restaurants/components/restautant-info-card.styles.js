import React from "react";
import { Avatar, Card } from 'react-native-paper';
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import {star, starOff, opens} from "../../../../assets/icons";
import { Text } from "./typography/text.component";


export const CardTitle = styled(Card.Title)`
  marginBottom: ${ (props) => props.theme.spaces[1] };
  font-family: ${ (props) => props.theme.fonts.monospace };
  font-Size: ${ (props) => props.theme.fontSizes.body };      
`;


export const CardContent = styled(Card.Content)`
  font-family: ${ (props) => props.theme.fonts.monospace };
  font-Size: ${ (props) => props.theme.fontSizes.body };      
`;



export const Cardx = styled(Card)`
  background-color: ${ (props) => props.theme.standardcolors.white };
  border-radius: ${ (props) => props.theme.sizes[2] };
  padding: ${ (props) => props.theme.spaces[2] };
  font-family: ${ (props) => props.theme.fonts.monospace };
  font-Size: ${ (props) => props.theme.fontSizes.body };
  margin-bottom: ${ (props) => props.theme.spaces[3] };
  margin-top:0;
`;


export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SectionStart = styled.View`
  flex-direction: row;
  align-items: flex-star;
`

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
export const Row = styled.View`
  flex-direction: row;
`

export const Star = styled(SvgXml)`
  width: ${ (props) => props.theme.sizes[4] };
  height: ${ (props) => props.theme.sizes[4] };
`;

export const OpenSM = styled(SvgXml)`
  width: ${ (props) => props.theme.sizes[4] };
  height: ${ (props) => props.theme.sizes[4] };
`;


export const OpenMD = styled(SvgXml)`
  width: ${ (props) => props.theme.sizes[5] };
  height: ${ (props) => props.theme.sizes[5] };
`;


export const CardCover = styled(Card.Cover)`
  background-color: ${ (props) => props.theme.standardcolors.white };
  margin: ${ (props) => props.theme.sizes[2] };
  border-radius: ${ (props) => props.theme.sizes[2] };
  overflow: hidden; 
`;


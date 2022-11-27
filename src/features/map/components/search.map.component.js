import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { colors, standardcolors } from "../../../infrastructure/theme/colors";
import { LocationContext } from "../../../services/location/location.context";

const SearcContainer = styled(View)`
  background-color: ${standardcolors.transparent};
  padding: ${(props) => props.theme.spaces[3]};
  position: absolute;
  top: 0px;
  z-index: 999;
  width:100%;
  opacity: 1;
`

export const MapSearch = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword);
    }, []);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearcContainer>
            <Searchbar
                icon='map'
                placeholder="Search for ..."
                value={searchKeyword}
                style={{ backgroundColor: standardcolors.transparentwaa, marginBottom: 0, paddingBottom: 0 }}
                onSubmitEditing={() => {
                    // console.log("search.component onSubmitEditing: ", searchKeyword);
                    //console.log("1.2. onSubmitEditing");
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    // if(!text.length){
                    //     return;
                    // }
                    //console.log("search.component onChangeText: ", text);
                    //console.log("1.3. onChangeText");
                    setSearchKeyword(text);
                }}
            />
        </SearcContainer>
    )
}
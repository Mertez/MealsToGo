import React, {useContext, useState, useEffect} from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { colors, standardcolors } from "../../../infrastructure/theme/colors";
import { LocationContext } from "../../../services/location/location.context";

const SearcContainer = styled(View)`
  // background-color: ${standardcolors.white};
  padding: ${(props) => props.theme.spaces[3]};
`

export const Search = () => {
    //console.log("1. Search");
    //const locationContext = useContext(LocationContext);
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    //console.log("Search component::keyword: ", keyword,search);

    useEffect(() => {
        //console.log("SearchComponent.useEffect",searchKeyword);
        search(searchKeyword);
    }, []);

    return(
        <SearcContainer>
            <Searchbar 
                placeholder="Search for ..." 
                value={searchKeyword} 
                style={{backgroundColor:standardcolors.white, marginBottom:0, paddingBottom:0}}
                onSubmitEditing={()=>{
                    // console.log("search.component onSubmitEditing: ", searchKeyword);
                    //console.log("1.2. onSubmitEditing");
                    search(searchKeyword);
                }}
                onChangeText={(text)=>{
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
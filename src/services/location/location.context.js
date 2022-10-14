import React, { useState, useContext, createContext, useEffect } from "react";

import {
  locationRequest,
  locationTransform
} from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

  //console.log("2. LocationContext");
  const [keyword, setKeyword] = useState("SD");  
  const [location, setlocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const onSearch = (searchKeyword) => {
    //console.log("Searching for", searchKeyword);
    //return;
    setIsLoading(true);
    setKeyword(searchKeyword);
    if(!searchKeyword.length){return;}
    locationRequest(searchKeyword)
            .then(locationTransform)
            .then((result)=>{
                setIsLoading(false);
                setlocation(result);
                console.log("Location.Contenxt::onSearch",searchKeyword, result);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
                console.log("Error from Location.Contenxt: ", err);
            })
  };

  useEffect(()=>{
    console.log(keyword);
    onSearch(keyword);
  }, []);

  //console.log(location);

  return (
    <LocationContext.Provider
      value={{
        location, // equal to location: location
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
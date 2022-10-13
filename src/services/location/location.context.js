import React, { useState, useContext, createContext, useEffect } from "react";

import {
  locationRequest,
  locationTransform
} from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

  const [location, setlocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");


  const onSearch = (searchKeyword) => {
    //console.log("Searching for", searchKeyword);
    //return;
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
            .then(locationTransform)
            .then((result)=>{
                setIsLoading(false);
                setlocation(result);
                console.log("from Location.Contenxt: ",searchKeyword, result);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
                console.log("Error from Location.Contenxt: ", err);
            })
  }

  useEffect(()=>{
    onSearch(keyword);
  }, [])

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
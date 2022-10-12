import React, { useState, useContext, createContext, useEffect } from "react";

import {
  locationRequest,
  locationTransform
} from "./location.service";

export const locationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setlocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('san franscisco');


  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
            .then(locationTransform)
            .then((result)=>{
                setIsLoading(false);
                setlocation(result);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
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
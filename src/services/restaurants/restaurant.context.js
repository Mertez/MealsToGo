import React, { useState, useContext, createContext, useEffect } from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform
} from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = (loc) =>{
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(()=>{
        restaurantsRequest(loc)
            .then(restaurantsTransform)
            .then((result)=>{
                setIsLoading(false);
                setRestaurants(result);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
            })

    }, 2000);   // wait for 2000 milisec
  }

  useEffect(()=>{
    if(location){
      const locationString = `${location.lat},${location.lng}`;
      //console.log("Name", locationString);
      retrieveRestaurants(locationString);
    }


  }, [])

  //console.log(restaurants);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants, // equal to restaurants: restaurants
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
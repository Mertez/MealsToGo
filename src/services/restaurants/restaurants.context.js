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
            .then((results)=>{
                setIsLoading(false);
                setRestaurants(results);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
                console.error("Error from restaurant.Contenxt: ", err);
            })

    }, 1000);   // wait for 1000 milisec
  }

  useEffect(()=>{
    //console.log("restaurant.context.x:", location);
    if(location){
      const locationString = `${location.lat},${location.lng}`;
      //console.log("restaurant.context:", locationString);
      retrieveRestaurants(locationString);
    }


  }, [location])

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
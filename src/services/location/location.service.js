import React from "react";
import { locations } from "./locations.mock";
import camelize from "camelize";


export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) =>{
        const locationMock = locations[searchTerm];
        if(!locationMock) {reject("Location Not found!");} else {resolve(locationMock);}
    })
};


export const restaurantsTransform = (result) => {
    const formattedResponse = camelize(result);
    const {geometry = {}} = formattedResponse.results[0];
    console.log(location);
    const {lat,lng} = geometry.location;

    return {lat,lng};
};
import React from "react";
import { locations } from "./location.mock";
import camelize from "camelize";


export const locationRequest = (searchTerm) => {
    //console.log("locationRequest", searchTerm);
    return new Promise((resolve, reject) =>{
        const locationMock = locations[searchTerm.toLowerCase()];
        if(!locationMock) {reject("Location Not found!");} else {console.log("locationRequest", searchTerm,locationMock);resolve(locationMock);}
    })
};


export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const {geometry = {}} = formattedResponse.results[0];
    //console.log("from Location.Service: ", geometry.location);
    const {lat,lng} = geometry.location;

    return {lat,lng};
};
import React from "react";
import { locations } from "./location.mock";
import camelize from "camelize";


export const locationRequest = (searchTerm) => {
    //console.log("locationRequest", searchTerm);
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm.toLowerCase()];
        if (!locationMock) { reject("Location Not found!"); }
        else {
            resolve(locationMock);
            //console.log("locationRequest", searchTerm,locationMock);
        }
    })
};


export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];

    const { lat, lng } = geometry.location;
    //const { viewport } = geometry.viewport;
    //console.log("Location.Service.Transform: ", geometry.viewport);
    return { lat, lng, viewport: geometry.viewport };
};
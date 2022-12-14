import React from "react";
import { mocks, mockImages } from "./mock";
import camelize from "camelize";


export const restaurantsRequest = (location) => {

    return new Promise((resolve, reject) => {
        if (!location) { return; }

        const mock = mocks[location];
        if (!mock) {
            reject("Restaurant Not found!");
        }
        else {
            //console.log("restaurantsRequest",location, mock.results.length + " restaurants");
            resolve(mock);
        }
    })
};

const ICONS = {
    lodging: "bed",
    restaurant: "food",
    cafe: "cafe"
};


export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => { return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]; });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours ? restaurant.opening_hours.open_now : false,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            openingHours: null,
            //photos: [restaurant.icon],
            icon: 'bed', //ICONS[restaurant.icon.replace("https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/","").replace("-71.png","")],
            //rating:3,
        };
    });
    //console.log(camelize(mappedResults))
    return camelize(mappedResults)
};

restaurantsRequest()
    .then(restaurantsTransform)
    .then((transformedResult) => {
        //console.log("restaurantsRequest",transformedResult)
    })
    .catch((err) => console.error(err));
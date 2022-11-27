import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { MapSearch } from "../components/search.map.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";


const Map = styled(MapView)`
    flex: 1
`;

const SomeText = styled(Text)``;

export const MapScreen = () => {

    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);
    const [lngDelta, setLngDelta] = useState(0);

    const { lat, lng, viewport } = location;
    //console.log(viewport);
    useEffect(() => {

        const northeastLat = viewport.northeast.lat;
        const northeastLng = viewport.northeast.lng;
        const southwestLat = viewport.southwest.lat;
        const southwestLng = viewport.southwest.lng;

        const latDelta = northeastLat - southwestLat;
        const lngDelta = northeastLng - southwestLng;

        //console.log(northeastLat, northeastLng, southwestLat, southwestLng, lat, lng, latDelta, lngDelta);

        setLatDelta(latDelta);
        setLngDelta(lngDelta);



    }, [location, viewport]);


    return (
        <>
            <MapSearch></MapSearch>
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02, //lngDelta,
                }}>
                {
                    restaurants.map((restaurant) => {
                        return <MapView.Marker
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}
                            key={restaurant.name}
                            title={restaurant.name}
                        >
                            <MapCallout restaurant={restaurant} />
                            {/* <View><SomeText>{restaurant.name}</SomeText></View> */}
                        </MapView.Marker>
                    })
                }
            </Map>
        </>
    )

}


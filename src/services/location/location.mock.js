import React from "react";


export const locations = {
    anrwerp:{
        results:[
            {
                geometry:{
                    location:{
                        lat:51.219448,
                        lng:4.402464,
                    },
                    viewport:{
                        northeast:{
                            lat: 51.2145994302915,
                            lng: 4.41807413091502
                        },
                        southwest:{
                            lat: 51.2119014697085,
                            lng: 4.415376169708497
                        }
                    }
                }
            },
            
        ],
        status: "OK",
    },
    "san francisco":{
        results:[
            {
                geometry:{
                    location:{
                        lng:-122.421622,
                        lat:37.77361
                    },
                    viewport:{
                        northeast:{
                            lat: 37.76361,
                            lng: -122.321622
                        },
                        southwest:{
                            lat: 37.78361,
                            lng: -122.521622
                        }
                    }
                }
            },
            
        ],
        status: "OK",
    },
    chicago:{},
    toronto:{}
}
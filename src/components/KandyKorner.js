import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"


export default () => (
    <>
        <h2>Kandy Korner</h2>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
    
    </>
)
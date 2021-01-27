import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { LocationCard } from "./LocationsCard"
// import "./Location.css"



export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationList: useEffect getEmployees")
        getLocations()

    }, [])
  

    return (
        <div className="locations">
            {console.log("LocationList: Render", locations)}
            {
                locations.map((location) => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>
    )
}

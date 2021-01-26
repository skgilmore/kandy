import React from "react"
import { Link } from "react-router-dom"

// import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h2>Locations:</h2>
          <Link to={`/locations`}>
          
        </Link>
        <h3 className="location__footage">{location.sqFootage}</h3>
        <div className="location__address">{location.address}</div>

    </section>
)


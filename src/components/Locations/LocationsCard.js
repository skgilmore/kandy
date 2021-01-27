import React from "react"
import { Link } from "react-router-dom"

// import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        
          <Link to={`/locations`}>
          
        </Link>
        <h3 className="location__name">{location.name}</h3>
        <div className="location__footage">{location.sqFootage}</div>
        <div className="location__address">{location.address}</div>

    </section>
)


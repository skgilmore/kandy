import React from "react"
import { Link } from "react-router-dom"

// import "./Location.css"

export const EmployeeCard = ({ employee }) => (
    
    <section className="employee">

          <Link to={`/employees`}>
          
        </Link>
        <h3 className="employee__name">Name: {employee.name}</h3>
        {/* <div className="employee__price">{employee.}</div> */}
        <div className="employee__type">Location: {employee.location.name}</div>

    </section>
)
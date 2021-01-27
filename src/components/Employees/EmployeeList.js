import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeesContext } from "./EmployeesProvider"
import { EmployeeCard } from "./EmployeeCard"
// import "./Location.css"



export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeesContext)
    const history = useHistory()

    useEffect(() => {
        console.log("EmployeesList: useEffect getEmployees")
        getEmployees()

    }, [])
  

    return (
        <div>

        <button onClick={() => { history.push("/employees/create") }}>
           Add Employee
         </button>
        <div className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map((employee) => {
                    return <EmployeeCard  key={employee.id} employee={employee} />
                })
            }
        </div>
        </div>
    )
}

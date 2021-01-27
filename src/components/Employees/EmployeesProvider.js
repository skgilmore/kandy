import React, { useState, createContext } from "react"

export const EmployeesContext = createContext()

// This component establishes what data can be used.
export const  EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployees = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }
        /*
        You return a context provider which has the
        `locations` state, `getEmployees` function,
        and the `addCustomers` function as keys. This
        allows any child addEmployees to access them.
    */
   return (
    <EmployeesContext.Provider value={{
        employees, getEmployees, addEmployees
    }}>
        {props.children}
    </EmployeesContext.Provider>
)
}
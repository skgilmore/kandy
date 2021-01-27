import React, { useContext, useEffect, useState } from "react"
import { Checkbox } from 'react-input-checkbox';
import { LocationContext } from "../Locations/LocationsProvider"
import { EmployeesContext } from "../Employees/EmployeesProvider"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployees } = useContext(EmployeesContext)
    const { locations, getLocations } = useContext(LocationContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployees] = useState({
        name: "",
        manager: "",
        locationId: 0,
        fullTime: "",
        rate: ""
    });


    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
        console.log(locations,"what locations")

        getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
      
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = selectedVal
        // update state
        setEmployees(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location and a customer")
        } else {
            //invoke addEmployee passing employee as an argument.
            //once complete, change the url and display the employee list
            addEmployees(employee)
                .then(() => history.push("/employees"))
        }
    }
const Checkbox = (event) => {
    const fullTimeEmployee = { ...employee }
    let selection = event.target.value

    if ( event.target.name.includes("fullTime") ){
        selection = true
    }

        else {
            selection =false
        }
        fullTimeEmployee[event.target.id] = selection
    setEmployees(fullTimeEmployee)
}
const CheckboxMgmt = (event) => {
    const managerPerson = { ...employee }
    let selection = event.target.value

    if ( event.target.name.includes("manager") ){
        selection = true
    }

        else {
            selection =false
        }
        managerPerson[event.target.id] = selection
    setEmployees(managerPerson)
}
 

    
    
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                            
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Employee Rate of Pay:</label>
                    <input type="text" id="rate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Pay Rate?" value={employee.rate} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ft">Full Time:</label>
                    <input type="checkbox" id="fullTime" name ="fullTime"onChange={Checkbox} required autoFocus className="form-control" placeholder="Full Time" value={employee.fullTime} />
                </div>
                <div className="form-group">
                    <label htmlFor="ft">Part Time:</label>
                    <input type="checkbox" id="fullTime" name="partTime" onChange={Checkbox} required autoFocus className="form-control" placeholder="Part Time" value={employee.fullTime} />
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="Manager">Manager:</label>
                    <input type="checkbox" id="manager" name ="manager"onChange={CheckboxMgmt} required autoFocus className="form-control" placeholder="Full Time" value={employee.manager} />
                </div>
                <div className="form-group">
                    <label htmlFor="ft">Hourly:</label>
                    <input type="checkbox" id="manager" name="hourly" onChange={CheckboxMgmt} required autoFocus className="form-control" placeholder="Part Time" value={employee.manager} />
                </div>
                </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Save Employee
            </button>
        </form>
    )
}
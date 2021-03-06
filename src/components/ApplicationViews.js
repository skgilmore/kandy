import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./Locations/LocationsProvider"
import { LocationList } from "./Locations/LocationsList"
import { ProductList } from "./Products/ProductsList"
import { ProductProvider } from "./Products/ProductsProvider"
import { EmployeeProvider } from "./Employees/EmployeesProvider"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { EmployeeList } from "./Employees/EmployeeList"


export const ApplicationViews = () => {
    return (<>
        <Route exact path="/">
            <Home />
        </Route>

        <LocationProvider>
            <Route path="/locations">
                <h2>Locations:</h2>
                <LocationList />
            </Route>
        </LocationProvider>

        <ProductProvider>
            <Route path="/products">
            <h2>Products:</h2>
                <ProductList />
            </Route>
        </ProductProvider>

        <EmployeeProvider>
            <LocationProvider>
                <Route  path="/employees/create">
                    <h2>Employees:</h2>
                    <EmployeeForm />
                </Route>
            </LocationProvider>
        </EmployeeProvider>
        <EmployeeProvider>
            <Route   exact path="/employees">
            <h2>Employees:</h2>
                <EmployeeList />
            </Route>
        </EmployeeProvider>
    </>
    
    )
}
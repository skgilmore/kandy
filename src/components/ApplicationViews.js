import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./Locations/LocationsProvider"
import { LocationList } from "./Locations/LocationsList"
import { ProductList } from "./Products/ProductsList"
import { ProductProvider } from "./Products/ProductsProvider"


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
    </>
    )
}
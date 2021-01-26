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
                <LocationList />
            </Route>
        </LocationProvider>

        <ProductProvider>
            <Route path="/products">
                <ProductList />
            </Route>
        </ProductProvider>
    </>
    )
}
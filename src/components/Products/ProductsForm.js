
import React, { useContext, useEffect, useState } from "react"
import { Checkbox } from 'react-input-checkbox';
import { LocationContext } from "../Locations/LocationsProvider"
import { EmployeesContext } from "../Employees/EmployeesProvider"
import { useHistory } from 'react-router-dom';
import { CandyContext } from "../CustomerCandyProvider";


export const OrderForm = () => {
    const { addOrders, getOrders } = useContext(CandyContext)
    //   const { locations, getLocations } = useContext(LocationContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
 
    Define the intial state of the form inputs with useState()
    */

    const [order, setOrders] = useState(
        {
            id: "",
            productId: 0,
            customerId: 0
        }
    );


    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
        console.log(getOrders, "what orders")

        getOrders()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newOrder = { ...order }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newOrder[event.target.id] = selectedVal
        // update state
        setOrders(newOrder)
    }
    const placeOrder = () => {



        addOrders(order.id)
            .then(() => history.push("/orders"))
    }
    return (
        <section className="order">
            {/* <h3 className="order__name">{customer.name}</h3> */}
            {/* What's up with the question mark???? it allows the response to not exisit and
          not break the app. show it if its there if its not there just leave blank*/}
            <div className="order__product">Product: {order.product?.name}</div>
            <div className="animal__owner">Customer: {order.customer?.name}</div>
            <div>
                <button onClick={placeOrder}>Place Order</button>
                <button onClick={() => {
                    history.push(`/orders/detail/${order.id}`)
                }}>Edit</button>
            </div>
        </section>
    )
}
import React, { useState, createContext } from "react"

export const CandyContext = createContext()

// This component establishes what data can be used.
export const CandyOrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders?_expand=location")
        .then(res => res.json())
        .then(setOrders)
    }
    const getOrdersById = (id) => {
        return fetch(`http://localhost:8088/orders/${id}?_embed=customers&_embed=products`)
            .then(res => res.json())
    }

    const addOrders = orderObject => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObject)
        })
        .then(getOrders)
    }
    const updateOrders = order => {
        return fetch(`http://localhost:8088/orders/${order.id}?_embed=customers&_embed=products"`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(order)
        })
          .then(getOrders)
      }  
        /*
        You return a context provider which has the
        `orders` state, `getOrders` function,
        and the `addCustomers` function as keys. This
        allows any child addOrders to access them.
    */
   return (
    <CandyContext.Provider value={{
        orders, getOrders, addOrders, updateOrders, getOrdersById
    }}>
        {props.children}
    </CandyContext.Provider>
)
}
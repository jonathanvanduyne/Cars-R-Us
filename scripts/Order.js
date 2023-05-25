import { transientState } from "./transientState.js"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generate order button//

export const saveOrder = () => {

    document.addEventListener("click", handleOrderClick)
    return `<br><input type='button' class='button' id='orderbutton' value='Create Custom Order'/>`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create a function to post a new order to the JSON database when clicked on//

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderSubmitted")
    document.dispatchEvent(customEvent)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//handle the order button click event//

const handleOrderClick = async (clickEvent) => {
    if (clickEvent.target.id === "orderbutton") {
        if (transientState.interiorId !== null && transientState.wheelId !== null && transientState.paintColorId !== null && transientState.technologyId !== null && transientState.typeId !== null) {
            placeOrder()
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generate the orders dynamic html linked to the json server//
//fix the problems here in the fetch
export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=technology&_expand=wheel&_expand=type")
    const orders = await response.json()

    let ordersHTML = orders.map(
        (order) => {
            let orderPrice = order.technology.price + order.paintColor.price + order.interior.price + order.wheel.price
            if (transientState.typeId = 1) {
                orderPrice = orderPrice
            }
            else if (transientState.typeId = 2) {
                orderPrice = (orderPrice * 1.5)
            }
            else if (transientState.typeId = 3) {
                orderPrice = (orderPrice * 2.25)
            }

            const formattedPrice = orderPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })
            return `<div>
            Order #${order.id} costs ${formattedPrice}
            </div>`

        }
    )

    return ordersHTML.join(" ")
}
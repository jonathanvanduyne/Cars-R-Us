import { interiorOptions } from "./Interior.js"
import { Orders, saveOrder } from "./Order.js"
import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js"
import { typeOptions } from "./Types.js"
import { wheelOptions } from "./Wheels.js"

let container = document.querySelector("#container")

const render = async () => {
    const paintHTML = await paintOptions()
    const interiorHTML = await interiorOptions()
    const wheelHTML = await wheelOptions()
    const technologyHTML = await technologyOptions()
    const typeHTML = await typeOptions()
    const orderButtonHTML = await saveOrder()
    const customOrderHTML = await Orders()

    const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices_paints">
                <h2>Paints:</h2>
               ${paintHTML}
            </section>

            <section class="choices_interiors">
                <h2>Interior:</h2>
                ${interiorHTML}
            </section>

            <section class="choices_wheels">
                <h2>Wheels:</h2>
                ${wheelHTML}
            </section>
           
            <section class="choices_technologies">
                <h2>Technologies:</h2>
                ${technologyHTML}
            </section>
            
            <section class="choices_types">
                <h2>Types:</h2>
                ${typeHTML}
            </section>
        </article>
            

        <article class="order">
           ${orderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <br>
       ${customOrderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

//custom event listener to determine if the button was clicked, if it is then re-render the html to update
document.addEventListener("newOrderSubmitted", (event) => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
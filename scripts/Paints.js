import { setPaintState } from "./transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paints = await response.json()

let paintHTML = `<select class = "select" id="paints">
<option value="0">Select</option>`

    // Use map() to generate new array of strings
    const divStringArray = paints.map(
        (paint) => {
            return `
                <option id="paints" value="${paint.id}">${paint.color}</option>`
        }
        )

        paintHTML += divStringArray.join("")
        paintHTML += `</select>`

        document.addEventListener("change", handlePaintChanges)

    return paintHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handlePaintChanges = (changeEvent) => {
    if (changeEvent.target.id === "paints") {
        const chosenPaint = changeEvent.target.value
        setPaintState(parseInt(chosenPaint))
    }
}
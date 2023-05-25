import { setInteriorState } from "./transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

let interiorHTML = `<select class = "select" id="interiors">
<option value="0">Select</option>`

    // Use map() to generate new array of strings
    const divStringArray = interiors.map(
        (interior) => {
            return `
                <option id="interiors" value="${interior.id}">${interior.type}</option>`
        }
        )

        interiorHTML += divStringArray.join("")
        interiorHTML += `</select>`

        document.addEventListener("change", handleInteriorChanges)

    return interiorHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleInteriorChanges = (changeEvent) => {
    if (changeEvent.target.id === "interiors") {
        const chosenInterior = changeEvent.target.value
        setInteriorState(parseInt(chosenInterior))
    }
}
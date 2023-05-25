import { setWheelState } from "./transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

let wheelHTML = `<select class = "select" id="wheels">
<option value="0">Select</option>`

    // Use map() to generate new array of strings
    const divStringArray = wheels.map(
        (wheel) => {
            return `
                <option id="wheels" value="${wheel.id}">${wheel.wheel}</option>`
        }
        )

        wheelHTML += divStringArray.join("")
        wheelHTML += `</select>`

        document.addEventListener("change", handleWheelsChanges)

    return wheelHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleWheelsChanges = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
        const chosenWheels = changeEvent.target.value
        setWheelState(parseInt(chosenWheels))
    }
}
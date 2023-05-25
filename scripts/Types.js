import { setTypeState } from "./transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const typeOptions = async () => {
    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    let typeHTML = `<select class = "select" id="type">
<option value="0">Select</option>`

    // Use map() to generate new array of strings
    const divStringArray = types.map(
        (type) => {
            return `
                <option class="type" value="${type.id}">${type.type}</option>`
        }
    )

    typeHTML += divStringArray.join("")
    typeHTML += `</select>`

    document.addEventListener("change", handletypeChanges)

    return typeHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handletypeChanges = (changeEvent) => {
    if (changeEvent.target.id === "type") {
        const chosentype = changeEvent.target.value
        setTypeState(parseInt(chosentype))
    }
}
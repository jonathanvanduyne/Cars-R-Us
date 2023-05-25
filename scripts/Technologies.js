import { setTechnologyState } from "./transientState.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let technologyHTML = `<select class="select" id="technology">
<option value="0">Select</option>`

    // Use map() to generate new array of strings
    const divStringArray = technologies.map(
        (technology) => {
            return `
                <option value="${technology.id}">${technology.package}</option>`
        }
    )

    technologyHTML += divStringArray.join("")
    technologyHTML += `</select>`

    document.addEventListener("change", handleTechnologyChanges)

    return technologyHTML
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleTechnologyChanges = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        const chosentechnology = changeEvent.target.value
        setTechnologyState(parseInt(chosentechnology))
    }
}
export const transientState = {
    "paintColorId": null,
    "interiorId": null,
    "wheelId": null,
    "technologyId": null,
    "typeId": null
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const setPaintState = (chosenPaint) => {
    transientState.paintColorId = chosenPaint
    console.log(transientState)
}

export const setInteriorState = (choseninterior) => {
    transientState.interiorId = choseninterior
    console.log(transientState)
}

export const setWheelState = (chosenwheel) => {
    transientState.wheelId = chosenwheel
    console.log(transientState)
}

export const setTechnologyState = (chosentechnology) => {
    transientState.technologyId = chosentechnology
    console.log(transientState)
}

export const setTypeState = (chosentype) => {
    transientState.typeId = chosentype
    console.log(transientState)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////       
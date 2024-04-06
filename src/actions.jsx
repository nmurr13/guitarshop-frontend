import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newGuitar = {
        brand: formData.get("brand"),
        guitarname: formData.get("guitarname"),
        year: formData.get("year"),
        origin: formData.get("origin"),
        finish: formData.get("finish"),
        fretboardtype: formData.get("fretboardtype"),
        bodymaterial: formData.get("bodymaterial"),
        pickups: formData.get("pickups"),
        price: formData.get("price"),
        condition: formData.get("condition"),
        seller: formData.get("seller"),
        img: formData.get("img"),


    }

    // send request to the our backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGuitar)
    })

    // redirect back to the index
    return redirect("/")
}

// Update Action updating a guitar from a form submission to `update/:id`
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    // get the guitar id
    const id = params.id
    // construct the request body
    const updatedGuitar = {
        brand: formData.get("brand"),
        guitarname: formData.get("guitarname"),
        finish: formData.get("finish"),
        year: formData.get("year"),
        origin: formData.get("origin"),
        fretboardtype: formData.get("fretboardtype"),
        bodymaterial: formData.get("bodymaterial"),
        pickups: formData.get("pickups"),
        price: formData.get("price"),
        condition: formData.get("condition"),
        seller: formData.get("seller"),
        img: formData.get("img"),
    }
    // send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedGuitar)
    })
    // redirect to the Show page
    return redirect(`/`)
}
// Delete Action from a form submission to `delete/:id`
export const deleteAction = async ({params}) => {
    // get the guitar id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}
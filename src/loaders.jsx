
const URL = import.meta.env.VITE_BASE_URL

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allGuitars = await response.json()
    return allGuitars
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}${params.id}`)
    const aGuitar = await response.json()
    return aGuitar
}


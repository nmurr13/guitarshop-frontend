import { Link } from "react-router-dom"

export default function Guitar({ guitar }) {

    const id = guitar.url.split('/')[4]

    
    return (
        <div>
            <Link to={`/guitars/${id}`}>
                <h1>{guitar.brand} - {guitar.guitarname}</h1>
            </Link>
        </div>
    )
}
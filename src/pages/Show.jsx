import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aGuitar = useLoaderData()

    // optional chaining ?.
    const id = aGuitar?.url.split("/")[4]
    return (
        <div>
            <h1>{aGuitar.brand} - {aGuitar.guitarname}</h1>

            <div>
                {/* Update form */}
                <Form action={`/update/${id}/`} method="POST">
                <label htmlFor="brand">
                Brand Name
                <input type="text" name="brand" id="brand" defaultValue={aGuitar.brand}/>
            </label>
            <label htmlFor="guitarname">
                Model Name
                <input type="text" name="guitarname" id="guitarname" defaultValue={aGuitar.guitarname}/>
            </label>
            <label htmlFor="finish">
                Finish
                <input type="text" name="finish" id="finish" defaultValue={aGuitar.finish}/>
            </label>
            <label htmlFor="year">
                Year
                <input type="number" name="year" id="year" defaultValue={aGuitar.year}/>
            </label>
            <label htmlFor="origin">
                Country of Origin
                <input type="text" name="origin" id="origin" defaultValue={aGuitar.origin}/>
            </label>
            <label htmlFor="fretboardtype">
                Fretboard Type
                <input type="text" name="fretboardtype" id="fretboardtype" defaultValue={aGuitar.fretboardtype}/>
            </label>
            <label htmlFor="bodymaterial">
                Body Material
                <input type="text" name="bodymaterial" id="bodymaterial" defaultValue={aGuitar.bodymaterial}/>
            </label>
            <label htmlFor="pickups">
                Pickups
                <input type="text" name="pickups" id="pickups" defaultValue={aGuitar.pickups}/>
            </label>
            <label htmlFor="price">
                Price
                <input type="text" name="price" id="price" defaultValue={aGuitar.price}/>
            </label>
            <label htmlFor="condition">
            Condition
                <input type="text" name="condition" id="condition" defaultValue={aGuitar.condition}/>
            </label>
            <label htmlFor="seller">
                Seller
                <input type="text" name="seller" id="seller" defaultValue={aGuitar.seller}/>
            </label>
            <label htmlFor="img">
                Img Url
                <input type="text" name="img" id="img" defaultValue={aGuitar.img}/>
            </label>
            <button>Update Guitar</button>
        </Form>

                {/* Delete Form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Delete Guitar</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

import { Form, Link, useLoaderData } from "react-router-dom"
function Edit() {
    const guitar = useLoaderData()

    const id = guitar.url.split("/")[4]
    return(
<div>
        <h2>Update a Guitar</h2>
        <Form action={`/update/${id}/`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write subject here"
            defaultValue={post.brand}
          />
          <input
            type="text"
            name="details"
            placeholder="write details here"
            defaultValue={guitar.guitarname}
          />
          <button>Update Guitar</button>
        </Form>
</div>)
}
export default Edit;
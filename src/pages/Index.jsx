import Guitar from "../components/Guitar";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const allGuitars = useLoaderData()
 return <>
    <div>
        <h1>GUITAR GARAGE</h1>
        <img src="guitargarage.png"></img>
        <Form action={"create/"} method="POST">
            <label htmlFor="brand">
                Brand Name
                <input type="text" name="brand" id="brand" />
            </label>
            <label htmlFor="guitarname">
                Model Name
                <input type="text" name="guitarname" id="guitarname" />
            </label>
            <label htmlFor="finish">
                Finish
                <input type="text" name="finish" id="finish" />
            </label>
            <label htmlFor="year">
                Year
                <input type="number" name="year" id="year" />
            </label>
            <label htmlFor="origin">
                Country of Origin
                <input type="text" name="origin" id="origin" />
            </label>
            <label htmlFor="fretboardtype">
                Fretboard Type
                <input type="text" name="fretboardtype" id="fretboardtype" />
            </label>
            <label htmlFor="bodymaterial">
                Body Material
                <input type="text" name="bodymaterial" id="bodymaterial" />
            </label>
            <label htmlFor="pickups">
                Pickups
                <input type="text" name="pickups" id="pickups" />
            </label>
            <label htmlFor="price">
                Price
                <input type="text" name="price" id="price" />
            </label>
            <label htmlFor="condition">
            Condition
                <input type="text" name="condition" id="condition" />
            </label>
            <label htmlFor="seller">
                Seller
                <input type="text" name="seller" id="seller" />
            </label>
            <label htmlFor="img">
                Img Url
                <input type="text" name="img" id="img" />
            </label>
            <button>Add New Guitar</button>
        </Form>
  </div>
  <h1>LIST OF GUITARS</h1>
  {allGuitars.map((guitar, i) => <Guitar guitar={guitar} key={i}/>)}
</>
};

export default Index;
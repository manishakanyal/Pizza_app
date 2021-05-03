import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import Pizzaman from "../image/PizzaMan.png"

export default function Checkouts({ingredients}) {
    const history = useHistory()
    const [success, setSuccess] = useState(false)
    return (
        <div style={{display: "flex"}}>
            <div>
                <div>
                    <h1>My ingredients</h1>
                    {Object.keys(ingredients).map((ingredient) => {
                       return (
                           ingredients[ingredient] && (
                       <p>{ingredient[0].toUpperCase()}
                        {ingredient.substring(1)}
                        </p>))
                    })}
                    <button onClick={()=> setSuccess(true)}
                    className="proceedToCheckout"
                    >
                      Confirm  
                    </button>
                    <button onClick={()=>history.push("/")}
                    className="proceedToCheckout"
                    >
                      Go Back  
                    </button>
                </div>
            </div>
            <div style={{ flex: 1 }}>
           {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
        </div>
        </div>
    )
}

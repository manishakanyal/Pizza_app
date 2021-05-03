import React from 'react'
import Cheese from "../image/BaseCheese.png";
import Base from "../image/PizzaBase.png";
import Olive from "../image/Olive.png";
import Pineapple from "../image/Pineapple.png";
import Mushroom from "../image/Mushroom.png";
import Basil from "../image/Basil.png";
import Tomato from "../image/Tomato.png";
import { motion } from 'framer-motion';
import {useHistory} from "react-router-dom"
 
        
const Customize = ({ingredients, setIngredients}) => {
    let history = useHistory()

    const onChange = (event,name) =>{
      console.log(localStorage)
        let newIngredients = JSON.parse(JSON.stringify(ingredients))
        // toggle that ingredient
        newIngredients[name] = event
        setIngredients(newIngredients)
        localStorage.setItem('ingredients',JSON.stringify(newIngredients))
    }
              
    return (
        <div style={{display: "flex"}}>
            <div style={{border:'2px solid black', flex: 1}}>
                <div style={{maxHeight: 500,maxWidth: 500, position: "relative"}}>
               <motion.div
                initial = {{opacity: 0}}
                animate={{
                    y: ingredients["cheese"] ? 100 : -100,
                    opacity:ingredients["cheese"] ? 1 : 0,
                    scale: ingredients["cheese"] ? 1 : 0,
                }}
                transition={{duration: 0.3}}
                className= "cheese z1"
               >
                <img src={Cheese} 
                alt="cheese"  
                height="100%" 
                width="100%" 
                />
               </motion.div>

               <motion.div
               initial = {{opacity: 0}}
               animate={{
                   y: ingredients["olive"] ? 100 : -100,
                   opacity:ingredients["olive"] ? 1 : 0,
               }}
               transition={{duration: 1}}
               className= "ingredients z4"
               >
               <img src={Olive} 
                alt="pizza base" 
                height="100%" 
                width="100%" 
                />
               </motion.div>
                
                <motion.div
                initial = {{opacity: 0}}
                animate={{
                    y: ingredients["pineapple"] ? 100 : -100,
                    opacity:ingredients["pineapple"] ? 1 : 0,
                }}
                transition={{duration: 1}}
                className= "ingredients z4"
                >
                <img src={Pineapple} 
                alt="pizza base" 
                height="100%" 
                width="100%" 
                />
                </motion.div>
                
                <motion.div
                initial = {{opacity: 0}}
                animate={{
                    y: ingredients["mushroom"] ? 100 : -100,
                    opacity:ingredients["mushroom"] ? 1 : 0,
                }}
                transition={{duration: 1}}
                className= "ingredients z4"
                >
                <img src={Mushroom} 
                alt="pizza base" 
                height="100%" 
                width="100%" 
                />
                </motion.div>

                 <motion.div 
                  initial = {{opacity: 0}}
                  animate={{
                      y: ingredients["basil"] ? 100 : -100,
                      opacity:ingredients["basil"] ? 1 : 0,
                  }}
                  transition={{duration: 1}}
                  className= "ingredients z4"
                >
                <img src={Basil} 
                alt="pizza base" 
                height="100%" 
                width="100%" 
                />
                </motion.div>

                <motion.div
                initial = {{opacity: 0}}
                animate={{
                    y: ingredients["tomato"] ? 100 : -100,
                    opacity:ingredients["tomato"] ? 1 : 0,
                }}
                transition={{duration: 1}}
                className= "ingredients z4"
                >
                <img src={Tomato} 
                alt="pizza base" 
                height="100%" 
                width="100%" 
                />
                </motion.div>

                <img src={Base} 
                alt="pizza base" 
                height="100%" 
                width="100%"
                />
              

                </div>
            </div>
            <div style={{ border:'2px solid black', flex: 1 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button onClick={()=>history.push("/checkouts")}
        className="proceedToCheckout"
        >
            Poceed to checkout
        </button>
        </div>
       
        </div>
    )
}
export default Customize

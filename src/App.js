import React,{useState,useEffect} from 'react'
import './index.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Customize from './components/Customize';
import Checkouts from './components/Checkouts';


function App() {
  const [ingredients, setIngredients] = useState({
   
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false

  })
  useEffect(()=>{
  const data = localStorage.getItem('ingredients')
    if(data){
     setIngredients(JSON.parse(data))
    }
 console.log(data)
  },[])
  return (
    <div className="App">
      <Header/>
      <Router>
      <Switch>
          <Route exact path="/">
            <Customize 
            ingredients={ingredients}
            setIngredients ={setIngredients}
            />
            
          </Route>
          <Route path="/checkouts">
           <Checkouts ingredients={ingredients}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

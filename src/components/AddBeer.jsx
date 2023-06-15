import Header from "./Header"
import React, { useState, useEffect } from 'react';
import axios from "axios";




function AddBeer(){
    const[name, Setname] = useState()
    const[tagline, Settagline] = useState()
    const[first_brewed,Setfirst_brewed] = useState()

    const handlenameInput = e => Setname(e.target.value);
 
  const handletaglineInput = e => Settagline(e.target.value);
 
  const handlefirst_brewedInput = e => Setfirst_brewed(e.target.value);

  const handleSubmit = (e) => {        
    e.preventDefault();
    const body = { name: name, tagline:tagline, first_brewed:first_brewed };

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
    .then((response) => {
      // Reset the state
      Setname("");
      Settagline("");
      Setfirst_brewed("")
    });
 
    console.log("Submitted: ", body);
  }
    
    return(
        <>
        <Header/>

    <div className="">
      <h4>Add a Beer</h4>
  
      <form>
        <label>Name: </label>
        <input 
            type="text" 
            name="title" 
            value={name} 
            onChange={handlenameInput}
        />
        
  
        <label>tagline: </label>
        <input 
            type="text" 
            name="director" 
            value={tagline} 
            onChange={handletaglineInput}
        />
  
        <label>first_brewed: </label>
        <input 
            type="text" 
            name="IMDBRating" 
            value={first_brewed} 
            onChange={handlefirst_brewedInput}
        />
  
       
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>

        </>
        

    )


}

export default AddBeer
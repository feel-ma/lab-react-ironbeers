import Header from "./Header"
import React, { useState, useEffect } from 'react';



function AddBeer(){
    const[name, Setname] = useState()
    const[tagline, Settagline] = useState()
    const[first_brewed,Setfirst_brewed] = useState()
    
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
        />
        
  
        <label>tagline: </label>
        <input 
            type="text" 
            name="director" 
            value={tagline} 
        />
  
        <label>first_brewed: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={first_brewed} 
        />
  
       
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>

        </>
        

    )


}

export default AddBeer
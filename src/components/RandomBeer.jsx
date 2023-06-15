import Header from "./Header"
import React, { useState, useEffect } from 'react';
import axios from "axios";


function RandomBeer(){

    const [randomBeer, SetRandomBeer] = useState({})


  
      useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then((response) => {
            SetRandomBeer(response.data);
           
          })
          .catch((error) => {
            console.error("Error fetching beers:", error);
          });
      }, []);



    
    return(
        <>
        <Header/>

        <div>
            <img src={randomBeer.image_url} alt="" />
            <div><p>{randomBeer.name}</p> <p>{randomBeer.attenuation_level}</p></div>
            <div><p>{randomBeer.tagline}</p> <p>{randomBeer.first_brewed}</p></div>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
        </>
        
        

    )


}

export default RandomBeer
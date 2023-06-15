import Header from "./Header"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Beers(){

    const [beers, SetBeers] = useState([])


/*   useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) =>{ SetBeers(response)
    console.log(Beers)}
      )
  }, []); */

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        SetBeers(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching beers:", error);
      });
  }, []);

  useEffect(()=>{
    console.log(beers);
  })


    
    return(
        <>
        <Header/>

        {
            beers.map((beer)=>(
                <div key={beer._id}>
                    <img style={{height:250}} src={beer.image_url} alt="" />
                    <div>
                        <Link to={`/beers/:${beer._id}`}>{beer.name}</Link>
                        <p>{beer.tagline}</p>
                        <div><p>Created by: {beer.contributed_by}</p></div>
                    </div>
                </div>
            ))
        }
        </>
        

    )

}

export default Beers
import Header from "./Header"
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";



function SingleBeer(){

    const [beer, setBeer] =  useEffect()

    const params = useParams();

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
          .then((response) => {
            setBeer(response.data);
           
          })
          .catch((error) => {
            console.error("Error fetching beers:", error);
          });
      }, []);
    
    return(
        <>
        <Header/>
        <div>
            <div>
              <img src={beer.image_url} alt="" />
            </div>
        </div>
        </>
        

    )


}

export default SingleBeer
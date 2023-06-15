import { Link } from "react-router-dom"
import beersImage from "../assets/beers.png";
import RandomImage from "../assets/random-beer.png"
import NewImage from "../assets/new-beer.png"

function Home(){
    
    return(

        <div>
        <div>
          <img src={beersImage} alt="" />
          <Link to="/beers"> All Beers</Link>
          <p></p>
        </div>
        <div>
          <img src={RandomImage} alt="" />
          <Link to="/random-beer"> Random Beer</Link>
          <p></p>
        </div>
        <div>
          <img src={NewImage} alt="" />
          <Link to="/new-beer"> Add new Beer</Link>
          <p></p>
        </div>
  
  
  
      </div>
        
    )

}

export default Home
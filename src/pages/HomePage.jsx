import { Link } from "react-router-dom";
import beersPicture from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="home-page">
      <Link to={"/beers"}>
        <img src={beersPicture} alt="beers-picture" className="beers-picture" />
        <br />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          risus fermentum, scelerisque enim consequat, finibus sem. Duis varius
          condimentum rutrum.
        </p>
      </Link>
      <br />
      <Link to={"/random-beer"}>
        <img
          src={randomBeer}
          alt="random-beer-picture"
          className="random-beer-picture"
        />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          risus fermentum, scelerisque enim consequat, finibus sem. Duis varius
          condimentum rutrum.
        </p>
      </Link>
      <br />
      <Link to={"/new-beer"}>
        <img
          src={newBeer}
          alt="new-beer-picture"
          className="new-beer-picture"
        />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          risus fermentum, scelerisque enim consequat, finibus sem. Duis varius
          condimentum rutrum.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;

import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
  const [randomBeer, serRandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      serRandomBeer(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <img
        src={randomBeer.image_url}
        alt="beerImage"
        className="beer-image"
        width={100}
      />
      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;

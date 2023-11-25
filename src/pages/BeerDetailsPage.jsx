import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const params = useParams();
  console.log(params.beerId);

  const [beerDetails, setBeerDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [params.beerId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      setBeerDetails(response.data);
      setIsLoading(false);
      console.log(response.data);
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
        src={beerDetails.image_url}
        alt="beerImage"
        className="beer-image"
        width={100}
      />
      <h1>{beerDetails.name}</h1>
      <h2>{beerDetails.tagline}</h2>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;

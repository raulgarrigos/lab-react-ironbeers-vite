import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beersList, setBeersList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeersList(response.data);
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
      {beersList.map((eachBeer) => {
        return (
          <div className="beer-card">
            <Link to={`./beers/${eachBeer._id}`} key={eachBeer._id}>
              <img
                src={eachBeer.image_url}
                alt="beerImage"
                className="beer-image"
                width={100}
              />
              <div className="beer-info">
                <h1>{eachBeer.name}</h1>
                <h2>{eachBeer.tagline}</h2>
                <p>
                  <strong>Created by:</strong> {eachBeer.contributed_by}
                </p>
              </div>
              <hr />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;

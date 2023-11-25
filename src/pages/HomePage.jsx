import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav>
      <Link to={"/beers"}>All Beers</Link>
      <br />
      <Link to={"/random-beer"}>Random Beer</Link>
      <br />
      <Link to={"/new-beer"}>New Beer</Link>
    </nav>
  );
}

export default HomePage;

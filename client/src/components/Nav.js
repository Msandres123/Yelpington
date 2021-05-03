import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//Nav-Bar component allows user to go from one restuarant page to another or back home
function Nav(props) {
  // state property used to set restaurant information based upon api id
  const [restuarants, setRestuarants] = useState([]);
  // fetches rerstaurant names from restaurant json file
  useEffect(() => {
    if (restuarants.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          setRestuarants(restList);
        });
    }
  });
  //function used to sanitize restaurant names displayed in nav-bar
  const handleName = (name) => {
    let nameArray = name.split("-");
    nameArray = nameArray.map((name) => name[0].toUpperCase() + name.slice(1));
    return nameArray.join(" ");
  };
  //JSX HTML
  return (
    <div>
      {/* list links for the restaurants as well as home page */}
      <ul id="nav-style">
        <h5>
          {/* link sends user back to home page */}
          <Link to="/">Home</Link>
        </h5>
        {/*  list restaurants in nav bar based on ids fetched from restaurant.json file in api folder and links them accordingly */}
        {restuarants.map((name, index) => {
          return (
            <h5 key={index}>
              <Link to={`/restaurant/${name}`}>{handleName(name)}</Link>
            </h5>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;

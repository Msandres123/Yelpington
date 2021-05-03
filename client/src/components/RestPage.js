import { useState, useEffect } from "react";
import Map from "./Map";

function RestPage(props) {
  //state properties used to set restaurant information based upon which restaurant is selected
  const [restInfo, setRestInfo] = useState({});
  const [restaurantId, setRestaurantId] = useState(null);
  //useEffect used to fetch information from individual restaurant json file based upon the url/restaurant selected
  useEffect(() => {
    if (restaurantId !== props.match.params.id) {
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restDetails) => {
          setRestInfo(restDetails);
          setRestaurantId(props.match.params.id);
        });
    }
  });
  //JSX HTML
  return (
    <>
      <div id="rest-wrap">
        {/* Header displaying the restaurant name */}
        <h1>{restInfo.name}</h1>
        <div id="rest-info-map">
          <div id="rest-map">
            {/* ternary operated used to allow time for page to fetch infromation/cordinates to be displayed on the map */}
            {restInfo.lat ? (
              <Map
                markerLat={restInfo.lat}
                markerLon={restInfo.lon}
                restName={restInfo.name}
                restAdd={restInfo.address}
              />
            ) : (
              "loading data"
            )}
          </div>
          {/* restuarant information displayed beside the map */}
          <div id="rest-info">
            <h3> Address: {restInfo.address}</h3>
            <h3>Phone Number: {restInfo.phone}</h3>
            <h3>Hours: {restInfo.hours}</h3>
            <p>
              {" "}
              <b>What People Say</b>: {restInfo.notes}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestPage;

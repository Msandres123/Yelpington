// Map functions imported from react leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Link imported from react-router-dom to allow user to click on marker popup and then directs them to the restaurant info page
import { Link } from "react-router-dom";

// function for the home page
function Home(props) {
  return (
    //  JSX HTML
    <div id="home-style">
      {/*Header for the home page*/}
      <h3>Burlington's Number 1 Restuarant Guide</h3>
      {/* Leaflet Map for the Home page containing  */}
      <MapContainer
        center={[44.475883, -73.212074]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "500px" }}
      >
        {/* Tilelayer from leaflet displays the map in a certain style */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Hard coded in map markers for each restuarant using the establishments lat/lon cordinates*/}
        {/* Marker for Henry St Deli */}
        <Marker position={[44.48401, -73.20524]}>
          <Popup>
            {/*Link on popup leading to henry st deli page */}
            <Link to={"/restaurant/henry-street-deli"}>Henry Street Deli</Link>
          </Popup>
        </Marker>
        {/* Marker for juniper restaurant */}
        <Marker position={[44.4790187, -73.2176074]}>
          <Popup>
            {/*Link on popup leading to junpir restaurant page */}
            <Link to={"/restaurant/juniper"}>Juniper</Link>
          </Popup>
        </Marker>
        {/* Marker for leunig's bistro page */}
        <Marker position={[44.47725, -73.21278]}>
          <Popup>
            {/*Link on popup leading to leunig's bistro page */}
            <Link to="/restaurant/leunig's-bistro">Leunig's Bistro</Link>
          </Popup>
        </Marker>
        {/* Marker for pho hong */}
        <Marker position={[44.48892, -73.20717]}>
          <Popup>
            {/*Link on popup leading to pho hong page*/}
            <Link to="/restaurant/pho-hong">Pho Hong</Link>
          </Popup>
        </Marker>
        {/* Marker for pizzeria verta */}
        <Marker position={[44.47522, -73.2136]}>
          <Popup>
            {/*Link on popup leading to pizzeria verta page*/}
            <Link to={"/restaurant/pizzeria-verta"}>Pizzeria Verta</Link>
          </Popup>
        </Marker>
        {/* Marker for three needs */}
        <Marker position={[44.480318, -73.21167]}>
          <Popup>
            {/*Link on popup leading to  three needs page*/}
            <Link to={"/restaurant/three-needs"}>Three Needs</Link>
          </Popup>
        </Marker>
        {/* Marker for the skinny pancake*/}
        <Marker position={[44.477, -73.219528]}>
          <Popup>
            {/*Link on popup leading to skinny pancake page*/}
            <Link to={"/restaurant/skinny-pancake"}>Skinny Pancake</Link>
          </Popup>
        </Marker>
        {/* Marker for tac gordo */}
        <Marker position={[44.48598, -73.20995]}>
          <Popup>
            {/*Link on popup leading to taco gordo page */}
            <Link to={"/restaurant/taco-gordo"}>Taco-Gordo</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Home;

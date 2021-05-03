//Necessary components from react leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Function used to center the map
import MapCenter from "./MapCenter";

//Map Functionality//
function Map(props) {
  return (
    //Map container from leaflet
    <MapContainer
      center={[props.markerLat, props.markerLon]}
      zoom={18}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "700px" }}
    >
      {/*Function centers map on restaurant location after the user views a new restuarant*/}
      <MapCenter center={[props.markerLat, props.markerLon]} />
      {/* Determines the style of the leaflet map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker displayed on map according to the lat/lon cordinates  */}
      <Marker position={[props.markerLat, props.markerLon]}>
        {/* popup displays the restaurant's name and address when clicked */}
        <Popup>
          {props.restName} <br /> {props.restAdd}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

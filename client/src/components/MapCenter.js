import { useMap } from "react-leaflet";
//Function used to center the map according to the specific restuarant location based on lat and lon
function MapCenter(props) {
  //UseMap is a hook provided by leaflet which allows the view point to be altered
  const map = useMap();
  map.setView(props.center);
  return null;
}
export default MapCenter;

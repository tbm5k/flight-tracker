import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

let latitude = -1.278286791538775
let longitude = 36.81009696210602

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: latitude, lng: longitude }}
  >
    <Marker
      position={{ lat: latitude, lng: longitude }}
    />
  </GoogleMap>
));
export default Map
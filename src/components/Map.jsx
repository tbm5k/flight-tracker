import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const Map = () => {

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -1.278286791538775,
    lng: 36.81009696210602
  };
    
  return(
    <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <FontAwesomeIcon icon={faPlane} style={{width: '40px', height:'40px', color: 'purple'}}/>
          </OverlayView>
        </GoogleMap>
      </LoadScript>
  )
}
  

export default Map
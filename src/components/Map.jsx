import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';

const Map = props => {

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -1.278286791538775,
    lng: 36.81009696210602
  };
  
  const onClick = () => {
    console.info('I have been clicked!')
  };
  
  const divStyle = {
    background: 'white',
    border: '1px solid #ccc',
    padding: 15
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
            <div style={divStyle}>
              <h1>OverlayView</h1>
              <button
                onClick={onClick}
                type='button'
              >
                Click me
              </button>
            </div>
          </OverlayView>
        </GoogleMap>
      </LoadScript>
  )
}
  

export default Map
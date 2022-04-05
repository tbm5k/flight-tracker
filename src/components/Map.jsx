import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import InfoBar from './InfoBar'
import { useEffect, useState } from 'react';

const Map = () => {

  const [planes, setPlanes] = useState([])
  const [plane, setPlane] = useState({})

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch(`https://airlabs.co/api/v9/flights?api_key=${process.env.REACT_APP_AIRLABS_KEY}`)
    .then( res => res.json())
    .then( data => {
      setPlanes(data.response.slice(300, 400))
    })
    .catch(err => console.log(err))
  }

  const handleClick = flightData => {
    setPlane(flightData)
  }

  return(
    <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: 46.95168156778651, lng: 7.689743550062828}}
          zoom={6}
        >
          {
            planes !== undefined ? (
              planes.map( plane => (
                <OverlayView 
                  key={plane.hex}
                  position={{lat: plane.lat, lng: plane.lng}}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <FontAwesomeIcon icon={faPlane} style={{width: '30px', height:'30px', color: 'purple'}} onClick={() => handleClick(plane)}/> 
                </OverlayView>
            ))) : null
          }
          <InfoBar flight={plane}/>
        </GoogleMap>
      </LoadScript>
  )
}
  

export default Map
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import InfoBar from './InfoBar'
import { useEffect, useState } from 'react';

const Map = () => {

  const [planes, setPlanes] = useState([])

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch(`https://airlabs.co/api/v9/flights?_view=array&_fields=hex,flag,lat,lng,dir,alt&api_key=${process.env.REACT_APP_AIRLABS_KEY}`)
    .then( res => res.json())
    .then( data => {
      setPlanes(data.slice(300, 400))
    })
    .catch(err => console.log(err))
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
          {console.log(planes)}
          {
            planes !== undefined ? (
              planes.map( plane => (
                <OverlayView 
                  key={plane[0]}
                  position={{lat: plane[2], lng: plane[3]}}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <FontAwesomeIcon icon={faPlane} style={{width: '30px', height:'30px', color: 'purple'}}/> 
                </OverlayView>
            ))) : null
          }
          <InfoBar />
        </GoogleMap>
      </LoadScript>
  )
}
  

export default Map
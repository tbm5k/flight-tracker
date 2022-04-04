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
    console.log(flightData)
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
          {/* <InfoBar flight={plane}/> */}
          <div id="info-bar">
            <div>
                <p className='space-below'>Kenya Airways</p>
                <p className='space-below'>{plane.reg_number}</p>
                <p>E90</p>
            </div>
            <div>
                <div className='list'>
                    <p className='space-below'>Speed</p>
                    <p className='space-below'>{plane.speed}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Lat</p>
                    <p className='space-below'>{plane.lat}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Long</p>
                    <p>{plane.lng}</p>
                </div>
            </div>
            <div>
                <p className='space-below'>Nairobi-Lagos</p>
                <div className='list'>
                    <p className='space-below'>Departure</p>
                    <p className='space-below'>12:00</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Arrival</p>
                    <p>12:00</p>
                </div>
            </div>
        </div>
        </GoogleMap>
      </LoadScript>
  )
}
  

export default Map
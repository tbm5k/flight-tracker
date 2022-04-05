import './InfoBar.css'

const InfoBar = ({flight, style}) => {

    return(
        <div className={style}>
            <div>
                <p className='space-below'>Kenya Airways</p>
                <p className='space-below'>{flight.reg_number}</p>
                <p>Model: {flight.model || 'unavailable'}</p>
            </div>
            <div>
                <div className='list'>
                    <p className='space-below'>Speed</p>
                    <p className='space-below'>{flight.speed}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Lat</p>
                    <p className='space-below'>{flight.lat}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Long</p>
                    <p>{flight.lng}</p>
                </div>
            </div>
            <div>
                <div className='list'>
                    <p className='space-below'>Altitude: </p>
                    <p className='space-below'>{flight.alt || 'unavailable'}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Departure: </p>
                    <p className='space-below'>{flight.dep_time || 'unavailable'}</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Arrival: </p>
                    <p>{flight.arr_time || 'unavailable'}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBar
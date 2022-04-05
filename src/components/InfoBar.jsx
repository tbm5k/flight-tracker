import './InfoBar.css'

const InfoBar = ({flight, style}) => {

    return(
        <div className={style}>
            <div>
                <p className='space-below'>Kenya Airways</p>
                <p className='space-below'>{flight.reg_number}</p>
                <p>E90</p>
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
    )
}

export default InfoBar
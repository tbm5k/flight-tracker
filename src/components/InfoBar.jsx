import './InfoBar.css'

const InfoBar = () => {

    return(
        <div id="info-bar">
            <div>
                <p className='space-below'>Kenya Airways</p>
                <p className='space-below'>KQ402</p>
                <p>E90</p>
            </div>
            <div>
                <div className='list'>
                    <p className='space-below'>Speed</p>
                    <p className='space-below'>300kts</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Alt</p>
                    <p className='space-below'>34.345654</p>
                </div>
                <div className='list'>
                    <p className='space-below'>Long</p>
                    <p>34.345654</p>
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
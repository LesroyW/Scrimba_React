import marker from '../assets/location_marker.png'
import MountFuji from '../assets/Mount_Fuji.jpg'

export default function Entry(props) {
    return (
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img src={props.img.src} className='main-image' alt={props.img.alt} />
            </div>
            <div className='journal-content'>
                <img src={marker} className='marker' alt='pointer' />
                <span>{props.country}</span>
                <a href={props.location}>View on Google Maps</a>
                <h2>{props.main_title}</h2>
                <h3>{props.trip_dates}</h3>
                <p>{props.trip_description}</p>
            </div>
        </article>
    )
}
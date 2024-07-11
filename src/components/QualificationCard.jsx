import './QualificationCard.css'
import dateImage from '../assets/date.svg'

export default function QualificationCard(props) {
    return(
    <div className='quali-card'>
        <h3 id='quali-name'>{props.name}</h3>
        <h3 id='quali-place'>{props.place}</h3>
        <div className='quali-date'>
            <img id='calender-image' src={dateImage} alt="" />
            <span> {props.date}</span>
        </div>
    </div>)
}
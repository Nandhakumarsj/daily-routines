import './TitleBar.css';
import image from '../assets/sjnk.ico'
const Title = () =>{
    return(
        <div className="Header">
            <img src={image} alt="Icon"/>
            <h1>Daily Routine</h1>
        </div>
    )
}
export default Title;
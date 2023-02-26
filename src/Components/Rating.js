import img from "../images/illustration-thank-you.svg";
import '../styles/Rating.css';

function Rating() {
    return (
        <div className="App">
            <div className="blackBackground">
                <div className="thankYouImageContainer">
                    <img src={img} alt="Thank you message" className="thankYouImage"></img>
                </div>
            </div>
        </div>
      );
    }
  
  export default Rating;
  
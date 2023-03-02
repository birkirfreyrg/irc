import img from "../images/illustration-thank-you.svg";
import '../styles/Rating.css';

function Rating() {
    return (
        <div className="App">
            <div className="blackBackground">
                <div className="thankYouImageContainer">
                    <img src={img} alt="Pos Device with credit card on thank you page" className="thankYouImage"></img>
                </div>
                <div className="selectionNotifierContainer">
                    <p className="selectionNotifierText">
                        <span className="selectionNotifierBorder">You selected # out of 5</span>
                    </p>
                </div>
                <div className="thankYouH1Container">
                    <h1 className="thankYouH1">Thank you!</h1>
                </div>
                <div className="thankYouRatingTextContainer">
                    <p className="thankYouRatingText">We appreciate you taking the time to give a rating. 
                                                      If you ever need more support, 
                                                      don’t hesitate to get in touch!
                    </p>
                </div>
            </div>
        </div>
      );
    }
  
  export default Rating;
  
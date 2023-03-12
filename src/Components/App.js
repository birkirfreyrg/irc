import img from "../images/icon-star.svg";
import { useState } from "react";
import '../styles/App.css';
import Rating from './Rating';

function App() {

  const [selectedButton, setSelectedButton] = useState(null);
  const [displayRating, setRating] = useState(false);
  
  function handleButtonClick(button) {
    setSelectedButton(button);
  }

  const handleSubmitClick = () => {
    if(selectedButton != null)
      setRating(true);
  };

  return (
    <div className="App">
      {displayRating && <Rating myProp={selectedButton} />}
      <div className="blackBackground">
        <div className="starCircle">
          <img src={img} alt="Golden Star" className="goldenStar"></img>
        </div>
        <h1 className="ratingQuestionText">How did we do?</h1>
        <p className="feedbackText">Please let us know how we did with your support request. All feedback is appreciated 
                                      to help us improve our offering!
        </p>
        <div className="rankingContainer">
          <button onClick={() => handleButtonClick(1)} className="ranking">1</button>
          <button onClick={() => handleButtonClick(2)} className="ranking">2</button>
          <button onClick={() => handleButtonClick(3)} className="ranking">3</button>
          <button onClick={() => handleButtonClick(4)} className="ranking">4</button>
          <button onClick={() => handleButtonClick(5)} className="ranking">5</button>
        </div>
        <button onClick={handleSubmitClick} className="submitButtonRankings">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;

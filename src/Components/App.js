import img from "../images/icon-star.svg";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import '../styles/App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  
  function handleButtonClick(button) {
    setSelectedButton(button);
  }

  return (
    <div className="App">
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
        <button className="submitButtonRankings">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;

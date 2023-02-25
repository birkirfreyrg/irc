import img from "./images/icon-star.svg";
import './App.css';

function App() {
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
          <button className="ranking">1</button>
          <button className="ranking">2</button>
          <button className="ranking">3</button>
          <button className="ranking">4</button>
          <button className="ranking">5</button>
        </div>
        <button className="submitButtonRankings">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;

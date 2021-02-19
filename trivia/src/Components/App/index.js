import './index.css';
import DisplayQuestion from '../DisplayQuestion';
// states
// visibility of pages
// genre
// difficulty
// player Name

//functions to manipulate WelcomePage
//handleGenre
//handleDifficulty
//handleName
//handleVisibility

//props to pass down
// visibility component to both WelcomePage and DisplayQuestions
// handleVisibility to both componentns
// handleGenre & handleDifficulty & handleName to Welcome page onlt
// Pass all states to DisplayQuestion

// return
// App has 2 components - DisplayQuestions and WelcomePage

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <DisplayQuestion />
    </div>
  );
}

export default App;
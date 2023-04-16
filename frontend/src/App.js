import "./App.css";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";

function App() {
  return (
    <div className="App">
      <UserTutorial />
      <HandTracker />
    </div>
  );
}

export default App;

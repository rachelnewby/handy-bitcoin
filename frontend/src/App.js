import "./App.css";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";

function App() {
  return (
    <div className="App">
      <UserTutorial />
      <HandTracker />
      <BitcoinLivePrice />
    </div>
  );
}

export default App;

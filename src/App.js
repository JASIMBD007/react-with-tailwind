import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-6xl">
        Welcome To My Pricing Club
      </h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FirstNav from './Components/FirstNav/FirstNav';
import SecondNav from './Components/SecondNav/SecondNav';

function App() {
  return (
    <div className="bg-indigo-600 w-full h-screen">
      <FirstNav></FirstNav>

      <SecondNav></SecondNav>
    </div>
  );
}

export default App;

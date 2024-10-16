import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Drivers from './components/Drivers';
import Vehicles from './components/Vehicles';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ display: 'flex' }}>
          <Menu />
          <div className="Main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

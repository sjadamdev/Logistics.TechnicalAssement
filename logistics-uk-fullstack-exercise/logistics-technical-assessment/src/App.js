import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Drivers from './components/Drivers';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <Drivers />
      </div>
    </div>
  );
}

export default App;

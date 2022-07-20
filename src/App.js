import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
function App() {
  const name = "BikeStore"
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer lista = 'Valor_lista'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          probando variable: {name}
        </a>
      </header>
    </div>
  );
}

export default App;

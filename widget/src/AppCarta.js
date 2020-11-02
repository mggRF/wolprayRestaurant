import logo from './logo.svg';
import './AppCarta.css';

function AppCarta() {
  return (
    <div className="AppCarta">
      <header className="AppCarta-header">
        <img src={logo} className="AppCarta-logo" alt="logo" />
        <p>
          Edit <code>src/AppCarta.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppCarta;

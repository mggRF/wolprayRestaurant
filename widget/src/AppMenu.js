import logo from './logo.svg';
import './AppMenu.css';

function AppMenu() {
  return (
    <div className="AppMenu">
      <header className="AppMenu-header">
        <img src={logo} className="AppMenu-logo" alt="logo" />
        <p>
          Edit <code>src/AppMenu.js</code> and save to reload.
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

export default AppMenu;

import graphIcon from '/icons8-stock-market-96.png';
import './Header.css';

function Header() {
  return (
    <header>
      test 01
      <div>
        <img src={graphIcon} height="48" alt="Stockbook Logo" />
      </div>
      <h1>stockbook v0.01</h1>
    </header>
  );
}

export default Header;

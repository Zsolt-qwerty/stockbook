import stockbookLogo from "/icons8-stock-market-96.png";
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <img src={stockbookLogo} height="48" alt="Stockbook Logo" />
      </div>
      <h1>stockbook v0.0.0</h1>
    </header>
  );
}

export default Header;

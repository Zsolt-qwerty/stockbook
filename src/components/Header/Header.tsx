import stockbookLogo from "/icons8-stock-market-96.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={stockbookLogo} alt="Stockbook Logo" />
      <h1>stockbook</h1>
    </header>
  );
}

export default Header;

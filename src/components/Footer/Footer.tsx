import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p className="credit">© 2025 stockbook. All rights reserved.</p>
      <p className="repository-link">
        <a href="https://github.com/Zsolt-qwerty/stockbook" target="_blank">
          GitHub Repository
        </a>
      </p>
      <div className="tech-logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="tech-credit">
        Built with Vite and React.
      </p>
      <p className="icon-credit">
        <a target="_blank" href="https://icons8.com/icon/13555/increase">Stock Market</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </p>
    </footer>
  );
}

export default Footer;

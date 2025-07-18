import './App.css';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div className='App'>
      <div className="dev-mode">Under development!</div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

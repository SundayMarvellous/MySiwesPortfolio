import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,NavLink, Redirect,Navigate
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

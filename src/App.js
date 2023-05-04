import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Test from './components/test';


function App() {
  return (
    <>
       
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route exact path="" element={<Home />} />
            <Route exact path="Home" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Test" element={<Test />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    
    
    
    </>





    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

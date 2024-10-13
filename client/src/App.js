import './App.css';
import {Rotes,BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

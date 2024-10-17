
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProviderApp from "./AppContext";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProviderApp>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </ContextProviderApp>
      </Router>
       
    </div>
  );
}

export default App;

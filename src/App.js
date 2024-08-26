import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import CatImage from './CatImage';


function App() {
  return (
    <Router>
      <div>
        <h1>Navigation Example</h1>
        <button>
          <Link to="/hello">Go to HelloWorld</Link>
        </button>
        <button>
          <Link to="/cat">Go to cat image Page</Link>
        </button>

        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/cat" element={<CatImage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

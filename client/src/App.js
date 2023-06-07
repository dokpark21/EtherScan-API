import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

import Main from './Pages/Main';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <main>
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
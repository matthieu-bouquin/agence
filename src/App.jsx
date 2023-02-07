import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import About from './pages/About/about.jsx'
import Home from './pages/Home/home.jsx'
import Works from './pages/Works/works.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import StudyCase from './components/StudyCase/StudyCase.jsx'
import Data from './data/data.jsx';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/" element={<StudyCase/>} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
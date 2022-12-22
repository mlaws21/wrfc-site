import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Donate from './components/Donate.jsx';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import Directions from './components/Directions';
import Rules from './components/Rules';
import Roster from './components/Roster';
import Merch from './components/Merch';





function App() {
  return (
    <dev>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/roster' element={<Roster />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/directions' element={<Directions />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </dev>
  );
}

export default App;

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
import Login from './components/Login';
import Error from './components/Error';
import Reunion from './components/Reunion';







function App() {
  return (
    <div>
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
        <Route path='/reunion' element={<Reunion />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

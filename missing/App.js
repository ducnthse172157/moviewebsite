
import './App.css';
import {Routes,Route,} from "react-router-dom";

import Footer from './components/Footer';

import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Main from './components/Main';
import About from './components/About';
import News from './components/News';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Main/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}
export default App;

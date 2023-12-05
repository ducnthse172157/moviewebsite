
import './App.css';
import {Routes,Route,} from "react-router-dom";
import Footer from './components/Footer';
import User from './components/User';
import Navigation from './components/Navigation';
import Add from './components/Add';
import Detail from './components/Detail';
import Contact from './components/Contact';
import FilmsPresentation from './components/FilmsPresentation';
import About from './components/About';
import News from './components/News';
import Protected from './components/Protected';
import LoginWithGoogle from './components/LoginwithGoogle';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Update from './components/Update';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<FilmsPresentation/>}> 
      </Route>
      <Route path='/user' element={<User />}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/add' element={<Protected><Add/></Protected>}></Route>
        <Route path='/logingoogle' element={<LoginWithGoogle/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
       
      </Routes>
      <Footer/>

    </div>
  );
}
export default App;

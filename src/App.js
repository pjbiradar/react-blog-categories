import './App.css';
import Bollywood from './Component/Bollywood';
import { Provide } from './Component/Createcontext';
import Header from './Component/Header';
import Hollywood from './Component/Hollywood';
import Sports from './Component/Sports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Component/Home';
import Information from './Component/Information';
import Travel from './Component/Travel';
import Food from './Component/Food';



function App() {
  return (
    <Provide>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='/bollywood' element={<Bollywood />} />

          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/travel' element={<Travel/>}/>

          <Route path='/sports' element={<Sports />} />
          <Route path='/food' element={<Food/>}/>
          <Route path='/category' element={<Information/>}>
            <Route path=':id' element={<Information/>}/>
          </Route>


        </Routes>
       


      </Router>

    </div>
    </Provide>
  );

}

export default App;

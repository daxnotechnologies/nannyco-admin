import './App.css';
import Navbar from './Components/Navbar';
import Order_placed from './Components/All_Parents';
import AllParents from './Components/All_Parents';
import Parent_t_Child from './Components/Parent_t_Child';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AllNanies from './Components/All Nanies';
function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<AllParents/>}/>

          <Route exact path='/Nanny' element={<AllNanies/>}/>

        </Routes>
      </Router>
   
 

    </div>
  );
}

export default App;

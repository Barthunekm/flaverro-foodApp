
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom' 
import Home from './Pages/Home';
import Success from './Pages/Success';
import Error from './Pages/Error';
import ProtectedRoutesProtectedRoutes from './Components/ProtectedRoutes';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/success' element={<ProtectedRoutes element ={<Success/>} /> }/>
        <Route path='/*' element={<Error/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

// import {Hero} from './Components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
      <hr/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        {/* <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route> */}
          <Route path='/cart' element={<Cart/>}/>
      </Routes>

    
      </BrowserRouter>
      
      {/* <Hero/> */}
    </div>
  );
}

export default App;

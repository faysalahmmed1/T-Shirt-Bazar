
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='Cart' element={<Cart></Cart>}></Route>
        <Route path='/Orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='Grandpa' element={ <Grandpa></Grandpa>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>


    </div>
  );
}

export default App;

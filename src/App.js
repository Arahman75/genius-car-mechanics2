
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut/CheckOut';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageService from './Pages/ManageService/ManageService';
import Orders from './Pages/Orders/Orders';
import ServiceDetails from './Pages/SeviceDetails/ServiceDetails';
import Footer from './Pages/Shaired/Footer/Footer';
import Header from './Pages/Shaired/Header/Header';
import NotFound from './Pages/Shaired/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/addservice' element={<RequireAuth>
        <AddService></AddService>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
       <ManageService></ManageService>
        </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth>
<Orders></Orders>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

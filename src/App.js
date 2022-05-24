
import AOS from 'aos';
import './App.css';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Registration from './components/Pages/Registration/Registration';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import ManageProduct from './components/Pages/ManageProduct/ManageProduct';
import Blog from './components/Pages/Blog/Blog';
import MyProduct from './components/Pages/MyProduct/MyProduct';
import StockUpdate from './components/Pages/StockUpdate/StockUpdate';
import ForgetPassword from './components//Pages/ForgetPassword/ForgetPassword';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import NotFound from './components/Pages/NotFound/NotFound';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: "1000"
    });
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/manageproduct' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path='/myproduct' element={
          <RequireAuth>
            <MyProduct></MyProduct>
          </RequireAuth>
        }></Route>
        <Route path='/stockupdate/:productId' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

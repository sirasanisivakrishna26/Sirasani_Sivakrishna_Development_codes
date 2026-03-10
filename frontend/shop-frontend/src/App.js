import logo from './logo.svg';
import './App.css';
import UserRegister from './UserRegister';

import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';

import Home from './Home';
import AdminDashBoard from './AdminHomePage';
import AddProducts from './AddProducts';

import GetAllProducts from './GetAllProduct';
import UserMenu from './UserHomepage';
import CrudOnUser from './CrudOnUser';
import CrudOnProducts from './CrudOnProducts';
import SortByProductPrice from './SortByProductPrice';
import SortByProductCatogery from './SortByCatogery';
import SortByProductName from './SortByProductName';
import ProductList from './ProductList';
import MyWishlist from './MyWishlist';
import Cart from './Cart';
import AddCoupon from './AddCoupon';
import Bulkupload from './BulkUploadProducts';
import Bills from './Bills';
import UserSortByProductCatogery from './User SortByCatogery ';
import UserSortByProductName from './User SortByProductName';
import UserSortByProductPrice from './User SortByProductPrice';
import UserGetAllProducts from './userGetAllProduct';
import Adduser from './addUser';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/userlogin' element={<UserLogin></UserLogin>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/AdminRegister' element={<AdminRegister></AdminRegister>}></Route>
        <Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
        <Route path='/AdminDashBoard' element={<AdminDashBoard></AdminDashBoard>}></Route>
        <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/getproducts' element={<GetAllProducts></GetAllProducts>}></Route>
        <Route path='/usermenu' element={<UserMenu></UserMenu>}></Route>
        <Route path='/MyWish' element={<MyWishlist></MyWishlist>}></Route>
        <Route path='/crudonuser' element={<CrudOnUser></CrudOnUser>}></Route>
        <Route path='/crudonproducts' element={<CrudOnProducts></CrudOnProducts>}></Route>
        <Route path='/sortbyproductprice' element={<SortByProductPrice></SortByProductPrice>}></Route>
        <Route path='/sortbyproductcatogery' element={<SortByProductCatogery></SortByProductCatogery>}></Route>
        <Route path='/sortbyproductname' element={<SortByProductName></SortByProductName>}></Route>
        <Route path='/productList' element={<ProductList></ProductList>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/addcoupon' element={<AddCoupon></AddCoupon>}></Route>
        <Route path='/bulkupload' element={<Bulkupload></Bulkupload>}></Route>
        <Route path='/bills' element={<Bills></Bills>}></Route>
        <Route path='/usersortbycatogery' element={<UserSortByProductCatogery></UserSortByProductCatogery>}></Route>
        <Route path='/userSortbyname' element={<UserSortByProductName></UserSortByProductName>}></Route>
        <Route path='/usersortbyprice' element={<UserSortByProductPrice></UserSortByProductPrice>}></Route>
        <Route path='/useGetallproducts' element={<UserGetAllProducts></UserGetAllProducts>}></Route>
        <Route path='/adduser' element={<Adduser></Adduser>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

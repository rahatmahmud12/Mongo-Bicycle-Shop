import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';

import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivareRoute.js/PrivateRoute';
import AddProduct from './Components/AddProduct.js/AddProduct';
import Product from './Components/Home/Products/Product/Product';
import Products from './Components/Home/Products/Products';
import Review from './Components/Home/Review/Review';
import Footer from './Components/Shared/Footer/Footer';
import Dasboard from './Components/Dasboard/Dasboard';
import Purchase from './Components/Purchase/Purchase';
import Myorders from './Components/Myorders/Myorders';
import AddReviews from './Components/AddReview.js/AddReviews';
import ModalPur from './Components/Purchase/Modal/ModalPur';
import SetReview from './Components/Home/Review/SetRev/SetReview';
import Payment from './Components/Payment/Payment';
import MakeAdmin from './Components/Dasboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>

            </Route>

            <Route path="/login">
              <Login></Login>

            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/aboutus">
              <About></About>

            </PrivateRoute>

            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/products/:id">
              <Product></Product>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/dasboard">
              <Dasboard></Dasboard>
            </Route>
            <PrivateRoute path="/product/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/myorders">
              <Myorders></Myorders>
            </Route>
            <Route path="/modal">
              <ModalPur></ModalPur>
            </Route>
            <Route path="/setreview">
              <SetReview></SetReview>
            </Route>
            <Route path="/addreviews">
              <AddReviews></AddReviews>
            </Route>
            <Route path="/pay">
              <Payment></Payment>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;



// REACT_APP_API_KEY = AIzaSyDgSSrwoJjT6cadn3cbeoS0uI63OszDPak"
// REACT_APP_AUTH_DOMAIN = assignment - fb34e.firebaseapp.com"
// REACT_APP_PROJECT_ID = assignment - fb34e"
// REACT_APP_STORAGE_BUCKET = assignment - fb34e.appspot.com"
// REACT_APP_MESSAGING_SENDER_ID = 931399950214"
// REACT_APP_APP_ID = 1: 931399950214: web: 7777c2d44a765a6e36d607"

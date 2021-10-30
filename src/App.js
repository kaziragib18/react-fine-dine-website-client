import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/AddService/AddService';
import Order from './components/Home/Order/Order/Order';
import ManageServices from './components/ManageServices/ManageServices';
import MyOrder from './components/MyOrder/MyOrder';
import AddOrder from './components/AddOrder/AddOrder';
import ShowOrder from './components/ShowOrder/ShowOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/addOrder/:id">
              <AddOrder></AddOrder>
            </PrivateRoute>

            <PrivateRoute path="/ShowOrder">
              <ShowOrder></ShowOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/order/:id">
            <Order></Order>
            </Route>

            <Route path="/admin">
             <Admin></Admin>
            </Route>

            <Route path="/addService">
             <AddService></AddService>
            </Route>

            <Route path="/ManageServices">
             <ManageServices></ManageServices>
            </Route>

            <Route path="*">
           <NotFound></NotFound>
            </Route>

          </Switch>
         <Footer></Footer>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
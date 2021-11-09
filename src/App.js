import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute/AdminRoute";
import "./App.css";
import ContextProvider from "./Context/ContextProvider/ContextProvider";
import AddDoctor from "./Pages/AddDoctor/AddDoctor";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <AdminRoute path="/addDoctor">
              <AddDoctor />
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin />
            </AdminRoute>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

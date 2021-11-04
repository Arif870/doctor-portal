import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";

import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

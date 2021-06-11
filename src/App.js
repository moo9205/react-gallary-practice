import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Gallary from "./pages/Gallary";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="list">
          <li>
            <Link to="/">Gallary</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Gallary />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

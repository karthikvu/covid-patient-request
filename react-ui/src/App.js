import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Header } from './components/Header';
import { Landing } from "./pages/Landing";
import { Form } from "./pages/Form";

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={Layout} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Main from "./components/main";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Icon";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              My Expense Manager
            </Typography>
          </Toolbar>
        </AppBar>

        <Router>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/main" exact component={Main} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

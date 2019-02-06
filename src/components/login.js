import React, { Component } from "react";

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/Icon";

class Login extends Component {
  state = {};

  Login = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div>
        {/* <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              My Expense Manager
            </Typography>
          </Toolbar>
        </AppBar> */}

        <div class="container d-flex h-100">
          <div class="row align-self-center w-100">
            <div class="col-md-4 mx-auto">
              <div class="card">
                <div
                  class="card bg-light mb-10"
                  style={{ border: "none", borderRadius: "10px" }}
                >
                  <div class="card-header">Login</div>
                  <div class="card-body">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Username"
                      maxlength="15"
                      minlength="5"
                    />
                    <input type="password" placeholder="Password" />
                    <div class="card-footer">
                      <button
                        class="btn btn-primary"
                        onClick={this.Login.bind()}
                      >
                        Login
                      </button>
                      <button class="btn btn-link">Forgot Password?</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

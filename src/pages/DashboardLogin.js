import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class DashboardLogin extends Component {
  render() {
    return (
      <div id="dashboard-login">
        <h3>Log in</h3>
        <div>
          <form id="dashboardLoginForm">
            <input type="text" name="email" placeholder="Insert email" />
            <input type="text" name="password" placeholder="Insert password" />
            <div>
              <Button variant="contained" color="primary">
                Log in
              </Button>
              <Button variant="contained" color="secondary">
                I am a doctor
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DashboardLogin;

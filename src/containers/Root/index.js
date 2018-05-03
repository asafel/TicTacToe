import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Containers
import App from 'Containers/App';
import Home from 'Components/Home';

const Root = () => (
  <MuiThemeProvider>
    <App>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </App>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;

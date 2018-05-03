import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './style.scss';

class App extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    const { children, location, history } = this.props

    return (
      <div className='app-layout'>

        <main>
          {children}
        </main>

        <Modal />
      </div>
    );
  }
}

const actions = {}

export default withRouter(connect(null, actions)(App));

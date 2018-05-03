import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components


// Actions
import { closePopup } from '../../actions/app'

// Design
import './style.scss'

const components = { }

class Modal extends Component {

  constructor(props) {
    super(props)

    this.closePopup = this.closePopup.bind(this)
  }

  closePopup(e) {
    const { clickOutSideToClose } = this.props.modal

    if (!!clickOutSideToClose) {
      this.props.closePopup()
    }
  }

  render() {
    const { modal: { componentName, isOverlayTransparent, additionalClasses, style, data }, closePopup } = this.props
    const Renderedcomponent = components[componentName] || null
    return (
      <div
        onClick={this.closePopup}
        className={`modal-container
                    ${isOverlayTransparent ? ' modal-transparent' : ''}
                    ${!Renderedcomponent ? ' modal-closed' : ''}`}>

        {Renderedcomponent ? <Renderedcomponent closePopup={closePopup} isPopup data={data} style={style} /> : null}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const actions = {
  closePopup
}

export default connect(mapStateToProps, actions)(Modal)
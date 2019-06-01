import React, {Component} from 'react'
import Form from './../components/Form'
import {reset} from 'redux-form'
import {connect} from 'react-redux'
import {contactSent} from './../index'

class Contact extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(contactSent(values))
    dispatch(reset('contactForm'))
  }

  render() {
    const {data} = this.props

    return (
      <div className="row">

          <Form onSubmit={this.handleSubmit} />
          <div className="clearfix"></div>
          <div>Dados do Formulário: {data ? JSON.stringify(data) : null}</div>

      </div>
    )
  }
}

export default connect(state => state.Contact)(Contact)

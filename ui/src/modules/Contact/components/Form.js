import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group col-md-6">

        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Nome"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-6">

        <Field
          name="lastname"
          component="input"
          type="email"
          placeholder="Sobrenome"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-6">

        <Field
          name="subject"
          component="input"
          type="text"
          placeholder="Assunto"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-6">

        <Field
          name="email"
          component="input"
          type="email"
          placeholder="E-mail"
          className="form-control"
        />
      </div>
      <div className="form-group col-md-12">

        <Field name="message" component="textarea" className="form-control" placeholder="Texto" />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Send
        </button>{' '}
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm'
})(Form)

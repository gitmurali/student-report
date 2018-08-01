import React, {Component} from 'react';
import Header from "./header";
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from "react-router";

class CreateStudent extends Component {
  constructor(props) {
    super(props);
  }

  renderField(field) {

    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createStudents(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <div>
        <Header/>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name"
            name="name"
            component={this.renderField}
          />
          <Field
            label="Last Name"
            name="lastName"
            component={this.renderField}
          />
          <Field
            label="Class"
            name="class"
            component={this.renderField}
          />
          <Field
            label="Year of passing"
            name="passYear"
            component={this.renderField}
          />
          <Field
            label="Percentage of marks"
            name="marksPercent"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary" style={{marginRight: '1em'}}>Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

export const validate = (values) => {

  const errors = {};

  if(!values.name){
    errors.name='please enter a name!!';
  }
  if(!values.lastName){
    errors.lastName='please enter a lastname!!';
  }
  if(!values.class){
    errors.class='please enter a class!!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'CreateStudentForm'
})(
  connect(null, null)(CreateStudent)
);

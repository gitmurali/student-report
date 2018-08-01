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
    console.log(values);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, invalid} = this.props;
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
          <button type="submit" className="btn btn-primary" style={{marginRight: '1em'}}
                  disabled={invalid || submitting || pristine}>Submit
          </button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

export const validate = (values) => {

  let alphabets = "/^[a-z]+$/i";
  let maxLen = 20;

  const errors = {};

  // name field validations
  if (!values.name) {
    errors.name = 'please enter a name!';
  } else if(values.name && !/^[a-z]+$/i.test(values.name)) {
    errors.name = 'Please enter a valid name';
  } else if(values.name.length > maxLen) {
    errors.name=`Must be ${maxLen} characters or less`;
  }

  if (!values.lastName) {
    errors.lastName = 'please enter a Lasname!';
  } else if(values.lastName && !/^[a-z]+$/i.test(values.lastName)) {
    errors.lastName = 'Please enter a valid Lastname';
  } else if(values.lastName.length > maxLen) {
    errors.lastName=`Must be ${maxLen} characters or less`;
  }

  if (!values.class) {
    errors.class = 'please enter a class!';
  } else if(values.class && !/^[a-z0-9]+$/i.test(values.class)) {
    errors.class = 'please enter a valid class';
  }

  if(!values.passYear) {
    errors.passYear = "Please enter year";
  } else if(values.passYear && !/^\d{4}$/.test(values.passYear)) {
    errors.passYear = "please enter a valid year";
  } else if(values.passYear && !(parseInt(values.passYear) > 2017)) {
    errors.passYear = "Any year after 2017 is valid";
  }

  if(!values.marksPercent) {
    errors.marksPercent = "please enter a value";
  }  else if(values.marksPercent && !/^[0-9]+$/.test(values.marksPercent)) {
    errors.marksPercent = "Only numbers are valid";
  }

  return errors;
};


export default reduxForm({
  validate,
  form: 'CreateStudentForm'
})(
  connect(null, null)(CreateStudent)
);

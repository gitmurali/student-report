import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getStudents} from "../actions";
import * as _ from 'lodash';

class Students extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.props.getStudents();
  }

  getStudentsDom(students) {
    students = _.sortBy(students, 'name');
    return students.map(student => {
      return (<tr key={student.rollNumber}>
        <td style={{textTransform: 'capitalize'}}>{student.name}</td>
        <td>{student.rollNumber}</td>
        <td>
          <table className="table table-bordered">
            <tbody>
            <tr>
              <td>{student.marks.Maths}</td>
              <td>{student.marks.English}</td>
              <td>{student.marks.Science}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>);
    });
  }

  render() {
    return (
      <div>
        <h1>Student Result Board</h1>
        <table className="table table-striped" style={{marginTop: '2em'}}>
          <thead>
          <tr>
            <th>name</th>
            <th>roll-number</th>
            <th style={{textAlign: 'center'}}>marks
              <table className="table">
                <thead>
                <tr>
                  <th>Maths</th>
                  <th>English</th>
                  <th>Science</th>
                </tr>
                </thead>
              </table>
            </th>
          </tr>
          </thead>
          <tbody>
          {this.getStudentsDom(this.props.data.students[0])}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getStudents: getStudents}, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);

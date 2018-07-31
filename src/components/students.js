import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getStudents} from "../actions";
import * as _ from 'lodash';
import "../styles/style.css";

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

  renderStatus(students) {
    return _.maxBy(students, o => {
      return o.total;
    });
  }

  getStudentsDom(students) {
    students = _.sortBy(students, 'name');
    let topper = this.renderStatus(students);

    return students.map(student => {
      return (<tr key={student.rollNumber}>
        <td style={{textTransform: 'capitalize'}} className={student.status === "Pass" ? "passed": "failed"}>{student.name}</td>
        <td>{student.rollNumber}</td>
        <td>
          {student.total}
        </td>
        <td>
          {student.rollNumber === topper.rollNumber ? "Topper" : student.status}
        </td>
      </tr>);
    });
  }

  render() {
    let students = this.props.data.students[0];
    if (students && students.length > 0) {
      students.map(student => {
        student.total = student.marks.Maths + student.marks.English + student.marks.Science;
        student.status =
          (student.marks.Maths < 20 || student.marks.English < 20 || student.marks.Science < 20) ? "Fail" : "Pass";
      });

      return (
        <div>
          <h1>Student Result Board</h1>
          <table className="table table-striped" style={{marginTop: '2em'}}>
            <thead>
            <tr>
              <th>name</th>
              <th>roll-number</th>
              <th>
                Total Marks
              </th>
              <th>
                status
              </th>
            </tr>
            </thead>
            <tbody>
            {this.getStudentsDom(students)}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
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

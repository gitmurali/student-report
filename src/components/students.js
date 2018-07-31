import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getStudents} from "../actions";

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

  render() {
    console.log('render..', this.props.data.students);
    return (
      <div>
        Murali.....students
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents: getStudents },dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Songlist extends Component {
  render () {
    console.log(this.props)
    return (
      <div>Song List</div>
    );
  };
};

//creating props from state

const mapStateToProps = (state) => {
  return {songs: state.songs};
}

//connect attaches props to component

export default connect(mapStateToProps)(Songlist);
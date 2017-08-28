import React from 'react';
import ReactDOM from 'react-dom';

class NewBoxInside extends React.Component {
  render(){
    return <div>Watch, Doctor<div>;
  }
}

ReactDOM.render(<NewBoxInside />, document.getElementById('jocker'));

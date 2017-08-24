import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  render(){
    let txt = this.props.txt;
    return (
    	<div>
    		<h1>Hello World!</h1> 
    		<b>Bold</b>
    		<p>{txt}</p>
    	</div>
    );
  }
}

App.propTypes={
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired
}

App.defaultProps={
	cat: 5
}

export default App;
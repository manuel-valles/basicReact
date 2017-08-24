import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		}
	}
	update(e){
		this.setState({txt: e.target.value});
	}
	render(){
		let txt = this.props.txt;
		return (
			<div>
				<h1>Hello World!</h1> 
				<b>Bold</b>
				<p>{txt}</p>
				<p>{this.state.txt} - {this.state.cat}</p>
				<input type="text" onChange={this.update.bind(this)}/>
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
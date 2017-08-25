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
		return (
			<div>
				<p>{this.state.txt}</p>
				<Widget update={this.update.bind(this)}/>
			</div>
		);
	}
}

const Widget = (props) => <input type="text" onChange={props.update}/>

App.propTypes={
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired
}

App.defaultProps={
	cat: 5
}

export default App;
import React from 'react';

class App2 extends React.Component{
	render(){
		return(
			<Parent>
				<div className="childA"></div>

			</Parent>
		)
	}
}

class Parent extends React.Component{
	render(){
		let items1=React.Children
		.map(this.props.children, child=>child);

		let items2=React.Children
				.forEach(this.props.children, 
					child => console.log(child.props.className));

		let items3=React.Children
			.only(this.props.children);
		console.log(items1, items2, items3);
		return null;
	}
}

export default App2;

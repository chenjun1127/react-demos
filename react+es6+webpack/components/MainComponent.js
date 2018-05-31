/******************ES5**********************/
// var React = require('react');
// var MainComponent = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
//                 React+Webpack+ES6从环境搭建到HelloWorld
//             </div>
// 		);
// 	}
// });
// module.exports = MainComponent;
/******************ES6**********************/
import React, {
	Component
} from 'react';

export default class MainComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'React+Webpack+ES6从环境搭建到HelloWorld'
		};
	}
	render() {
		var divStyle = {
			color: 'red',
			textAlign: 'center',
			paddingTop: '10px',
		};
		return (
			<div style={divStyle}>
				{this.state.title}
			</div>
		)
	}
}
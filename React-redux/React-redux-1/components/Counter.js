import Styles from '../style/style'
import React, { Component } from 'react';
class Counter extends Component {
    render() {
        console.log(Styles)
        return (
            <div style={Styles.box}>
			<button style = {Styles.button} onClick = {this.props.onDecrement}> - </button> 
			<div style = {Styles.input}>{this.props.value} </div> 
			<button style = {Styles.button} onClick = {this.props.onIncrement}> + </button> 
		</div>
        )
    }
}

export default Counter
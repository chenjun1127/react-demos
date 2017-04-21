import React, { Component } from 'react'
export default class Counter extends Component {
    render() {
        const {value, onIncreaseClick,onDecreaseClick} = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}
// Counter.propTypes = {
//     value: React.PropTypes.number.isRequired,
//     onIncreaseClick: React.PropTypes.func.isRequired
// };

import React, {Component} from 'react';

class Counter extends Component {
    render() {
        console.log(this)
        const {value, onIncreaseClick, text, onDecreaseClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <p>{text}</p>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}
export default Counter

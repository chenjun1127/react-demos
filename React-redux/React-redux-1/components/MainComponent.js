import React, { Component } from 'react';
import store from '../reducer/Reducer'
import Counter from './Counter';
export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'React-redux',
            value: store.getState(),
        };
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                value: store.getState()
            })
        })
    }
    render() {
        const divStyle = {
            color: 'red',
            textAlign: 'center',
            paddingTop: '10px',
        };
        return (
            <div>
				<div style={divStyle}>
					{this.state.title}
				</div>
				<Counter value={this.state.value} onIncrement={() => {
                store.dispatch({
                    type: 'INCREMENT'
                })
            }} onDecrement={() => {
                store.dispatch({
                    type: 'DECREMENT'
                })
            }}/>
			</div>
        )
    }
}

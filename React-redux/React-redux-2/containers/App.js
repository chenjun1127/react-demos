import React from 'react'
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increaseAction, decreaseAction} from '../actions'
// Map Redux state to component props
function mapStateToProps(state) {
    return {value: state.count, text: state.text}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction(1, '外部传值：+1')),
        onDecreaseClick: () => dispatch(decreaseAction(1, '外部传值：-1'))
    }
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default App

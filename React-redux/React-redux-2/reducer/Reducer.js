import {connect} from 'react-redux';
import Counter from '../components/Counter'

// Action：要做的动作的类型
const increaseAction = {
    type: 'increase'
};
const decreaseAction = {
    type: 'decrease'
};
// Reducer作用： 根据 Action 来更新 State。
// 首先定义一个改变数据的函数，成为reducer
export function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return {
                count: count + 1
            };
        case 'decrease':
            return {
                count: count - 1
            }
        default:
            return state
    }
}

// Store

function mapStateToProps(state) {
    return {value: state.count}
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

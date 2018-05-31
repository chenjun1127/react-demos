import { createStore } from 'redux';

function reducer(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(reducer)
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log(store.getState()));
export default store
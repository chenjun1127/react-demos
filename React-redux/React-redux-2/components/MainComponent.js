import React, {Component} from 'react';
import {createStore} from 'redux';
import * as Reducers from '../reducer/Reducer'
import {Provider} from 'react-redux';

const store = createStore(Reducers.counter);
console.log("APP",Reducers)
export default class MainComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <Reducers.App/>
            </Provider>
        )
    }
}

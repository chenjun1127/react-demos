import React, {Component} from 'react';
export default class Events extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(this,e.target.nodeType)
    }

    render(){
        return (
            <button onClick={this.handleClick}>Click Me!</button>
        )
    }
}
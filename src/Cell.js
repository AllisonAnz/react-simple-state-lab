import React, { Component } from 'react';

export default class Cell extends Component {
    //We want each Cell to keep track of a single state value:color 
    //Deliverables:
    //Define a constructor method
    //which sets an initial state key of color to the value prop 
    //which is passed from its parent componenet 
    //super() is required in React componenets if we are to use this.state in the constructor)
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }
    //Deliverable: Create a click listener which, when activated, updates the state to the following hex value '#333'
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    //Deliverables
    //Cell should render a single <div> with className cell 
    //In render, the cell should set the backgroud color in-line for the <div> by adding the following attri:
    //  style={{backgroundColor: '#FFF'}} (#FFF is just an exampl value, the value should be the state's color)
    render() {
        return (
            <div
                className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}
                >

            </div>
        )
    }

}
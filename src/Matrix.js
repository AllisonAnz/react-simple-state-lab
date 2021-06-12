import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  //genRow, we see that every row will map through its vals to create an array of <div className="cell"> JSX
  //Deliverable: Once Cell componenet is made, reaplce <div className="cell"></div> with <Cell value={val} />
  genRow = (vals) => {
    //console.log(vals) //console.logs [] and 0: "#F00"
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  //genMatrix is an instance method which maps this.props.values to an array of JSX
  //basically every 'row' in this.props.values will create a <div className="row">
  genMatrix = () => {
    console.log(this.props.values) // console logs an array 0: (10) ["#F00", "#00F", "#F00", "#00F"
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  //render method shows us what our Matrix component looks like:
  //a <div> tag with id=matrix.
  //inside div, we invoke this.genMatrix(). The function above
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

  // Deliverable: Make a default prop, values to determine it's cell colors 
  //              This is a 10x10 array (10 rows, with 10 values in each row)
  Matrix.defaultProps = {
    values: (() => {
      const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
      return (new Array(10).fill(defRow))
    })()
  }
  

//genMatix, for every array a row is created 
//genRow, for every row, the data inside the row, a cell is created. 
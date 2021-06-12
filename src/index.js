import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

//Matrix gets a values prop of pattern1 which is imported from data.js
//open data.js to see that pattern1 is a nested array of '#F00' and '#00F' (red and blue)
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));

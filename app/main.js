import React from 'react';
import {render} from 'react-dom';
import App from './App';
import KanbanBoardContainer from './KanbanBoardContainer';
import './main.css';

//render(<App />, document.getElementById('root'));
render(<KanbanBoardContainer />,document.getElementById('root'));

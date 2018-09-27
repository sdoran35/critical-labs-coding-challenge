/**
 * @author Sean Doran
 * @description This file contains the index app.
 * This is where the React content will actually be served to the HTML DOM
 */
import React from 'react';
import ReactDOM from 'react-dom';


import Layout from './pages/Layout';


const app = document.getElementById('root');

// Will need to update this method to work with Router and Routes
ReactDOM.render(
    <Layout/>, app);
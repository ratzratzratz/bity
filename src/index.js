import React, { Component, useEffect, useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Head from './components/head';
import Bitcoin from './components/Bitcoin';
import Bitcoin2 from './components/Bitcoin2';
import Fetch from './components/fetch';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Head />,
  document.getElementById('head')
);
ReactDOM.render(
  <Fetch />,
  document.getElementById('root')
);
ReactDOM.render(
    <Bitcoin />,
    document.getElementById('chart')
);
ReactDOM.render(
    <Bitcoin2 />,
    document.getElementById('chart2')
);
ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

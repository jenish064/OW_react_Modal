import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import Reducer from "./reducer/reducer"

const store = createStore(Reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
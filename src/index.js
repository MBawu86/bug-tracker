import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@redux js/toolkit'
import App from './App';

//reducers
import authReducer from ',/Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlicer'
import userReducer from './Controllers/Redux/userSlice'

//organize and keep seperate in state
//combine reducer
//redux configure
const reducer = combineReducers({
authReducer: authReducer,
bug: bugReducer,
user: userReducer
})

//configure store

const store = configureReducer({
  reducer 
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,

  document.getElementById('root')
);


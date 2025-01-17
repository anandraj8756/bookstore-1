import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team4/Styles/bootstrap.min.css';
//Team1/Styles/bootstrap.min.css
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import BookReducer from './Team4/store/reducer'
// import store from './Team1/store'
// import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer , userRegisterReducer ,userDetailsReducer,userUpdateProfileReducer,forgotPasswordReducer } from './Team1/reducers/userReducers'


const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}

const middleware = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

// const composedEnhancer = composeWithDevTools(
//   applyMiddleware(loggerMiddleware, thunkMiddleware)
// )

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  BookReducer : BookReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  
}

const appStore = createStore(reducer, initialState , composeWithDevTools(applyMiddleware(...middleware)))

window.store = appStore

ReactDOM.render(
  <React.StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



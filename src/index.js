import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import CreateStudent from "./components/createStudent";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="create" component={CreateStudent}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));

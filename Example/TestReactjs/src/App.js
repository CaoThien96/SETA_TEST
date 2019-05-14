import React from 'react';
import Layout from './container/layout'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducers'
import './App.css';
import 'antd/dist/antd.css';
const store = createStore(rootReducer)
function App() {
  return (
      <Provider store={store}>
          <Layout/>
      </Provider>
  );
}

export default App;

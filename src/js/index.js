import React from 'react';
import ReactDom, { render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/reduxStore';

import App from './components/App';

import '../scss/style.scss';

const store = configureStore();

function startRender() {
  render((
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ), document.querySelector('#app'));
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', startRender, false);
}

import React from 'react';
import ReactDom, { render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import '../scss/style.scss';

function startRender() {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.querySelector('#app'));
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', startRender, false);
}

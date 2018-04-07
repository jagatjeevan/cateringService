// Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import configureStore from './store/configureStore';

// Components
import CommingSoon from './components/CommingSoon';

// Combined reducers
import rootReducer from './reducers/rootReducer';

import "../scss/style.scss";

const store = configureStore();

class App extends from React.Component {
  render() {
    return (<div>hello world</div>);
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#app')
);

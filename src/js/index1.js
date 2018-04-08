// Framework
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// Store
import store from './store/configureStore';

// Components
import CommingSoon from './components/CommingSoon';

// Combined reducers
import rootReducer from './reducers/rootReducer';

import "../scss/style.scss";

class App extends from React.Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#app')
);

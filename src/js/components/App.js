import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ComingSoon from './CommingSoon';
import About from './About';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={ComingSoon} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
  
export default App;

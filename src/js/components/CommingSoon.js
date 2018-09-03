import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export class CommingSoon extends React.Component {
  render() {
    return (
      <div className="coming-soon">
        Coming Soon To Serve You Better
        <Link to='/about'>About</Link>
      </div>
    )
  }
}

export default CommingSoon;

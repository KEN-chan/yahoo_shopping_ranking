import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">All</Link> </li>
          <li><Link to="/category/2502">PC</Link></li>
          <li><Link to="/category/10002">Book, Comic</Link></li>
        </ul>
        <Route path="/all" component={Ranking} />
        <Route 
          path="/category/:id"
          render={
            ({ match }) => <Ranking categoryId={match.params.id} />
          }
        />
      </div>
    );
  }
}

export default App;

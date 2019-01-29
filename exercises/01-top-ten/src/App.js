import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Restaurant from './pages/Restaurant'
import restaurants from './store/restaurants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: restaurants
    }
  }
  render() {
    const{ restaurants } = this.state

    return (
      <Router>
        <div>
          <nav>
            <h2> Restaurants</h2>
              <ul>
                {restaurants.map((restaurant)=>
                  <li>
                    <Link to={`/restaurant/${restaurant.id}`}>
                    {restaurant.name}
                    </Link>
                  </li>
                )}
              </ul>
          </nav>
          <hr/>
          <Switch>
            <Route
              path="/restaurant/:id"
              component={Restaurant}
              />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

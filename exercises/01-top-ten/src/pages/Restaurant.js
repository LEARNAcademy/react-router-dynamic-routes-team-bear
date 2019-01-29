import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Our Mock Restaurant Datastore

import restaurants from '../store/restaurants'

class Restaurant extends Component {
  constructor(props) {
    super(props)
    const{ match } = props

    this.state = {
      restaurantId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    const prevMatch = prevProps.match
    const{ match } = this.props
    if(match.params.id != prevMatch.params.id) {
      this.setState({restaurantId: match.params.id})
    }
  }

  render(){
    const{ restaurantId }= this.state
    const restaurant = restaurants.find((restaurant)=>restaurant.id == restaurantId)

    return(
      <div>
      {restaurant &&
        <div>
          <h1>{restaurant.name}</h1>
          <p><strong>Location:</strong> {restaurant.location}</p>
          <p>The top 3 menu items are: </p>
          <ol>
            <li>
              {restaurant.menuItems[0]}
            </li>
            <li>
              {restaurant.menuItems[1]}
            </li>
            <li>
              {restaurant.menuItems[2]}
            </li>
          </ol>
        </div>
      }

      </div>
    )
  }
}

export default Restaurant

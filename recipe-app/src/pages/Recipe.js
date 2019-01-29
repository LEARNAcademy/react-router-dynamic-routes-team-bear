import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Our Mock Datastore
import recipes from '../store/recipes'

class Recipe extends Component {
  constructor(props){
    super(props)
    const{ match } = props

    this.state={
      recipeId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    const prevMatch = prevProps.match
    const{ match } = this.props
    if(match.params.id != prevMatch.params.id){
      this.setState({recipeId: match.params.id})
    }
    console.log("prevMatch:  ",prevProps)
  }

  render() {
    const{ recipeId } = this.state
    const recipe = recipes.find((r)=> r.id == recipeId)

    return(
      <div>
        {recipe &&
          <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.instructions}</p>
          </div>
        }
      </div>
    )
  }
}

export default Recipe

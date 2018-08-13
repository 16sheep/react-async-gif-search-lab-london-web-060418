import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  state = {
    gifs : []
  }

  onSubmitHandler = (term) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifs => {
      console.log(gifs.data)
      this.setState({
        gifs: gifs.data.slice(0,3)
    })
  })
  }


    render() {
      return (
      <div>
        <GifSearch onSubmitHandler={this.onSubmitHandler}/>
        <GifList gifs={this.state.gifs}/>
      </div>
      )
    }

}

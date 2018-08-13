import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    input : ""
  }

  handleChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state.input)
    this.props.onSubmitHandler(this.state.input)
  }

  //const { onSubmitHandler } = this.props

    render() {
      return(
      <form onSubmit={this.handleSubmit}>
        <input name="input" value={this.state.input} type="text" onChange={this.handleChange}/>
      </form>
    )
    }
}

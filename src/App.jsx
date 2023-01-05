import React, { Component } from 'react'
import Todo from './components/Todo'

export default class App extends Component {
  render(){
    return (
			<>
        <h1>Hello Dojo!</h1>
        <Todo />
			</>
		)
  }
}
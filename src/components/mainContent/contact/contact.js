import React, { Component } from 'react'
import Button from '../../widgets/button';
import Style from './contact.scss'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            buttonText:"wyślij"
        }
    }
  
  
    render() {
    return (
      <div>
        <h1>Kontakt</h1>
        <Button text={this.state.buttonText} class={Style.button}/>
      </div>
    )
  }
}

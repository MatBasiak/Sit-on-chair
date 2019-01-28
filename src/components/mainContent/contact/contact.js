import React, { Component } from 'react'
import FormFields from './formField'
import Button from '../../widgets/button';
import Style from './contact.scss'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            buttonText:"wyślij",

            formData:{
                name:{
                    element:'input',
                    value:'',
                    label:'true',
                    labelText:'Imię',
                    config:{
                        name:'name_input',
                        type:'text',
                        placeholder:'Imie'
                    }

                },
                email: {
                    element: 'input',
                    value: '',
                    label: 'true',
                    labelText: 'email',
                    config: {
                        name: 'name_input',
                        type: 'text',
                        placeholder: 'email'
                    }

                },
                message: {
                    element: 'textarea',
                    value: '',
                    label: 'true',
                    labelText: 'wiadomosc',
                    config: {
                        name: 'name_input',
                        rows:8,
                        cols:36,
                        placeholder: 'wiadomosc'
                    }

                }
            
            }
        }
    }
  
  
    render() {
    return (
      <div>
        <h1>Kontakt</h1>
        <FormFields data={this.state.formData}/>
      
      
        <Button text={this.state.buttonText} class={Style.button}/>
        
      </div>
    )
  }
}

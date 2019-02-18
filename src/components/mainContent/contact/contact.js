import React, { Component } from "react";
import FormFields from "./forms";
import Button from "../../widgets/button";
import Style from "./contact.scss";
import Checkbox from "../../widgets/checkbox";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "wyślij",
      checkbox: {
          element: "checkbox",
          value: "",
          label: true,
          
          config:{
              name: "agree",
              type: "checkbox",
              id: "agree"
          }
      },

      formData: {
        name: {
          element: "input",
          value: "",
          label: false,
          labelText: "Imię",
          config: {
            name: "name_input",
            type: "text",
            placeholder: "Imię"
          }
        },
        email: {
          element: "input",
          value: "",
          label: false,
          labelText: "email",
          config: {
            name: "name_input",
            type: "text",
            placeholder: "email"
          }
        },
        message: {
          element: "textarea",
          value: "",
          label: false,
          labelText: "wiadomosc",
          config: {
            name: "name_input",
            rows: 8,
            cols: 36,
            placeholder: "Wiadomość"
          }
        }
        
      }
    };
  }

  render() {
    return (
      <div className={Style.container}>
       <div>
            <h1> Kontakt </h1>
            <FormFields formData={this.state.formData} class={Style.form}/>
            <Button text={this.state.buttonText} class={Style.button}/>
            <Checkbox data={this.state.checkbox} class={Style.checkbox}/>
            <span> {`Zgadzam się na przetwarzanie danych osobowych`} </span>
            <div className={Style.imageHandler}/>
            </div>

     </div>
    );
  }
}

const dupa='dupa jeza';
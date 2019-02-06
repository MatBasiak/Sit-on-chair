import React, { Component } from "react";
import FormFields from "./forms";
import Button from "../../widgets/button";
import Style from "./contact.scss";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "wyślij",

      formData: {
        name: {
          element: "input",
          value: "",
          label: false,
          labelText: "Imię",
          config: {
            name: "name_input",
            type: "text",
            placeholder: "Imie"
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
            placeholder: "wiadomosc"
          }
        },
        checkbox: {
          element: "checkbox",
          value: "",
          label: true,
          labelText: "zgadzam si ena przetwarzanie danych osobowych",
          config: {
            name: "agree",
            type: "checkbox",
            id: "agree"
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <h1> Kontakt </h1> <FormFields formData={this.state.formData} />
        <Button text={this.state.buttonText} class={Style.button} />
      </div>
    );
  }
}

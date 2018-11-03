import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className={this.props.class}>
            {/* <DropDownMenu />  // prepare when header will be ready*/} 
                <a href ="#"> O firmie</a>
                <a href='#'  > Galeria</a>
                <a href='#'  > Kontakt</a>

      </div>
    )
  }
}

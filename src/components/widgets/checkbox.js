import React, { Component } from 'react'

export default class checkbox extends Component {
 
    render() {
        
    return (
      <div>
          
        <input className={this.props.class} {...this.props.data.config}/>
        
      </div>
    )
  }
}

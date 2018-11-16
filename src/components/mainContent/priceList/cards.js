import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props){
        super(props)
    }
    cardCreator = (data, style)=>{
        const dataArray = Object.values(data)
        
        return(
        dataArray.map((item,i)=>(this.cardCreate(item,style,i)            
        )))
    }


    cardCreate = (item,style,i)=>{
        return(
            <div key={i} className={style.card}>
                <h1>{item.name}</h1>
                <div className={style.priceBox}>{`${item.price} PLN/MSC`}</div>
            </div>
        )}

 
 
 
 
    render() {
    return (
      <div className={this.props.style.cardHolder}>
        {this.cardCreator(this.props.data,this.props.style)}
      </div>
    )
  }
}
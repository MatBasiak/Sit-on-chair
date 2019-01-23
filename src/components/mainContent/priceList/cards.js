import React, { Component } from 'react'
import Button from '../../widgets/button';

export default class Cards extends Component {
    constructor(props){
        super(props)
    }

    featureCreator = (item,style)=>{
        const features=item.features


        return(
            
            features.map((feature, i) => < div key = {i}
                    className = {`${i%2!=0?style.feature_lightgray:style.feature}`} > { feature} </div>
            )
            

        )
        
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
                <h2>{item.name}</h2>
                <div className={style.priceBox}><h3>{`${item.price}`}</h3><span>.99</span><span>pln/msc</span></div>
                < div className = {style.feature_container}> {
                    this.featureCreator(item, style) } </div>
                     <Button class = {style.button} text = {item.buttonText}/>
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

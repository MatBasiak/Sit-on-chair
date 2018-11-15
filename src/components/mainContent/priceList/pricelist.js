import React, { Component } from 'react'
import styles from './pricelist.scss'
import Cards from './cards'

export default class PriceList extends Component {
        constructor(props){
            super(props)
            this.state={
                item1:{
                    name:'Basic Plan',
                    price:85.99
                    // features:['Zakup towaru + dowóz', 'serwis']
                },
                item2:{
                    name:'Standard Plan',
                    price:95.99
                    // features:['Zakup towaru + dowóz', 'serwis', 'gwarancja 5 lat']
                },
                item3:{
                    name:'Advance Plan',
                    price:211.99
                //     features:['Zakup towaru + dowóz', 'serwis', 'gwarancja 6 lat', 'porady projektanta']
                }



            }
        }

  render() {
    return (
      <div className={styles.container}>
          <h1>Cennik</h1>
          <Cards data={this.state} style={styles}/>
      </div>
    )
  }
}

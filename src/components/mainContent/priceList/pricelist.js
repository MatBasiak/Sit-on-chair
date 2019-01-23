import React, { Component } from 'react'
import styles from './pricelist.scss'
import Cards from './cards'

export default class PriceList extends Component {
        constructor(props){
            super(props)
            this.state={
                item1:{
                    name:'Basic Plan',
                    price:85,
                    features:['Zakup towaru + dowóz', 'Serwis'],
                    buttonText:"dołącz"
                },
                item2:{
                    name:'Standard Plan',
                    price:95,
                    features:['Zakup towaru + dowóz', 'Serwis', 'Gwarancja 5 lat'],
                    buttonText: "dołącz"
                },
                item3:{
                    name:'Advance Plan',
                    price:211,
                    features:['Zakup towaru + dowóz', 'Serwis', 'Gwarancja 6 lat', 'Porady projektanta'],
                    buttonText: "dołącz"
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

import React, { Component } from 'react'
import styles from './gallery.scss'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo1: {
                src: 'images/box1_img.jpg',
                text:'chair Clair'
            },
            photo2: {
                src: 'images/box2_img.jpg',
                text:'chair Margerita'
            }
        }
        }

  render() {
    return (
      <div className={styles.galery_container}>
            <Photos style={style.photos} data={this.state}/>
            <Text/>
      </div>
    )
  }
}

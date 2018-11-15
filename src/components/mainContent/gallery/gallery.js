import React, { Component } from 'react'
import Photos from './photos'
import Text from './text'
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
            <Photos style={styles.photos} data={this.state}/>
            <Text style={styles.text}/>
      </div>
    )
  }
}

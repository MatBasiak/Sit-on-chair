import React from 'react'
import Button from '../../widgets/button'
import style from './news.scss'

const News = () => {
  return (
    <div className={style.container}>
      <div className={style.container_left}>     
        <div className={style.leftArrow}>left arrow</div>
        <div className={style.image}/>
      </div>
      
      <div className={style.container_right}>
              <h1>Sit <span>on </span>our <span> chair</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo odio, scelerisque ut tellus nec, porttitor sollicitudin sapien. Donec rutrum, nisi at vehicula gravida, orci ex scelerisque diam, vitae pulvinar arcu ipsum et orci</p>

              <Button class={style.button} />
        <div className={style.rightArrow}>right arrow</div>
      </div>
    </div>
  )
}

export default News

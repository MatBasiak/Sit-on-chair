import React, { PureComponent } from 'react'
import Logo from '../widgets/logo/logo'
import Menu from './menu/menu'
import style from './header.scss'


export default class Header extends PureComponent {
  render() {
      return (
        
      <div className={style.header_container}>
            <Logo class={style.logo}/>
              <Menu class={style.menu}/>
            </div>
              
    )
  }
}

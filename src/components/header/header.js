import React, { PureComponent } from 'react'
import Logo from '../widgets/logo/logo'

export default class Header extends PureComponent {
  render() {
    return (
      <div>
            <Logo />
            {/* <Menu/> */}
      </div>
    )
  }
}

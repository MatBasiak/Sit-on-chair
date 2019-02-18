import React, { Component } from "react";
import Logo from "../widgets/logo/logo"
import Style from './footer.scss'

class Footer extends Component{

    constructor(){
        super();
        this.state={
            
             logos:[{
                link:'www.flickr.com',
                icon:"./images/flickr.png"
             },{
                 link: 'www.flickr.com',
                 icon: "./images/vimeo.png"

             },{
                 link: 'www.flickr.com',
                 icon: "./images/pinterest.png"

             },{
                 link: 'www.flickr.com',
                icon: "./images/twitter.png"

             }]
        }
    }

  
    render(){
        return(
            <div className={Style.footer_container}>
                <p className={Style.copyright}>Copyright 2014 | All Right Reserved - Sit On Chair</p>
                <div className={Style.social}>
                 {this.state.logos.map(logo=>
                    <a href={logo.link}><img src={logo.icon}/></a>
                     )}
                 </div>
                <Logo class={Style.logo}/>
            </div>
        )
    }
        

    

}
export default Footer
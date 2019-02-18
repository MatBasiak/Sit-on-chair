import React, { Component } from "react";
import Logo from "../widgets/logo/logo"

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
            <div>
                <p>footer</p>
                {this.state.logos.map(logo=>
                <a href={logo.link}><img src={logo.icon}/></a>    
        )}
                <Logo/>
            </div>
        )
    }
        

    

}
export default Footer
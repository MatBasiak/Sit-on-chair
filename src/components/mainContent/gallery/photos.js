import React,{Component} from 'react'
import transformer from './transformer';

class Photos extends Component{
    constructor(props){
        super(props)
    }

     photos = (data,)=>{    
        const dataArray = Object.values(data)
        console.log(dataArray);
   
       return ( dataArray.map((element,i )=> (
         <div key={i}>{element.text}<img src={`./${element.src}`}/></div>)
          )   
       )    
          
    }


    render(){
       
        return(
        <div className={this.props.style}>
           {this.photos(this.props.data)}
        </div>
        )
    }

    
}

export default Photos

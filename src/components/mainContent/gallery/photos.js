import React,{Component} from 'react'

class Photos extends Component{
    constructor(props){
        super(props)
    }

     photos = (data,)=>{    
        const dataArray = Object.values(data)
       
   
       return ( dataArray.map((element,i )=> (
         <div key={i}><div><h2>{element.text}</h2></div><img src={`./${element.src}`}/></div>)
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

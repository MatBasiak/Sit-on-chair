import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header'
import style from './index.scss'
import News from './components/mainContent/news/news';
import Gallery from './components/mainContent/gallery/gallery';
import PriceList from './components/mainContent/priceList/pricelist';
import Contact from './components/mainContent/contact/contact';


class App extends React.Component{


    render() {
        return (
            <div className={style.main_container}>
                <Header />
                <News />
                <Gallery/>
                <PriceList/>
                <Contact/>
                <div style={{height:"50px", border:"2px solid green"}}>footer</div> 
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
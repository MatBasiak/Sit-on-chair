import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header'
import style from './index.scss'
import News from './components/mainContent/news/news';


class App extends React.Component{


    render() {
        return (
            <div className={style.main_container}>
                <Header />
                <News/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
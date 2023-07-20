import React from 'react'
import ReactDOM from 'react-dom'
import Headshot from './Components/Headshot'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App(){
    return (
        <div className="card">
            <Headshot />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDom from 'react-dom'

import AppRouter from "./page/router";

class App extends React.Component {
    render(){
        return (
            <div style={{color:"#333"}} className="test test2">
                <AppRouter></AppRouter>
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))
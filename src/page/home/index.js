import React from 'react'
import "./index.less"
import body from "@/assets/images/boy.png"
import girl from "@/assets/images/girl.png"
export default class Home extends React.Component {
    render(){
        return (
            <div className="test test2">
                <p>Home</p>
                <img src={body} alt="" />
                <img src={girl} alt="" />
            </div>
        )
    }
}

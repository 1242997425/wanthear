import React, { Component } from 'react'
import "../fonts/iconfont.css";
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headdleft"><span className="iconfont icon-erji"></span>想听FM</div>
                <div className="inp">
                    <input type="text" placeholder="抖音"/>
                </div>
            </div>
        )
    }
}
export default Header;
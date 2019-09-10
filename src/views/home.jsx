import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import RouterView from "../router/routerView";

export default class componentName extends Component {
    render() {
        console.log(this.props)
        let {children} = this.props;
        return (
            <div className="home">
                <div className="nav">
                    <NavLink to="/home/my" activeClassName="active">我的</NavLink>
                    <NavLink to="/home/remen">热门</NavLink>
                    <NavLink to="/home/fenlei">分类</NavLink>
                    <NavLink to="/home/jingpin">精品</NavLink>
                </div>
                <RouterView routes={children} />
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Route,Switch,Redirect} from "react-router-dom";

class routerViews extends Component {
    render() {
        let {routes} = this.props;
        let routerArr = routes.filter(item=>!item.redirect);
        let redirectArr = routes.filter(item=>item.redirect);
        return (
            <Switch>
                {
                    routerArr.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} children={item.children}/>
                        }}></Route>
                    })
                }
                {
                    redirectArr.map((item,index)=>{
                        return <Redirect key={index} to={item.redirect} from={item.path} />
                    })
                }
            </Switch> 
        )
    }
}
export default routerViews;
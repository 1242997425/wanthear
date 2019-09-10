import React, { Component } from 'react'
import "../mock/mock";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import axios from "axios";
import "../App.css";

class remen extends Component {
    state={
    
    }
    render() {
        return (
            <div className="remen">
                <Carousel autoplay>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                </Carousel>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/login").then((res)=>{
            console.log(res)
        })
    }
}
export default remen;
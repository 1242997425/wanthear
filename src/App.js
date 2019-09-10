import React from 'react';
import './App.css';
import Header from "./component/header";
import {BrowserRouter} from "react-router-dom";
import routes from "./router/router";
import RouterView from "./router/routerView";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <RouterView routes={routes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

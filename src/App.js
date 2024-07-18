import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  page = 6 ;
  
  api = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0,
  }
  setProgress= (progress)=>{
    this.setState({
      progress : progress,
    })
  }
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        shadow ={true}
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
               <Route exact path="/"  element={<><News setProgress={this.setProgress} key="general" pageSize={this.page} country="in" category="general" api={this.api} /> </>}/>
               <Route exact path="/entertainment" element={<><News setProgress={this.setProgress} key="entertainment" pageSize={this.page} country="in" category="entertainment" api={this.api}/></>}/>
               <Route exact path="/business" element={<><News setProgress={this.setProgress} key="business" pageSize={this.page} country="in" category="business" api={this.api}/></>}/>
               <Route exact path="/health" element={<><News setProgress={this.setProgress} key="health" pageSize={this.page} country="in" category="health" api={this.api}/></>}/>
               <Route exact path="/science" element={<><News setProgress={this.setProgress} key="science" pageSize={this.page} country="in" category="science" api={this.api}/></>}/>
               <Route exact path="/sports" element={<><News setProgress={this.setProgress} key="sports" pageSize={this.page} country="in" category="sports" api={this.api}/></>}/>
               <Route exact path="/technology" element={<><News setProgress={this.setProgress} key="technology" pageSize={this.page} country="in" category="technology" api={this.api}/></>}/>
               <Route exact path="/general" element={<><News setProgress={this.setProgress} key="general" pageSize={this.page} country="in" category="general" api={this.api}/></>}/>
          </Routes>
      </BrowserRouter>
      </>
    );
  }
}


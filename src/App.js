import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =() => {
  const page = 6 ;
  const api = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  
  const setProgress= (pro)=>{
    setprogress(pro);
  }

    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        shadow ={true}
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
               <Route exact path="/"  element={<><News setProgress={setProgress} key="general" pageSize={page} country="in" category="general" api={api} /> </>}/>
               <Route exact path="/entertainment" element={<><News setProgress={setProgress} key="entertainment" pageSize={page} country="in" category="entertainment" api={api}/></>}/>
               <Route exact path="/business" element={<><News setProgress={setProgress} key="business" pageSize={page} country="in" category="business" api={api}/></>}/>
               <Route exact path="/health" element={<><News setProgress={setProgress} key="health" pageSize={page} country="in" category="health" api={api}/></>}/>
               <Route exact path="/science" element={<><News setProgress={setProgress} key="science" pageSize={page} country="in" category="science" api={api}/></>}/>
               <Route exact path="/sports" element={<><News setProgress={setProgress} key="sports" pageSize={page} country="in" category="sports" api={api}/></>}/>
               <Route exact path="/technology" element={<><News setProgress={setProgress} key="technology" pageSize={page} country="in" category="technology" api={api}/></>}/>
               <Route exact path="/general" element={<><News setProgress={setProgress} key="general" pageSize={page} country="in" category="general" api={api}/></>}/>
          </Routes>
      </BrowserRouter>
      </>
    );
}
export default App;

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
  import BasicTextFields from "../../pages/login";
  import ResponsiveDrawer from "../../pages/dashboard";
  function Routing(props) {
      return (
        <Router>
            <Routes>
                <Route path = "/" element = {<BasicTextFields/>}/>
                <Route path = "/dashboard" element = {<ResponsiveDrawer/>}/>
                


            </Routes>


        </Router>
      );
  }
  
  export default Routing;
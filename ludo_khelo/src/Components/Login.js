import React, { useState, useRef } from "react";
import './Style.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isMobilePhone } from "validator";
const Login = () => {
    return (
        <div>
            <html lang="en">
   <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <link rel="stylesheet" href="/css/style.css?0.01"/>
      <title>Ludo Khelo</title>
   </head>
   <body>
      <div className="row no-gutters justify-content-center">
         <div className="col-10 col-md-4">
            <div>
               <p className="custom-title">Login</p>
            </div>
            <div className="form-group">
               <form id="loginForm" method="post" >
                  <input type="number" name="whatsappNumber" placeholder="Mobile Number" required="" className="form-control"/><br/>
                  <input type="password" name="password" placeholder="Password" required="" className="form-control"/><br/>
                  <input id="loginButton" type="submit" value="Login" className="btn btn-success"/>
               </form>
            </div>
            <div id="postResponse" className="mssg bg-danger">
               <span id="check" ></span>
            </div>
            <div id="LangTable"><a href="/" id="aa"></a>
            </div>
            <div><span>New here? </span><a href="/register">Sign up now »</a>
            </div>
            <div><a href="/forget">Forgot password?</a>
            </div>
         </div>
      </div>
   </body>
</html>
        </div>
    )
}

export default Login

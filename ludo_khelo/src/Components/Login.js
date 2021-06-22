import './Style.css';
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
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/js/mdb.min.js"></script>
      <script src="/js/index.js?0.24"></script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169318270-1"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
         gtag('config', 'UA-169318270-1', {
           'custom_map': {'dimension1': localStorage.getItem('mobile')}
         });
      </script> */}
      <script src="https://www.google.com/recaptcha/api.js?render=6Leq2qIZAAAAAJ1wD9HsEqZgrmy2w-55RY1f-kiN"></script>
   </body>
</html>
        </div>
    )
}

export default Login

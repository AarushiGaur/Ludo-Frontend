import React from 'react'
import '../App.css'
const Header = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link rel="stylesheet" href="./css/style.css?0.03" />
      <title>Ludo Khelo</title>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Welcome</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Play<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">History</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">Setting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/buyChips">Buy Chips</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sellChips">Sell Chips</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/refer">Refer &amp; Earn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="/support">Raise Query<span class="card-text blink text-danger new">New</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/help">Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/terms">Term &amp; Condition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
          </li> */}
          </ul>
          <span className="navbar-text">
            Chips: 0.00
          </span>
        </div>
      </nav>
      <br />
    </div>
  )
}

export default Header

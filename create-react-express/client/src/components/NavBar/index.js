import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="container" style={{textAlign: 'center'}} >
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <p className="navbar-brand" style={{fontSize: '50px', color: 'white'}}>Google Books Search & Find</p>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <div className='row'>
              <div className="col-md-6">
            <div className="nav-item active" style={{position: 'relative', right: '100px'}}>
              <a className="nav-link" href="/" style={{fontSize: '20px'}}><button type='button'>Home</button></a>
            </div>
            </div>
            <div className="col-md-6">
            <div className="nav-item" style={{position: 'relative', left: '100px', bottom: '28px'}}>
              <a className="nav-link" href="/saved" style={{fontSize: '20px'}}><button type='button'>Saved</button></a>
            </div>
            </div>
          </div>
          </div>
      </div>
    </nav>
    </div>)
}

export default Navbar;
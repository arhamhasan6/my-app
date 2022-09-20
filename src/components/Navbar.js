import React from 'react'
import PropTypes from 'prop-types';
//import About from './About';
//import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
  
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="google.com">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>

          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
       </div>
      </div>
    </nav>
      

  )
}

Navbar.propTypes={
   title: PropTypes.string.isRequired,
   aboutText: PropTypes.string
};
Navbar.defaultProps={
    title:'set title',
}
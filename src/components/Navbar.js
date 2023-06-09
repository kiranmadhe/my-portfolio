import React from 'react'
import Photo from './photos/photo.png'
import {
    Link
  } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar bg-body-tertiary">
        {/* <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Photo} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
          </a>
        </div> */}
      </nav>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/home">Kiran Madhe</Link> */}
          <Link className="navbar-brand" to="/home">
            <img src={Photo} alt="Logo" width={30} height={30} to="/home" className="d-inline-block align-text-top" />
              &nbsp;&nbsp;&nbsp;Kiran Madhe
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar (props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top bg-${props.bgColor}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.textColor}`} to="/">GlobeBriefs</Link>
                <button className={`navbar-toggler bg-${props.bgColor ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon bg-${props.bgColor ? 'light' : 'dark'}`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} aria-current="page" to="/">Home</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/About">AboutUs</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/business">Business</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/entertainment">Entertainment</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/health">Health</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/science">Science</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/sports">Sports</Link> </li>
                        <li className="nav-item"> <Link className={`nav-link text-${props.textColor}`} to="/technology">Technology</Link> </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleTheme} />
                        <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckChecked">{props.themeText}</label>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default NavBar
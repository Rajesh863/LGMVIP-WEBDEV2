import React from "react";
import logo from '../img-folder/download.jpg';
const Navbar =() =>{
    return(
        <React.Fragment>
            <nav className="nav">
                <div>
                <img src={logo} alt="logo"/> 
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
       
    return(
        <div>
        <nav id='mainnav' className="navbar navbar-expand-md mb-0 shadow-sm p-3 bg-white rounded">
          <div className="container">
      <Link className="navbar-brand" to="/homepagelibrary"> <img src="logo_size.png"/></Link>
     
        </div>
    </nav>
        </div>       
    )
  }
}
  
  export default Navbar;
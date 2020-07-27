import React from 'react';
import { Link } from 'react-router-dom';
import './navbar2.css'
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar2 extends React.Component{
    constructor(){
        super()
        this.state = {
        }
        this.navbarsim=this.navbarsim.bind(this)
    }


    navbarsim() {
      console.log('hello!')
      var x = document.getElementById("containersecondnav");
      if (x.className === "topnavcontainer") {
        x.className += " responsive";
      } else {
        x.className = "topnavcontainer";
      }
    }


    render(){
       
    return(
        <div>
        <nav id="secondnav" >
        <FontAwesomeIcon style={{color: 'white', fontSize: "20px"}} onClick={this.navbarsim} icon={faBars} id="burgericonmain"/>
          <div className="topnavcontainer" id="containersecondnav">
    
     
            
            
            <Link id="nav-link3"  to="/homepagelibrary">Library</Link> 
            
            <Link id="nav-link3"  to="/homepageflashcard">Flashcards</Link>
           
            <Link id="nav-link3" to="/homepagequizmul">Practice Level 1</Link>
            
            <Link id="nav-link3" to="/homepagehangman">Practice Level 2</Link>
         
            <Link id="nav-link3" to="/homepagequiz">Practice Level 3</Link>
           

          
          
        </div>
    </nav>
        </div>       
    )
  }
}
  
  export default Navbar2;
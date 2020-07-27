import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
       
    return(
        <div>
       <footer className="footer">
      <div className="container">
        <span className="text-muted">lingo-swift.com &#169;{new Date().getFullYear()}</span>
      </div>
    </footer>
        </div>       
    )
  }
}
  
  export default Footer;
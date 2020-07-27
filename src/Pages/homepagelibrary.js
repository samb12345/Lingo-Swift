import React from 'react';
import Navbar from '../Components/navbar'
import Navbar2 from '../Components/navbar2'
import Footer from '../Components/footer'
import './homepage.css'
import Library from '../Components/library';

class Homepagelibrary extends React.Component{
            
    render(){
    return(
        <div>
            <Navbar/>
        <Navbar2/>
        <Library display={"block"}/>
        <Footer/>
        </div>  
    )
  }
}
  
  export default Homepagelibrary;
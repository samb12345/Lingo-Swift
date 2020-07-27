import React from 'react';
import Navbar from '../Components/navbar'
import Navbar2 from '../Components/navbar2'
import Footer from '../Components/footer'
import './homepage.css'
import Inputquiz from '../Components/inputquiz';


class Homepagequiz extends React.Component{
            
    render(){
    return(
        <div>
            <Navbar/>
        <Navbar2/>
        <Inputquiz/>
        <Footer/>
        </div>  
    )
  }
}
  
  export default Homepagequiz;
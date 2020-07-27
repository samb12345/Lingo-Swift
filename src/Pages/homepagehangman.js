import React from 'react';
import Navbar from '../Components/navbar'
import Navbar2 from '../Components/navbar2'
import Footer from '../Components/footer'
import './homepage.css'
import Hangman from '../Components/hangman';


class Homepagehangman extends React.Component{
            
    render(){
    return(
        <div>
            <Navbar/>
        <Navbar2/>
        <Hangman/>
        <Footer/>
        </div>  
    )
  }
}
  
  export default Homepagehangman;
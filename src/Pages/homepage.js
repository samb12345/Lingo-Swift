import React from 'react';
import Navbar from '../Components/navbar'
import Navbar2 from '../Components/navbar2'
import Footer from '../Components/footer'
import './homepage.css'
import Flashcard from '../Components/flashcards';

class Homepage extends React.Component{
            
    render(){
    return(
        <div>
            <Navbar/>
        <Navbar2/>
        <Footer/>
        </div>  
    )
  }
}
  
  export default Homepage;
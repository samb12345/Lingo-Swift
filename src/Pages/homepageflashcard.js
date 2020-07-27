import React from 'react';
import Navbar from '../Components/navbar'
import Navbar2 from '../Components/navbar2'
import Footer from '../Components/footer'
import './homepage.css'
import Flashcard from '../Components/flashcards';

class Homepageflashcard extends React.Component{
            
    render(){
    return(
        <div>
            <Navbar/>
        <Navbar2/>
        <Flashcard/>
        <Footer/>
        </div>  
    )
  }
}
  
  export default Homepageflashcard;
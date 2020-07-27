import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import Flashcard from './Components/flashcards'
import Hangman from './Components/hangman';
import Multiplechoice from'./Components/multiplechoice'
import Inputquiz from './Components/inputquiz';
import Homepage from './Pages/homepage'
import Homepagehangman from './Pages/homepagehangman'
import Homepageflashcard from './Pages/homepageflashcard'
import Homepagequiz from './Pages/homepagequiz'
import Homepagelibrary from './Pages/homepagelibrary'
import Homepagequizmul from './Pages/homepagequizmul'
import About from './Pages/about'
import Contact from './Pages/contact'



function App (){
    return(
      <Router>
      <div>
      <Route exact path = "/" component={Homepagelibrary}/>
        <Route path = "/homepagehangman" component={Homepagehangman}/>
        <Route path = "/homepagequiz" component={Homepagequiz}/>
        <Route path = "/homepagequizmul" component={Homepagequizmul}/>
        <Route path = "/homepageflashcard" component={Homepageflashcard}/>
        <Route path = "/homepagelibrary" component={Homepagelibrary}/>
        <Route path = "/about" component={About}/>
        <Route path = "/contact" component={Contact}/>
      </div>
      </Router>
    )
}

export default App;

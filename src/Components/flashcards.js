import React from 'react';
import './flashcards.css'
import Child1 from './data'

var shuffledanimals
var shuffletrue
var categoryselected=false
var originalanimals

class Flashcard extends React.Component{
    constructor(){
      super()
      this.state = {
        shouldidisplaymessage: 'block',
        shouldidisplay:'none',
        tempanimals: '',
        objectnum: true,
        wordcount: 0,
        animals: [{category: ''},
        [
        {engname: "", japname: ""},
      ]]
      }
      this.increasewordcount=this.increasewordcount.bind(this)
      this.decreasewordcount=this.decreasewordcount.bind(this)
      this.flippedword=this.flippedword.bind(this)
      this.shufflecat=this.shufflecat.bind(this)
      this.resetcat=this.resetcat.bind(this)
    }
  
  
    increasewordcount(){
        this.setState(prevState=>{
          return{
            wordcount: prevState.wordcount + 1
          }
        })
        this.setState(prevState=>{
          return{
            objectnum: true
          }
        })
        this.wordcountvalidationhigh()
    }
  
    decreasewordcount(){
      this.setState(prevState=>{
        return{
          wordcount: prevState.wordcount - 1
        }
      })
      this.setState(prevState=>{
        return{
          objectnum: true
        }
      })
      this.wordcountvalidationlow()
  }
  
  wordcountvalidationlow(){
    if (this.state.wordcount < 1) {
      this.setState(prevState=>{
        return{
          wordcount: prevState.wordcount = this.state.animals[1].length-1
        }
      })
    }
  }
  
  wordcountvalidationhigh(){
    if (this.state.wordcount > this.state.animals[1].length-2) {
      this.setState(prevState=>{
        return{
          wordcount: prevState.wordcount = 0
        }
      })
    }
  }
  
  flippedword(){
     this.setState(prevState=>{
       return{
         objectnum: !prevState.objectnum
       }
     })
  }
  
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
    }
    return a;
    }
  
  shufflecat(){
    shuffledanimals=this.shuffle(this.state.animals[1].slice())
    console.log(shuffledanimals)
    shuffletrue = true;
    this.setState(prevState=>{
      return{
        wordcount: prevState.wordcount = 0
      }
    })
    this.setState(prevState=>{
      return{
        objectnum: true
      }
    })
    console.log(this.state.animals[1])
  }
  
  resetcat(){
    shuffletrue=false;
    this.setState(prevState=>{
      return{
        wordcount: prevState.wordcount = 0
      }
    })
    this.setState(prevState=>{
      return{
        objectnum: true
      }
    })
  }

  //

  parentFunction=(data_from_child)=>{
    this.setState({animals: data_from_child}, ()=>{ 
originalanimals=this.state.animals.slice()
console.log(originalanimals[1][this.state.wordcount].engname)
categoryselected=true;
        this.setState({wordcount: 0}, ()=>{
      })
    })
    this.setState({shouldidisplay: 'block'}, ()=>{
  })
  this.setState({shouldidisplaymessage: 'none'}, ()=>{
  })
    shuffletrue=false; 
}

//
  
  
    render(){
 
      let currentlan
      let currentsym


     if(categoryselected===true){ 
  if(shuffletrue!==true){
      if (this.state.objectnum===true ) {
        currentlan = originalanimals[1][this.state.wordcount].engname
        currentsym='';
      } else{
        currentlan = originalanimals[1][this.state.wordcount].japname
        currentsym=originalanimals[1][this.state.wordcount].japsym
      }}else{
        if (this.state.objectnum===true ) {
          currentlan = shuffledanimals[this.state.wordcount].engname
          currentsym='';
        } else{
          currentlan = shuffledanimals[this.state.wordcount].japname 
          currentsym=shuffledanimals[this.state.wordcount].japsym
        }
      }
    }
      
    return (
      <div id="flashcardcontainer2">

         <div id="datadiv2">
        <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
        </div>

        <div id="flashcardboxflash">

          <div id="flashheader">
        <h1 id="flashheading">{this.state.animals[0].category}</h1>
        </div>

        <div id="flashcontentdiv">
        <div>
            <h1 style={{display: this.state.shouldidisplaymessage}}>Click a Category to Start!</h1>
          </div>
         <h1 id="flashcontent" style={{display: this.state.shouldidisplay}}>{currentlan}</h1>
         <h1 id="flashcontent" style={{display: this.state.shouldidisplay}}> {currentsym} </h1>
         </div>

         <div id="bottombar">
        <div id="progress1">
         <h6 style={{display: this.state.shouldidisplay}}>Progress: {this.state.wordcount+1} / {this.state.animals[1].length}</h6>
       </div>
         <div id="navbuttons1">
        <button style={{display: this.state.shouldidisplay}} id="flashcardbtn1" className="btn btn-primary btn-lg" onClick={this.decreasewordcount}>Previous</button>
        <button style={{display: this.state.shouldidisplay}} id="flashcardbtn1" className="btn btn-primary btn-lg" onClick={this.increasewordcount}>Next</button>
        <button style={{display: this.state.shouldidisplay}} id="flashcardbtn1" className="btn btn-primary btn-lg" onClick={this.flippedword}>Flip</button>
        <button style={{display: this.state.shouldidisplay}} id="flashcardbtn1" className="btn btn-primary btn-lg" onClick={this.shufflecat}>Shuffle</button>
        <button style={{display: this.state.shouldidisplay}} id="flashcardbtn1" className="btn btn-primary btn-lg" onClick={this.resetcat}>Reset</button>
   </div>
     </div>
         </div>
      </div>
    )
    }
  }
  
  export default Flashcard;
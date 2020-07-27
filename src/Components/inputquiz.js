import React from 'react';
import './inputquiz.css'
import Child1 from './data'

var originalanimals
var shuffledanimals = {}
class Inputquiz extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shouldidisplaystart: 'block',
        gamestart:false,
        engword1:"",
        rightwrongwordtrack1: [],
        rightwrongwordtrack: [],
        shouldidisplay5: 'none',
        shouldidisplay4: 'none',
        shouldidisplay3: 'none',
        shouldidisplay2: 'none',
        shouldidisplay: 'none',
        roundover: false,
        rightwrong: '',
        buttonsubmitted: '',
          value: '',
          gamover: false,
          wordcount: 0,
          finalscore:0,
          scoretrack: 0,
          animals: [{category: ''},
        [
        {engname: "", japname: ""},
      ]]
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.somefunction=this.somefunction.bind(this)
      this.increasewordcount=this.increasewordcount.bind(this)
      this.wordcountvalidationhigh=this.wordcountvalidationhigh.bind(this)
      this.gamoverfun=this.gamoverfun.bind(this)
      this.resetfunction=this.resetfunction.bind(this)
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      if(this.state.roundover===false){
      if(this.state.value===shuffledanimals[this.state.wordcount].japname){
          console.log('true')
          this.setState({scoretrack: this.state.scoretrack+1}, ()=>{
          }) 
          this.setState({rightwrong: 'Thats correct! the answer was' + ' ' + '"'+shuffledanimals[this.state.wordcount].japname+'"'}, ()=>{
          }) 
      } else{
        this.setState({rightwrong: 'Sorry, thats incorrect, the answer was' + ' ' + '"'+shuffledanimals[this.state.wordcount].japname+'"'}, ()=>{
        }) 
        var newStateArray = this.state.rightwrongwordtrack.slice()
      newStateArray.push(shuffledanimals[this.state.wordcount].japname + '')
      this.setState({rightwrongwordtrack: newStateArray}, () => {
          for(var i = 0; i < newStateArray.length; i++){
            console.log(newStateArray[i])
          }
      })
      var newStateArray1 = this.state.rightwrongwordtrack1.slice()
      newStateArray1.push(shuffledanimals[this.state.wordcount].engname + '')
      this.setState({rightwrongwordtrack1: newStateArray1}, () => {
          for(var i = 0; i < newStateArray1.length; i++){
            console.log(newStateArray1[i])
          }
      })
      }
      event.preventDefault();
      this.setState({buttonsubmitted: true}, ()=>{
      }) 
      this.setState({roundover: true}, ()=>{
      }) 
      this.setState({shouldidisplay2: 'none'}, ()=>{
      }) 
      this.setState({shouldidisplay3: 'block'}, ()=>{
      }) 
    }}

    somefunction(){
       shuffledanimals=this.shuffle(originalanimals.slice())
       this.setState({engword1: shuffledanimals[this.state.wordcount].engname}, ()=>{
      })
       this.setState(prevState=>{
        return{
          wordcount: prevState.wordcount = 0
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

      increasewordcount(){
        if(this.state.gamestart===true){
        if(this.state.gamover===false){
        if (this.state.buttonsubmitted===true) {
          this.setState({wordcount: this.state.wordcount+1}, ()=>{
            this.setState({engword1: shuffledanimals[this.state.wordcount].engname}, ()=>{
            })
          })
        this.wordcountvalidationhigh()
    }
    this.setState({value: ''}, ()=>{
    }) 
    this.setState({buttonsubmitted: false}, ()=>{
    })
    this.setState({roundover: false}, ()=>{
    }) 
    this.setState({shouldidisplay2: 'block'}, ()=>{
    }) 
    this.setState({shouldidisplay3: 'none'}, ()=>{
    }) 
  }
}}

    wordcountvalidationhigh(){
      if (this.state.wordcount > shuffledanimals.length-2) {
        this.setState({gamover: true}, ()=>{
          this.gamoverfun()
        }) 
        this.setState(prevState=>{
          return{
            wordcount: prevState.wordcount = 0
          }
        })
      }
    }

    gamoverfun(){
      this.setState({finalscore: this.state.scoretrack}, ()=>{
      }) 
      this.setState({shouldidisplay: 'none'}, ()=>{
      }) 
      this.setState({shouldidisplay2: 'none'}, ()=>{
      }) 
      this.setState({shouldidisplay3: 'none'}, ()=>{
      })
      this.setState({shouldidisplay5: 'block'}, ()=>{
      })  
    }

    parentFunction=(data_from_child)=>{
      this.setState({animals: data_from_child}, ()=>{
          console.log(this.state.animals)
          originalanimals=this.state.animals[1].slice()
          this.setState({gamestart: true}, ()=>{
            this.resetfunction()
          })
          this.somefunction()
      })
      this.setState({ shouldidisplaystart: 'none'}, ()=>{
      }) 
      this.setState({shouldidisplay: 'block'}, ()=>{
      })
      this.setState({shouldidisplay2: 'block'}, ()=>{
      })
      this.setState({shouldidisplay4: 'block'}, ()=>{
      }) 
      this.setState({shouldidisplay5: 'none'}, ()=>{
      }) 
      this.setState({gamover: false}, ()=>{
      }) 
  }

  resetfunction(){
    if(this.state.gamestart===true){
    this.setState({rightwrongwordtrack: []}, ()=>{
    })
    this.setState({rightwrongwordtrack1: []}, () => {
    })
    this.setState({ shouldidisplay3: 'none'}, ()=>{
    }) 
    this.setState({shouldidisplay: 'block'}, ()=>{
    })
    this.setState({shouldidisplay2: 'block'}, ()=>{
    })
    this.setState({shouldidisplay4: 'block'}, ()=>{
    }) 
    this.setState({shouldidisplay5: 'none'}, ()=>{
    })
    this.setState({ roundover: false}, ()=>{
    }) 
    this.setState({ rightwrong: ''}, ()=>{
    }) 
    this.setState({  buttonsubmitted: ''}, ()=>{
    }) 
    this.setState({ value: ''}, ()=>{
    }) 
    this.setState({ gamover: false}, ()=>{
      this.somefunction()
    }) 
    this.setState({  wordcount: 0}, ()=>{
    }) 
    this.setState({   finalscore:0}, ()=>{
    }) 
    this.setState({scoretrack: 0}, ()=>{
    })     
  }
}
    
  
    render() {
      var engname= this.state.engword1
      
      return (
        <div id="flashcardcontainerinput">

        <div id="datadivinput1">
        <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
        </div>

        <div id="flashcardboxinput1">

          <div id="flashheaderinput">
          <h1 style={{display: this.state.shouldidisplay}}>{this.state.animals[0].category}</h1>
          </div>
        
        <div id="flashcontentinput">
          <h1 style={{display: this.state.shouldidisplaystart}}>Select a Category to Start!</h1>
        <h3 style={{display: this.state.shouldidisplay5}}>The words you got incorrect were:</h3>
        <div id="wrongwordsinput">
        <div id="wrongwordinputsection1">
          <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[0]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[0]}</h3>
         </div>
         <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[1]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[1]}</h3>
          </div>
          <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[2]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[2]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[3]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[3]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[4]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[4]}</h3>
        </div>
        </div>
        <div id="wrongwordinputsection2">
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[5]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[5]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[6]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[6]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[7]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[7]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[8]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[8]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[9]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[9]}</h3>
        </div>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[10]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[10]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[11]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[11]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[12]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[12]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[13]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[13]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[14]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[14]}</h3>
        </div>
       <div>
       <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[15]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[15]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[16]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[16]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[17]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[17]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[18]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[18]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[19]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[19]}</h3>
        </div>
        <div className="rightwronginputpair">
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack1[20]}</h3>
        <h3 style={{display: this.state.shouldidisplay5}}>{this.state.rightwrongwordtrack[20]}</h3>
        </div>
        </div>
        </div>

        <h4 style={{display: this.state.shouldidisplay3}}>{this.state.rightwrong}</h4>
        <h1 style={{display: this.state.shouldidisplay2}}>{engname}</h1>
          <div>
        <form style={{display: this.state.shouldidisplay2}} onSubmit={this.handleSubmit}>
        <h3>Type the Japanese Translation:</h3> 
        <div id="inputsection">
          <label>
            <input className="inputbox1" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input id="inputsubmitbtn" className="btn btn-primary btn-lg" type="submit" value="Submit Answer"/>
          </div>
        </form>
        </div>
        </div>

        <div id="bottombarinput">
          <div id="progressinput">
          <h6 style={{display: this.state.shouldidisplay}}>Progress: {this.state.wordcount+1} / {this.state.animals[1].length}</h6>
          </div>
        <div id="navbuttonsin">
              <button style={{display: this.state.shouldidisplay}} id="flashcardbtn4" className="btn btn-primary btn-lg" onClick={this.increasewordcount}>Next</button>
              <button style={{display: this.state.shouldidisplay}} id="flashcardbtn4" className="btn btn-primary btn-lg" onClick={this.resetfunction}>Reset</button>
              </div>
              <div id="inputscore">
              <h6 style={{display: this.state.shouldidisplay4}}>Score: {this.state.scoretrack} / {this.state.animals[1].length}</h6>
              </div>
              </div>

        </div>
        </div>
      );
    }
  }
  
  export default Inputquiz
import React from 'react';
import './quizmul.css'
import Child1 from './data'


let catarray = [{category: ''},
       [{engname: "jjjj", japname: "jjjjjj"},
       {engname: "jjjj", japname: "jjjjjj"},
       {engname: "jjjj", japname: "jjjjjj"},
       {engname: "jjjj", japname: "jjjjjj"},
       {engname: "jjjj", japname: "jjjjjj"},
       {engname: "jjjj", japname: "jjjjjj"},
       ]
       ]

var originalanimals
var shuffledanimals 
let newarray
let newarrayran
class Multiplechoice extends React.Component{
    constructor(){
      super()
      this.state = {
        shouldidisplaycatstart: 'block',
        gamestart:false,
        shouldidisplay4: 'none', 
        shouldidisplay3: 'none',
        shouldidisplay2: 'block',
        shouldidisplay: 'none',
        rightwrongwordtrack1: [],
        rightwrongwordtrack: [],
        isgameover: false,
        isroundover: '',
        resultanswer: '',
        shouldidisplayresult: 'none',
        scoretrack: 0,
        ran1: '',
        ran2: '',
        ran3: '',
        ran4: '',
        answer2: '',
        answer3:'',
        answer4: '',
        answerarray: [],
        engword: '',
        japword: '',
        wordcount: 0,
       animals: catarray,
      }
      this.currentcategory=this.currentcategory.bind(this)
      this.shuffle=this.shuffle.bind(this)
      this.wincheck1=this.wincheck1.bind(this)
      this.wincheck2=this.wincheck2.bind(this)
      this.wincheck3=this.wincheck3.bind(this)
      this.wincheck4=this.wincheck4.bind(this) 
      this.increasewordcount=this.increasewordcount.bind(this)
      this.confirmarray=this.confirmarray.bind(this)
      this.wordcountvalidationhigh=this.wordcountvalidationhigh.bind(this)
      this.resetfunction=this.resetfunction.bind(this)
    }

     currentcategory(){
        shuffledanimals=this.shuffle(originalanimals[1].slice())
        console.log(shuffledanimals)
        this.setState({engword: shuffledanimals[this.state.wordcount].engname}, ()=>{
        })
        this.setState({japword: shuffledanimals[this.state.wordcount].japname}, ()=>{
        })
        this.setState({wordcount: 0}, ()=>{
        })
        this.setState({isroundover: false}, ()=>{
        })
        this.setState({shouldidisplay3: 'block'}, ()=>{
        })
        this.setState({shouldidisplay4: 'block'}, ()=>{
        })
        this.setState({isgameover: false}, ()=>{
        })
        this.confirmarray()
      }

      confirmarray(){
        
        var arr=[]
        while (arr.length<3) {
          var r = Math.floor(Math.random()*catarray[1].length);
          if(arr.indexOf(r)===-1 && r!==this.state.wordcount){arr.push(r);}
        }
        arr=arr.concat(this.state.wordcount)
        this.shuffle(arr);
        console.log(arr);
        this.setState({ran1: shuffledanimals[arr[0]].japname}, ()=>{
          console.log(this.state.ran2)
        })
        this.setState({ran2: shuffledanimals[arr[1]].japname}, ()=>{
          console.log(this.state.ran2)
        })
        this.setState({ran3: shuffledanimals[arr[2]].japname}, ()=>{
          console.log(this.state.ran3)
        })
        this.setState({ran4: shuffledanimals[arr[3]].japname}, ()=>{
          console.log(this.state.ran4)
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
    
wincheck1(){
if(this.state.ran1===this.state.japword && this.state.isroundover===false){
  this.setState({isroundover: true}, ()=>{
  })
console.log('you win')
this.setState({resultanswer: 'Correct! The Word is '}, ()=>{
}) 
this.setState({shouldidisplayresult: 'block'}, ()=>{
}) 
this.setState({shouldidisplay2: 'none'}, ()=>{
}) 
this.setState({scoretrack: this.state.scoretrack+1}, ()=>{
})
}else if(this.state.isroundover===false){{
  this.setState({isroundover: true}, ()=>{
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
            console.log(newStateArray[i])
          }
  })
    console.log('you lost')
    this.setState({resultanswer: 'Sorry, Thats Incorrect!, The Answer is '}, ()=>{
    }) 
    this.setState({shouldidisplayresult: 'block'}, ()=>{
    }) 
    this.setState({shouldidisplay2: 'none'}, ()=>{
    }) 
}}
}

wincheck2(){
    if(this.state.ran2===this.state.japword && this.state.isroundover===false){
      this.setState({isroundover: true}, ()=>{
      })
      this.setState({resultanswer: 'Correct! The Word is '}, ()=>{
      }) 
      this.setState({shouldidisplayresult: 'block'}, ()=>{
      }) 
      this.setState({shouldidisplay2: 'none'}, ()=>{
      }) 
    console.log('you win')
    this.setState({scoretrack: this.state.scoretrack+1}, ()=>{
    })
    }else if(this.state.isroundover===false){{
      this.setState({isroundover: true}, ()=>{
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
            console.log(newStateArray[i])
          }
  })
        console.log('you lost')
        this.setState({resultanswer: 'Sorry, Thats Incorrect!, The Answer is '}, ()=>{
        }) 
        this.setState({shouldidisplayresult: 'block'}, ()=>{
        }) 
        this.setState({shouldidisplay2: 'none'}, ()=>{
        }) 
    }}
    }

    wincheck3(){
        if(this.state.ran3===this.state.japword && this.state.isroundover===false){
          this.setState({isroundover: true}, ()=>{
          })
          this.setState({resultanswer: 'Correct! The Word is '}, ()=>{
          }) 
          this.setState({shouldidisplayresult: 'block'}, ()=>{
          }) 
          this.setState({shouldidisplay2: 'none'}, ()=>{
          }) 
        console.log('you win')
        this.setState({scoretrack: this.state.scoretrack+1}, ()=>{
        })
        }else if(this.state.isroundover===false){{
          this.setState({isroundover: true}, ()=>{
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
            console.log(newStateArray[i])
          }
  })
            console.log('you lost')
            this.setState({resultanswer: 'Sorry, Thats Incorrect!, The Answer is '}, ()=>{
            }) 
            this.setState({shouldidisplayresult: 'block'}, ()=>{
            }) 
            this.setState({shouldidisplay2: 'none'}, ()=>{
            }) 
        }}
        }

        wincheck4(){
            if(this.state.ran4===this.state.japword && this.state.isroundover===false){
              this.setState({isroundover: true}, ()=>{
              })
              this.setState({resultanswer: 'Correct! The Word is '}, ()=>{
              }) 
              this.setState({shouldidisplayresult: 'block'}, ()=>{
              }) 
              this.setState({shouldidisplay2: 'none'}, ()=>{
              }) 
            console.log('you win')
            this.setState({scoretrack: this.state.scoretrack+1}, ()=>{
            })
            }else if(this.state.isroundover===false){{
              this.setState({isroundover: true}, ()=>{
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
            console.log(newStateArray[i])
          }
  })
                console.log('you lost')
                this.setState({resultanswer: 'Sorry, Thats Incorrect!, The Answer is '}, ()=>{
                }) 
                this.setState({shouldidisplayresult: 'block'}, ()=>{
                }) 
                this.setState({shouldidisplay2: 'none'}, ()=>{
                }) 
            }}
            }

increasewordcount(){
  if (this.state.isroundover===true && this.state.isgameover===false) {
    this.setState({isroundover: false}, ()=>{
    })
  this.setState({shouldidisplayresult: 'none'}, ()=>{
  })
  this.setState({shouldidisplay2: 'block'}, ()=>{
  }) 
  let currentcount = this.state.wordcount
                this.setState({wordcount: currentcount+1}, ()=>{
                  this.confirmarray()
                    console.log(this.state.wordcount)
                    this.setState({engword: shuffledanimals[this.state.wordcount].engname}, ()=>{
                    })
                    this.setState({japword: shuffledanimals[this.state.wordcount].japname}, ()=>{
                    })
                })
                this.wordcountvalidationhigh()
              }
            }

    wordcountvalidationhigh(){
         if (this.state.wordcount === this.state.animals[1].length-1) {
          this.setState({isroundover: true}, ()=>{
          })
          this.setState({isgameover: true}, ()=>{
          })
          this.setState({shouldidisplay: 'block'}, ()=>{
          })
          this.setState({wordcount: 0}, ()=>{
          })
          this.setState({shouldidisplay2: 'none'}, ()=>{
          })
          this.setState({shouldidisplay3: 'none'}, ()=>{
          })
                  }
                }


                resetfunction(){
                  if(this.state.gamestart===true){
                  this.setState({rightwrongwordtrack: []}, () => {
                  })
                  this.setState({rightwrongwordtrack1: []}, () => {
                  })
                  this.setState({shouldidisplay: 'none'}, ()=>{
                  })
                  this.setState({shouldidisplay2: 'block'}, ()=>{
                  })
                  this.setState({resultanswer: ''}, () => {
                  })
                  this.setState({shouldidisplayresult: 'none'}, () => {
                  })
                  this.setState({ scoretrack: 0}, () => {
                  })
                  this.setState({ran1: ''}, () => {
                  })
                  this.setState({ran2: ''}, () => {
                  })
                  this.setState({ran3: ''}, () => {
                  })
                  this.setState({ran4: ''}, () => {
                  })
                  this.setState({answer2: ''}, () => {
                  })
                  this.setState({answer3: ''}, () => {
                  })
                  this.setState({answer4: ''}, () => {
                  })
                  this.setState({ answerarray: []}, () => {
                  })
                  this.setState({engword: ''}, () => {
                  })
                  this.setState({japword: ''}, () => {
                  })
                  this.setState({wordcount: 0}, () => {
                  })
                  this.currentcategory()
                }}

                parentFunction=(data_from_child)=>{
                  this.setState({animals: data_from_child}, ()=>{
                      console.log(this.state.animals)
                      originalanimals=this.state.animals.slice()
                      console.log(originalanimals[1])
                      this.setState({shouldidisplaycatstart: 'none'}, () => {
                      }) 
                      this.setState({gamestart: true}, () => {
                        this.resetfunction()
                      })
                  })
              }
                
    render(){
       
console.log(this.state.scoretrack)
    return (
      <div id="flashcardcontainermul">

         <div id="datadivmul">
        <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
        </div>

      <div id="flashcardboxmul">

      <div id="flashheadermul">
        <h1>{this.state.animals[0].category}</h1>
      </div>

      <div id="flashcontentmul">

        <div id="catstart" style={{display: this.state.shouldidisplaycatstart}}>
          <h1>Select a Category to Start!</h1>
        </div>

        <div id="subjectword">
      <h1 style={{display: this.state.shouldidisplay2}}>{this.state.engword}</h1>
        <h1 style={{display: this.state.shouldidisplayresult}}>{this.state.resultanswer}{this.state.japword}</h1>
        </div>

        <div id="randomwords"> 
        <div id="ranword" style={{display: this.state.shouldidisplay2}}>
        <h3 onClick={this.wincheck1}>{this.state.ran1}</h3>
        </div>
        <div id="ranword" style={{display: this.state.shouldidisplay2}}>
        <h3 onClick={this.wincheck2}>{this.state.ran2}</h3>
        </div>
        <div id="ranword" style={{display: this.state.shouldidisplay2}}>
        <h3 onClick={this.wincheck3}>{this.state.ran3}</h3>
        </div>
        <div id="ranword" style={{display: this.state.shouldidisplay2}}>
        <h3  onClick={this.wincheck4}>{this.state.ran4}</h3>
        </div>
        </div>

       
        <h3 style={{display: this.state.shouldidisplay}}>The words you got incorrect:</h3>
        <div id="wrongwordsmul">
        <div style={{display: this.state.shouldidisplay}} id="wrongwordmulsection1">
          <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[0]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[0]}</h3>
         </div>
         <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[1]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[1]}</h3>
          </div>
          <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[2]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[2]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[3]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[3]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[4]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[4]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordmulsection2">
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[5]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[5]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[6]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[6]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[7]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[7]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[8]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[8]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[9]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[9]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordmulsection3">
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[10]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[10]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[11]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[11]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[12]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[12]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[13]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[13]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[14]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[14]}</h3>
        </div>
       <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[15]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[15]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordmulsection4">
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[16]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[16]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[17]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[17]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[18]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[18]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[19]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[19]}</h3>
        </div>
        <div className="rightwrongmulpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[20]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[20]}</h3>
        </div>
        </div>
        </div>

        </div>
      

      <div id="bottombar1">
      
      <div id="progressmul">
        <h6 style={{display: this.state.shouldidisplay3}}>Progress: {this.state.wordcount + 1} / {this.state.animals[1].length}</h6>
        </div>

        <div id="navbuttonsmul">
        <button style={{display: this.state.shouldidisplay3}}  id="flashcardbtn2" className="btn btn-primary btn-lg" onClick={this.increasewordcount}>Next</button>
        <button style={{display: this.state.shouldidisplay3}} id="flashcardbtn2" className="btn btn-primary btn-lg" onClick={this.resetfunction}>Restart</button>
      </div>

      <div id="scoremul">
      <h6 style={{display: this.state.shouldidisplay4}}>Score: {this.state.scoretrack} / {this.state.animals[1].length}</h6>
        </div>


       </div>

       </div>

      </div>

    )
    }
  }
  
  export default Multiplechoice;
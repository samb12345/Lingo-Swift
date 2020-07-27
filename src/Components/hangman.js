import React from 'react';
import Child1 from './data'
import './hangman.css'


var originalanimals
var shuffledanimals
class Hangman extends React.Component{
    constructor(){
        super()
        this.state = {
            btnopacita: 1,
            btnopacitb: 1,
            btnopacitc: 1,
            btnopacitd: 1,
            btnopacite: 1,
            btnopacitf: 1,
            btnopacitg: 1,
            btnopacith: 1,
            btnopaciti: 1,
            btnopacitj: 1,
            btnopacitk: 1,
            btnopacitl: 1,
            btnopacitm: 1,
            btnopacitn: 1,
            btnopacito: 1,
            btnopacitp: 1,
            btnopacitq: 1,
            btnopacitr: 1,
            btnopacits: 1,
            btnopacitt: 1,
            btnopacitu: 1,
            btnopacitv: 1,
            btnopacitw: 1,
            btnopacitx: 1,
            btnopacity: 1,
            btnopacitz: 1,
            btnopacitspace: 1,
            japword:'',
            displaystart: 'none',
            displaystart2: 'none',
            displaystart3: 'block',
            shouldidisplayscr: 'none',
            gamestart:false,
            message: '',
            sample1: 0,
            clicka: false,
            clickb: false,
            clickc: false,
            clickd: false,
            clicke: false,
            clickf: false,
            clickg: false,
            clickh: false,
            clicki: false,
            clickj: false,
            clickk: false,
            clickl: false,
            clickm: false,
            clickn: false,
            clicko: false,
            clickp: false,
            clickq: false,
            clickr: false,
            clicks: false,
            clickt: false,
            clicku: false,
            clickv: false,
            clickw: false,
            clickx: false,
            clicky: false,
            clickz: false,
            clickspace: false,
            gameover: false,
            gamestart: false,
            shouldidisplay: 'none',
            shouldidisplay2: 'none',
            shouldidisplay3: 'none',
            shouldidisplay6: 'none',
            rightwrongwordtrack: [],
            rightwrongwordtrack1: [],
            finalscore: '',
            scoretrack: 0,
            roundover: false,
            engword: '',
            losecheck: '',
            losecount: 3,
            wordcount: 0,
            wincheck: '',
            value: 1,
            currentletter: [],
            placehold: "_",
            placeholder: '',
            indices: [],
            animals: [{category: ''},
            [{engname: "", japname: ""},
            ]
            ],
        }
        this.letterfunctiona=this.letterfunctiona.bind(this)
        this.letterfunctionb=this.letterfunctionb.bind(this)
        this.letterfunctionc=this.letterfunctionc.bind(this)
        this.letterfunctiond=this.letterfunctiond.bind(this)
        this.letterfunctione=this.letterfunctione.bind(this)
        this.letterfunctionf=this.letterfunctionf.bind(this)
        this.letterfunctiong=this.letterfunctiong.bind(this)
        this.letterfunctionh=this.letterfunctionh.bind(this)
        this.letterfunctioni=this.letterfunctioni.bind(this)
        this.letterfunctionj=this.letterfunctionj.bind(this)
        this.letterfunctionk=this.letterfunctionk.bind(this)
        this.letterfunctionl=this.letterfunctionl.bind(this)
        this.letterfunctionm=this.letterfunctionm.bind(this)
        this.letterfunctionn=this.letterfunctionn.bind(this)
        this.letterfunctiono=this.letterfunctiono.bind(this)
        this.letterfunctionp=this.letterfunctionp.bind(this)
        this.letterfunctionq=this.letterfunctionq.bind(this)
        this.letterfunctionr=this.letterfunctionr.bind(this)
        this.letterfunctions=this.letterfunctions.bind(this)
        this.letterfunctiont=this.letterfunctiont.bind(this)
        this.letterfunctionu=this.letterfunctionu.bind(this)
        this.letterfunctionv=this.letterfunctionv.bind(this)
        this.letterfunctionw=this.letterfunctionw.bind(this)
        this.letterfunctionx=this.letterfunctionx.bind(this)
        this.letterfunctiony=this.letterfunctiony.bind(this)
        this.letterfunctionz=this.letterfunctionz.bind(this)
        this.letterfunctionspace=this.letterfunctionspace.bind(this)
        this.checkletter=this.checkletter.bind(this)
        this.replaceletters=this.replaceletters.bind(this)
        this.setCharAt=this.setCharAt.bind(this)
        this.resetindices = this.resetindices.bind(this)
        this.initialiseplaceholder=this.initialiseplaceholder.bind(this)
        this.increasewordcount=this.increasewordcount.bind(this)
        this.wordcountvalidationhigh=this.wordcountvalidationhigh.bind(this)
        this.loselifefunction=this.loselifefunction.bind(this)
        this.resetgame=this.resetgame.bind(this)
    }

    
   
    letterfunctiona(){
        if (this.state.roundover===false && this.state.gamestart===true && this.state.clicka === false && this.state.gameover===false) {
        this.setState({currentletter: 'a'}, () => {
            console.log(this.state.currentletter);
            this.checkletter()
        })
        this.setState({clicka: true}, () => {
        })
        this.setState({btnopacitya: 0.5}, () => {
        })
    }
          }

          letterfunctionb(){
            if (this.state.roundover===false && this.state.gamestart===true && this.state.clickb === false  && this.state.gameover===false) {
            this.setState({currentletter: 'b'}, () => {
                console.log(this.state.currentletter);
                this.checkletter()
            })
            this.setState({clickb: true}, () => {
            })
            this.setState({btnopacityb: 0.5}, () => {
            })
              }
            }
    

    letterfunctionc(){
        if (this.state.roundover===false && this.state.gamestart===true && this.state.clickc === false  && this.state.gameover===false) {
        this.setState({currentletter: 'c'}, () => {
            console.log(this.state.currentletter);
            this.checkletter()
        })
        this.setState({clickc: true}, () => {
        })
        this.setState({btnopacityc: 0.5}, () => {
        })
          }
        }

          letterfunctiond(){
            if (this.state.roundover===false && this.state.gamestart===true && this.state.clickd === false  && this.state.gameover===false) {
            this.setState({currentletter: 'd'}, () => {
                console.log(this.state.currentletter);
                this.checkletter()
            })
            this.setState({clickd: true}, () => {
            })
            this.setState({btnopacityd: 0.5}, () => {
            })
              }
            }

              letterfunctione(){
                if (this.state.roundover===false && this.state.gamestart===true && this.state.clicke === false  && this.state.gameover===false) {
                this.setState({currentletter: 'e'}, () => {
                    console.log(this.state.currentletter);
                    this.checkletter()
                })
                this.setState({clicke: true}, () => {
                })
                this.setState({btnopacitye: 0.5}, () => {
                })
                  }
                }

                  letterfunctionf(){
                    if (this.state.roundover===false && this.state.gamestart===true && this.state.clickf === false  && this.state.gameover===false) {
                    this.setState({currentletter: 'f'}, () => {
                        console.log(this.state.currentletter);
                        this.checkletter()
                    })
                    this.setState({clickf: true}, () => {
                    })
                    this.setState({btnopacityf: 0.5}, () => {
                    })
                      }
                    }


                      letterfunctiong(){
                        if (this.state.roundover===false && this.state.gamestart===true && this.state.clickg === false  && this.state.gameover===false) {
                        this.setState({currentletter: 'g'}, () => {
                            console.log(this.state.currentletter);
                            this.checkletter()
                        })
                        this.setState({clickg: true}, () => {
                        })
                        this.setState({btnopacityg: 0.5}, () => {
                        })
                          }
                        }


                          letterfunctionh(){
                            if (this.state.roundover===false && this.state.gamestart===true && this.state.clickh === false  && this.state.gameover===false) {
                            this.setState({currentletter: 'h'}, () => {
                                console.log(this.state.currentletter);
                                this.checkletter()
                            })
                            this.setState({clickh: true}, () => {
                            })
                            this.setState({btnopacityh: 0.5}, () => {
                            })
                              }
                            }
    
        letterfunctioni(){
            if (this.state.roundover===false && this.state.gamestart===true && this.state.clicki === false  && this.state.gameover===false) {
        this.setState({currentletter: 'i'}, () => {
            console.log(this.state.currentletter);
            this.checkletter()
        })
        this.setState({clicki: true}, () => {
        })
        this.setState({btnopacityi: 0.5}, () => {
        })
            }
        }

            letterfunctionj(){
                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickj === false  && this.state.gameover===false) {
                this.setState({currentletter: 'j'}, () => {
                    console.log(this.state.currentletter);
                    this.checkletter()
                })
                this.setState({clickj: true}, () => {
                })
                this.setState({btnopacityj: 0.5}, () => {
                })
                    }
                }

                    letterfunctionk(){
                        if (this.state.roundover===false && this.state.gamestart===true && this.state.clickk === false  && this.state.gameover===false) {
                        this.setState({currentletter: 'k'}, () => {
                            console.log(this.state.currentletter);
                            this.checkletter()
                        })
                        this.setState({clickk: true}, () => {
                        })
                        this.setState({btnopacityk: 0.5}, () => {
                        })
                    }
                            }

                            letterfunctionl(){
                                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickl === false  && this.state.gameover===false) {
                                this.setState({currentletter: 'l'}, () => {
                                    console.log(this.state.currentletter);
                                    this.checkletter()
                                })
                                this.setState({clickl: true}, () => {
                                })
                                this.setState({btnopacityl: 0.5}, () => {
                                })
                                    }
                                }

                                    letterfunctionm(){
                                        if (this.state.roundover===false && this.state.gamestart===true && this.state.clickm === false  && this.state.gameover===false) {
                                        this.setState({currentletter: 'm'}, () => {
                                            console.log(this.state.currentletter);
                                            this.checkletter()
                                        })
                                        this.setState({clickm: true}, () => {
                                        })
                                        this.setState({btnopacitym: 0.5}, () => {
                                        })
                                            }
                                        }

                                            letterfunctionn(){
                                                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickn === false  && this.state.gameover===false) {
                                                this.setState({currentletter: 'n'}, () => {
                                                    console.log(this.state.currentletter);
                                                    this.checkletter()
                                                })
                                                this.setState({clickn: true}, () => {
                                                })
                                                this.setState({btnopacityn: 0.5}, () => {
                                                })
                                                    }
                                                }

        letterfunctiono(){
            if (this.state.roundover===false && this.state.gamestart===true && this.state.clicko === false  && this.state.gameover===false) {
            this.setState({currentletter: 'o'}, () => {
                console.log(this.state.currentletter);
                this.checkletter()
            })
            this.setState({clicko: true}, () => {
            })
            this.setState({btnopacityo: 0.5}, () => {
            })
                }
            }

                letterfunctionp(){
                    if (this.state.roundover===false && this.state.gamestart===true && this.state.clickp === false && this.state.gameover===false) {
                    this.setState({currentletter: 'p'}, () => {
                        console.log(this.state.currentletter);
                        this.checkletter()
                    })
                    this.setState({clickp: true}, () => {
                    })
                    this.setState({btnopacityp: 0.5}, () => {
                    })
                        }
                    }

                        letterfunctionq(){
                            if (this.state.roundover===false && this.state.gamestart===true && this.state.clickq === false  && this.state.gameover===false) {
                            this.setState({currentletter: 'q'}, () => {
                                console.log(this.state.currentletter);
                                this.checkletter()
                            })
                            this.setState({clickq: true}, () => {
                            })
                            this.setState({btnopacityq: 0.5}, () => {
                            })
                                }
                            }

                                letterfunctionr(){
                                    if (this.state.roundover===false && this.state.gamestart===true && this.state.clickr === false  && this.state.gameover===false) {
                                    this.setState({currentletter: 'r'}, () => {
                                        console.log(this.state.currentletter);
                                        this.checkletter()
                                    })
                                    this.setState({clickr: true}, () => {
                                    })
                                    this.setState({btnopacityr: 0.5}, () => {
                                    })
                                        }
                                    }

                                        letterfunctions(){
                                            if (this.state.roundover===false && this.state.gamestart===true && this.state.clicks === false  && this.state.gameover===false) {
                                            this.setState({currentletter: 's'}, () => {
                                                console.log(this.state.currentletter);
                                                this.checkletter()
                                            })
                                            this.setState({clicks: true}, () => {
                                            })
                                            this.setState({btnopacitys: 0.5}, () => {
                                            })
                                                }
                                            }

                                                letterfunctiont(){
                                                    if (this.state.roundover===false && this.state.gamestart===true && this.state.clickt === false  && this.state.gameover===false) {
                                                    this.setState({currentletter: 't'}, () => {
                                                        console.log(this.state.currentletter);
                                                        this.checkletter()
                                                    })
                                                    this.setState({clickt: true}, () => {
                                                    })
                                                    this.setState({btnopacityt: 0.5}, () => {
                                                    })
                                                        }
                                                    }
                                                        
    letterfunctionu(){
        if (this.state.roundover===false && this.state.gamestart===true && this.state.clicku === false  && this.state.gameover===false) {
        this.setState({currentletter: 'u'}, () => {
            console.log(this.state.currentletter);
            this.checkletter()
        })
        this.setState({clicku: true}, () => {
        })
        this.setState({btnopacityu: 0.5}, () => {
        })
            }
        }

            letterfunctionv(){
                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickv === false  && this.state.gameover===false) {
                this.setState({currentletter: 'v'}, () => {
                    console.log(this.state.currentletter);
                    this.checkletter()
                })
                this.setState({clickv: true}, () => {
                })
                this.setState({btnopacityv: 0.5}, () => {
                })
                    }
                }

                    letterfunctionw(){
                        if (this.state.roundover===false && this.state.gamestart===true && this.state.clickw === false  && this.state.gameover===false) {
                        this.setState({currentletter: 'w'}, () => {
                            console.log(this.state.currentletter);
                            this.checkletter()
                        })
                        this.setState({clickw: true}, () => {
                        })
                        this.setState({btnopacityw: 0.5}, () => {
                        })
                            }
                        }

                            letterfunctionx(){
                                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickx === false  && this.state.gameover===false) {
                                this.setState({currentletter: 'x'}, () => {
                                    console.log(this.state.currentletter);
                                    this.checkletter()
                                })
                                this.setState({clickx: true}, () => {
                                })
                                this.setState({btnopacityx: 0.5}, () => {
                                })
                                    }
                                }

                                    letterfunctiony(){
                                        if (this.state.roundover===false && this.state.gamestart===true && this.state.clicky === false  && this.state.gameover===false) {
                                        this.setState({currentletter: 'y'}, () => {
                                            console.log(this.state.currentletter);
                                            this.checkletter()
                                        })
                                        this.setState({clicky: true}, () => {
                                        })
                                        this.setState({btnopacityy: 0.5}, () => {
                                        })
                                            }
                                        }

                                            letterfunctionz(){
                                                if (this.state.roundover===false && this.state.gamestart===true && this.state.clickz === false  && this.state.gameover===false) {
                                                this.setState({currentletter: 'z'}, () => {
                                                    console.log(this.state.currentletter);
                                                    this.checkletter()
                                                })
                                                this.setState({clickz: true}, () => {
                                                })
                                                this.setState({btnopacityz: 0.5}, () => {
                                                })
                                                    }
                                                }

                                                letterfunctionspace(){
                                                    if (this.state.roundover===false && this.state.gamestart===true && this.state.clickspace === false  && this.state.gameover===false) {
                                                    this.setState({currentletter: ' '}, () => {
                                                        console.log(this.state.currentletter);
                                                        this.checkletter()
                                                    })
                                                    this.setState({btnopacityspace: 0.5}, () => {
                                                    })
                                                    this.setState({clickspace: true}, () => {
                                                    })
                                                        }
                                                    }

    checkletter(){
        let lostlife = false
        for(var i = 0; i < shuffledanimals[this.state.wordcount].japname.length; i++){
        if(shuffledanimals[this.state.wordcount].japname[i] === this.state.currentletter){
            this.state.indices.push(i)
            this.replaceletters()
            lostlife=true
              }
        }
        if(lostlife!== true){
            this.loselifefunction()
        }
        }

        loselifefunction(){
            if (this.state.wincheck!=='Thats Correct!') {
                if(this.state.losecount!==0){
            this.setState({losecount: this.state.losecount-1}, ()=>{
                console.log(this.state.losecount)
                if(this.state.losecount===0){
                    this.setState({losecheck: 'Sorry,thats incorrect,'}, ()=>{
                    })
                    this.setState({placeholder: shuffledanimals[this.state.wordcount].japname}, () => {
                        console.log(this.state.currentletter);
                        this.checkletter()
                    })  
                    this.setState({roundover: true}, ()=>{
                    }) 
                    this.setState({shouldidisplay6: 'block'}, ()=>{
                    }) 
                    this.setState({shouldidisplay3: 'none'}, ()=>{
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
            })
        }
        }
    }  

     replaceletters(){
        let placeholdervar =  this.state.placeholder
        for(var i = 0; i < this.state.indices.length; i++){
            placeholdervar = this.setCharAt(placeholdervar,this.state.indices[i], this.state.currentletter);
        this.resetindices();
     
        console.log(placeholdervar)
        }
        this.setState(prevState=>{
            return{
              placeholder: placeholdervar
            }
          })
          if (placeholdervar === shuffledanimals[this.state.wordcount].japname) {
        this.setState(prevState=>{
            return{
              wincheck: 'Correct!'
            }
          })
          this.setState({shouldidisplay6: 'block'}, ()=>{
        }) 
        this.setState({shouldidisplay3: 'none'}, ()=>{
        }) 
          this.setState({scoretrack: this.state.scoretrack + 1}, ()=>{
        })
        this.setState({roundover: true}, ()=>{
        })
        }
        }
        
    setCharAt(placeholder,index,chr) {
        if(index > placeholder.length-1) return placeholder;
        return placeholder.substr(0,index) + chr + placeholder.substr(index+1);
        }



        resetindices (){
            this.setState(prevState=>{
                return{
                  indices: []
                }
              })
            }
        
            initialiseplaceholder(){
                if(this.state.gameover===false){
                    this.setState(prevState=>{
                        return{
                          engword: shuffledanimals[this.state.wordcount].engname
                      }})
                      this.setState(prevState=>{
                        return{
                          japword: shuffledanimals[this.state.wordcount].japname
                      }})
            this.setState(prevState=>{
                return{
                  placeholder:  this.state.placehold.repeat(shuffledanimals[this.state.wordcount].japname.length)
                }
              })
              if (this.state.gameover !==true) {
              this.setState({shouldidisplay2: 'flex'}, ()=>{
            })
            this.setState({shouldidisplayscr: 'flex'}, ()=>{
            })
        }
            if (this.state.gameover !==true) {
                this.setState({shouldidisplay3: 'block'}, ()=>{
                }) 

            }
            this.setState({gamestart: true}, ()=>{
            })
            }
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
                if(this.state.gameover===false){
                if (this.state.roundover!==false) {
                let currentcount = this.state.wordcount
                this.setState({wordcount: currentcount+1}, ()=>{
                    console.log(this.state.wordcount)
                    this.initialiseplaceholder()
                })
                this.wordcountvalidationhigh()
                }
                this.setState({wincheck: ''}, ()=>{
                })
                this.setState({losecheck: ''}, ()=>{
                })
                if (this.state.roundover!==false) {
                this.setState({losecount: 3}, ()=>{
                })
            }
                this.setState({roundover: false}, ()=>{
                })
                this.setState({clicka: false}, () => {
                })
                this.setState({clickb: false}, () => {
                })
                this.setState({clickc: false}, () => {
                })
                this.setState({clickd: false}, () => {
                })
                this.setState({clicke: false}, () => {
                })
                this.setState({clickf: false}, () => {
                })
                this.setState({clickg: false}, () => {
                })
                this.setState({clickh: false}, () => {
                })
                this.setState({clicki: false}, () => {
                })
                this.setState({clickj: false}, () => {
                })
                this.setState({clickk: false}, () => {
                })
                this.setState({clickl: false}, () => {
                })
                this.setState({clickm: false}, () => {
                })
                this.setState({clickn: false}, () => {
                })
                this.setState({clicko: false}, () => {
                })
                this.setState({clickp: false}, () => {
                })
                this.setState({clickq: false}, () => {
                })
                this.setState({clickr: false}, () => {
                })
                this.setState({clicks: false}, () => {
                })
                this.setState({clickt: false}, () => {
                })
                this.setState({clicku: false}, () => {
                })
                this.setState({clickv: false}, () => {
                })
                this.setState({clickw: false}, () => {
                })
                this.setState({clickx: false}, () => {
                })
                this.setState({clicky: false}, () => {
                })
                this.setState({clickz: false}, () => {
                })
                this.setState({clickspace: false}, () => {
                })
                this.setState({shouldidisplay6: 'none'}, ()=>{
                }) 
                if (this.state.roundover!==false) {
                this.setState({btnopacitya: 1}, () => {
                })
                this.setState({btnopacityb: 1}, () => {
                })
                this.setState({btnopacityc: 1}, () => {
                })
                this.setState({btnopacityd: 1}, () => {
                })
                this.setState({btnopacitye: 1}, () => {
                })
                this.setState({btnopacityf: 1}, () => {
                })
                this.setState({btnopacityg: 1}, () => {
                })
                this.setState({btnopacityh: 1}, () => {
                })
                this.setState({btnopacityi: 1}, () => {
                })
                this.setState({btnopacityj: 1}, () => {
                })
                this.setState({btnopacityk: 1}, () => {
                })
                this.setState({btnopacityl: 1}, () => {
                })
                this.setState({btnopacitym: 1}, () => {
                })
                this.setState({btnopacityn: 1}, () => {
                })
                this.setState({btnopacityo: 1}, () => {
                })
                this.setState({btnopacityp: 1}, () => {
                })
                this.setState({btnopacityq: 1}, () => {
                })
                this.setState({btnopacityr: 1}, () => {
                })
                this.setState({btnopacitys: 1}, () => {
                })
                this.setState({btnopacityt: 1}, () => {
                })
                this.setState({btnopacityu: 1}, () => {
                })
                this.setState({btnopacityv: 1}, () => {
                })
                this.setState({btnopacityw: 1}, () => {
                })
                this.setState({btnopacityx: 1}, () => {
                })
                this.setState({btnopacityy: 1}, () => {
                })
                this.setState({btnopacityz: 1}, () => {
                })
                this.setState({btnopacityspace: 1}, () => {
                })
            }
            }
            }
         
          
          wordcountvalidationhigh(){
            if (this.state.wordcount === shuffledanimals.length-1) {
                this.setState(prevState=>{
                    return{
                      wordcount: prevState.wordcount = 0
                    }
                })
                this.gameoverfunction()
                this.setState({shouldidisplay: 'block'}, ()=>{
                    console.log(this.state.shouldidisplay)
                })
            }
          }

          gameoverfunction(){
            this.setState({gameover: true}, ()=>{
            }) 
            this.setState({shouldidisplay3: 'none'}, ()=>{
                console.log('game over!')
                console.log(this.state.shouldidisplay3)
            })
            this.setState({shouldidisplay6: 'none'}, ()=>{
            }) 
            this.setState({shouldidisplay2: 'none'}, ()=>{
            })
            this.setState({displaystart: 'none'}, ()=>{
            }) 
          }

          resetgame(){
              if(this.state.gamestart===true){
            this.setState({clicka: false}, ()=>{
            })
            this.setState({clickb: false}, ()=>{
            })
            this.setState({ clickc: false}, ()=>{
            })
            this.setState({ clickd: false}, ()=>{
            })
            this.setState({ clicke: false}, ()=>{
            })
            this.setState({ clickf: false}, ()=>{
            })
            this.setState({ clickg: false}, ()=>{
            })
            this.setState({ clickh: false}, ()=>{
            })
            this.setState({ clicki: false}, ()=>{
            })
            this.setState({ clickj: false}, ()=>{
            })
            this.setState({ clickk: false}, ()=>{
            })
            this.setState({ clickl: false}, ()=>{
            })
            this.setState({ clickm: false}, ()=>{
            })
            this.setState({ clickn: false}, ()=>{
            })
            this.setState({ clicko: false}, ()=>{
            })
            this.setState({ clickp: false}, ()=>{
            })
            this.setState({ clickq: false}, ()=>{
            })
            this.setState({ clickr: false}, ()=>{
            })
            this.setState({ clicks: false}, ()=>{
            })
            this.setState({ clickt: false}, ()=>{
            })
            this.setState({ clicku: false}, ()=>{
            })
            this.setState({ clickv: false}, ()=>{
            })
            this.setState({ clickw: false}, ()=>{
            })
            this.setState({ clickx: false}, ()=>{
            })
            this.setState({ clicky: false}, ()=>{
            })
            this.setState({ clickz: false}, ()=>{
            })
            this.setState({ clickspace: false}, ()=>{
            })
            this.setState({ gameover: false}, ()=>{
                shuffledanimals=this.shuffle(originalanimals[1].slice())
                this.initialiseplaceholder()
            })
            this.setState({gamestart: false}, ()=>{
            })
            this.setState({shouldidisplay: 'none'}, ()=>{
            })
            this.setState({shouldidisplay2: 'none'}, ()=>{
            })
            this.setState({shouldidisplayscr: 'none'}, ()=>{
            })
            this.setState({shouldidisplay3: 'none'}, ()=>{
            })
            this.setState({shouldidisplay6: 'none'}, ()=>{
            }) 
            this.setState({  rightwrongwordtrack: []}, ()=>{
            })
            this.setState({ finalscore: ''}, ()=>{
            })
            this.setState({  scoretrack: 0}, ()=>{
            })
            this.setState({  roundover: false}, ()=>{
            })
            this.setState({  engword: ''}, ()=>{
            })
            this.setState({  losecheck: ''}, ()=>{
            })
            this.setState({  losecount: 3}, ()=>{
            })
            this.setState({  wordcount: 0}, ()=>{
            })
            this.setState({  wincheck: ''}, ()=>{
            })
            this.setState({  value: 1}, ()=>{
            })
            this.setState({  currentletter: []}, ()=>{
            })
            this.setState({ placehold: "_"}, ()=>{
            })
            this.setState({placeholder: ''}, ()=>{
            })
            this.setState({  indices: []}, ()=>{
            })
            this.setState({btnopacitya: 1}, () => {
            })
            this.setState({btnopacityb: 1}, () => {
            })
            this.setState({btnopacityc: 1}, () => {
            })
            this.setState({btnopacityd: 1}, () => {
            })
            this.setState({btnopacitye: 1}, () => {
            })
            this.setState({btnopacityf: 1}, () => {
            })
            this.setState({btnopacityg: 1}, () => {
            })
            this.setState({btnopacityh: 1}, () => {
            })
            this.setState({btnopacityi: 1}, () => {
            })
            this.setState({btnopacityj: 1}, () => {
            })
            this.setState({btnopacityk: 1}, () => {
            })
            this.setState({btnopacityl: 1}, () => {
            })
            this.setState({btnopacitym: 1}, () => {
            })
            this.setState({btnopacityn: 1}, () => {
            })
            this.setState({btnopacityo: 1}, () => {
            })
            this.setState({btnopacityp: 1}, () => {
            })
            this.setState({btnopacityq: 1}, () => {
            })
            this.setState({btnopacityr: 1}, () => {
            })
            this.setState({btnopacitys: 1}, () => {
            })
            this.setState({btnopacityt: 1}, () => {
            })
            this.setState({btnopacityu: 1}, () => {
            })
            this.setState({btnopacityv: 1}, () => {
            })
            this.setState({btnopacityw: 1}, () => {
            })
            this.setState({btnopacityx: 1}, () => {
            })
            this.setState({btnopacityy: 1}, () => {
            })
            this.setState({btnopacityz: 1}, () => {
            })
            this.setState({btnopacityspace: 1}, () => {
            })
        }
        }    

        
        parentFunction=(data_from_child)=>{
            this.setState({animals: data_from_child}, ()=>{
                originalanimals=this.state.animals.slice()
                this.setState({gamestart: true}, ()=>{
                    this.resetgame()
                })
                this.setState({displaystart: 'grid'}, ()=>{
                })
                this.setState({displaystart2: 'flex'}, ()=>{
                })
                this.setState({displaystart3: 'none'}, ()=>{
                })
            })
        }
        
          

    render(){
       
    return(
        <div id="flashcardcontainerhang">
        <div id="datadivhang">
        <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
        </div>
    
        <div id="flashcardboxhang">

            <div id="hangheader">
              <h1>{this.state.animals[0].category}</h1>
            </div>




        <div id="hangcontent">

            <div style={{display: this.state.displaystart3}}>
                <h1>Select a Category to Start!</h1>
            </div>


            <h1 style={{display: this.state.shouldidisplay3}}> {this.state.engword}</h1>
            <h1 id="placeholder" style={{display: this.state.shouldidisplay3}}>{this.state.placeholder}</h1>
            <h1 style={{display: this.state.shouldidisplay6}}>{this.state.wincheck} {this.state.losecheck} the answer was {this.state.japword}</h1>
           
            <h1 style={{display: this.state.shouldidisplay}}>The words you got incorrect were:</h1>

            <div id="wrongwordshang">
        <div style={{display: this.state.shouldidisplay}} id="wrongwordhangsection1">
          <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[0]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[0]}</h3>
         </div>
         <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[1]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[1]}</h3>
          </div>
          <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[2]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[2]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[3]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[3]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[4]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[4]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordhangsection2">
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[5]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[5]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[6]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[6]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[7]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[7]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[8]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[8]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[9]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[9]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordhangsection3">
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[10]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[10]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[11]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[11]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[12]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[12]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[13]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[13]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[14]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[14]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[15]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[15]}</h3>
        </div>
        </div>
        <div style={{display: this.state.shouldidisplay}} id="wrongwordhangsection4">
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[16]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[16]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[17]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[17]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[18]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[18]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[19]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[19]}</h3>
        </div>
        <div className="rightwronghangpair">
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack1[20]}</h3>
        <h3 style={{display: this.state.shouldidisplay}}>{this.state.rightwrongwordtrack[20]}</h3>
        </div>
        </div>
        </div>

            </div>

        <div  style={{display: this.state.displaystart}} id="buttondiv2">
            <div id="letterbuttoncontainer1">
        <div id="letterbutton1">
            <button style={{opacity: this.state.btnopacitya, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiona}>a</button>
            <button style={{opacity: this.state.btnopacityb, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionb}>b</button>
            <button style={{opacity: this.state.btnopacityc, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionc}>c</button>
            <button style={{opacity: this.state.btnopacityd, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiond}>d</button>
            </div>
            <div id="letterbutton2">
            <button style={{opacity: this.state.btnopacitye, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctione}>e</button>  
            <button style={{opacity: this.state.btnopacityf, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionf}>f</button>
            <button style={{opacity: this.state.btnopacityg, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiong}>g</button>
            <button style={{opacity: this.state.btnopacityh, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionh}>h</button>
          </div>      
           <div id="letterbutton3">
            <button style={{opacity: this.state.btnopacityi, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctioni}>i</button>
            <button style={{opacity: this.state.btnopacityj, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionj}>j</button> 
            <button style={{opacity: this.state.btnopacityk, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionk}>k</button>
            <button style={{opacity: this.state.btnopacityl, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionl}>l</button>
            </div>
            </div>

            <div id="letterbuttoncontainer2">
            <div id="letterbutton4">
            <button style={{opacity: this.state.btnopacitym, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionm}>m</button>
            <button style={{opacity: this.state.btnopacityn, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionn}>n</button>
            <button style={{opacity: this.state.btnopacityo, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiono}>o</button>
            <button style={{opacity: this.state.btnopacityp, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionp}>p</button>
            </div>
            <div id="letterbutton5">
            <button style={{opacity: this.state.btnopacityq, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionq}>q</button>
            <button style={{opacity: this.state.btnopacityr, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionr}>r</button>
            <button style={{opacity: this.state.btnopacitys, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctions}>s</button>
            <button style={{opacity: this.state.btnopacityt, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiont}>t</button>
            <button style={{opacity: this.state.btnopacityu, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionu}>u</button>
            </div>
            <div id="letterbutton6">
            <button style={{opacity: this.state.btnopacityv, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionv}>v</button>
            <button style={{opacity: this.state.btnopacityw, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionw}>w</button>
            <button style={{opacity: this.state.btnopacityx, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionx}>x</button>
            <button style={{opacity: this.state.btnopacityy, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctiony}>y</button>
            <button style={{opacity: this.state.btnopacityz, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionz}>z</button>
            <button style={{opacity: this.state.btnopacityspace, border: 'none'}} id="flashcardbtn3" className="btn btn-primary btn-lg" onClick={this.letterfunctionspace}>Space</button>
          </div>
            </div>
            </div>

            <div id="bottombarhang">


            <div id="progresshang">
            <h6 style={{display: this.state.shouldidisplay2}}>Progress: {this.state.wordcount+1} / {this.state.animals[1].length}</h6>
            </div>

            <div id="navbuttonshang" style={{display: this.state.shouldidisplay2}}>
            <button id="flashcardbtnhang" className="btn btn-primary btn-lg" onClick={this.increasewordcount}>Next</button>
            <button id="flashcardbtnhang" className="btn btn-primary btn-lg" onClick={this.resetgame}>Reset</button>
            </div> 

            <div id="scorediv">

            <div id="livesleft">
            <h6 style={{display: this.state.shouldidisplay2}}>Lives Left: {this.state.losecount}</h6>
            </div>

            <div id="scorehang">
          <h6 style={{display: this.state.shouldidisplayscr}}>Score: {this.state.scoretrack} / {this.state.animals[1].length}</h6>
          </div>
          </div>
           
            </div>
        </div>
       
            </div>
    )
  }
}
  
  export default Hangman;
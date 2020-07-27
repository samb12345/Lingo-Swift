import React from 'react'
import './library.css'
import Child1 from './data'


let displaymodalnumber=0;
let testvar = 5;
let color = 'red'
var engname0
var japname0
var engname1
var japname1
var engname2
var japname2
var engname3
var japname3
var engname4
var japname4
var engname5
var japname5
var engname6
var japname6
var engname7
var japname7
var engname8
var japname8
var engname9
var japname9
var libraryclicked

let catdata = 
[

    [{category: ''},
    [{engname: "", japname: ""},
    ]
    ],

[{category: 'ANIMALS'},
    [{engname: "BEE", japname: "HACHI"},
    {engname: "BUTTERFLY", japname: "BATAFURAI"},
    {engname: "CAMEL", japname: "KYAMERU"},
    {engname: "CALF", japname: "FUKU-RA HAGI"},
    {engname: "COW", japname: "USHI"},
    {engname: "CARNIVORE", japname: "NIKUSHOKU"},
    {engname: "CROCODILE", japname: "KUROKODAIRU"},
    {engname: "DOLPHIN", japname: "IRUKA"},
    {engname: "DOG", japname: "INU"},
    {engname: "DUCK", japname: "AHIRU"},
    ]
    ],

    [{category: 'VEHICLES'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],

    [{category: 'LOL'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],

    [{category: 'DOG'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],

    [{category: 'CAT'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],

    [{category: 'LEAF'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],

    [{category: 'BOAT'},
    [{engname: "CAR", japname: "KURUMA"},
    {engname: "EXAMPLE", japname: "NONSENCE"},
    {engname: "WAYHAY", japname: "WOOOO"},
    ]
    ],
   

]

let currentcategory
let currentcat
let loopednum

class Library extends React.Component{
    constructor(){
        super()
        this.state = {
          display0: "none",
          display1: "none",
          display2: "none",
          display3: "none",
          display4: "none",
          display5: "none",
          display6: "none",
          display7: "none",
          display8: "none",
          display9: "none",
            displaymodal: 'none',
            engarrayword1:'',
            engarrayword2:'',
            engarrayword3:'',
            engarrayword4:'',
            engarrayword5:'',
            engarrayword6:'',
            engarrayword7:'',
            engarrayword8:'',
            engarrayword9:'',
            engarrayword10:'',
            engarrayword11:'',
            engarrayword12:'',
            engarrayword13:'',
            engarrayword14:'',
            engarrayword15:'',
            engarrayword16:'',
            engarrayword17:'',
            engarrayword18:'',
            engarrayword19:'',
            engarrayword20:'',
            engarray:[],
            animals: [{category: 'Animals'},
        [
        {engname: "", japname: ""},
       
      ]]
        }
        this.closemodalfunction=this.closemodalfunction.bind(this)
        this.setdisplays=this.setdisplays.bind(this)
    }

       

    parentFunction=(data_from_child)=>{
        if(displaymodalnumber===0 && testvar===5){
                this.setState({animals: data_from_child}, ()=>{
                  this.setdisplays()
            console.log(this.state.animals[1])
        })}
        this.setState({displaymodal: 'flex'}, () => {
            console.log(this.state.displaymodal)
        })
        libraryclicked=true;
    }


    closemodalfunction(){
        this.setState({displaymodal: 'none'}, () => {
            console.log(this.state.displaymodal)
        })
        this.setState({animals: [{category: 'Animals'},
        [
        {engname: "", japname: ""},
       
      ]]}, () => {
          console.log(this.state.displaymodal)
      })
    }

    setdisplays(){
      if(this.state.animals[1].length>0){
      this.setState({display0: 'flex'}, () => {
      })
    }else{
      this.setState({display0: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>1){
      this.setState({display1: 'flex'}, () => {
      })
    }else{
      this.setState({display1: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>2){
      this.setState({display2: 'flex'}, () => {
      })
    }else{
      this.setState({display2: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>3){
      this.setState({display3: 'flex'}, () => {
      })
    }else{
      this.setState({display3: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>4){
      this.setState({display4: 'flex'}, () => {
      })
    }else{
      this.setState({display4: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>5){
      this.setState({display5: 'flex'}, () => {
      })
    }else{
      this.setState({display5: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>6){
      this.setState({display6: 'flex'}, () => {
      })
    }else{
      this.setState({display6: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>7){
      this.setState({display7: 'flex'}, () => {
      })
    }else{
      this.setState({display7: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>8){
      this.setState({display8: 'flex'}, () => {
      })
    } else{
      this.setState({display8: 'none'}, () => {
      })
    }
    if(this.state.animals[1].length>9){
      this.setState({display9: 'flex'}, () => {
      })
    }else{
      this.setState({display9: 'none'}, () => {
      })
    }
    }



    render(){

      if(libraryclicked===true){

        if(this.state.animals[1].length>0){
      engname0=this.state.animals[1][0].engname
      japname0=this.state.animals[1][0].japname

        }

      if(this.state.animals[1].length>1){

      engname1=this.state.animals[1][1].engname
      japname1=this.state.animals[1][1].japname

      }

      if(this.state.animals[1].length>2){

      engname2=this.state.animals[1][2].engname
      japname2=this.state.animals[1][2].japname

      }

      if(this.state.animals[1].length>3){

      engname3=this.state.animals[1][3].engname
      japname3=this.state.animals[1][3].japname

      }

      if(this.state.animals[1].length>4){

      engname4=this.state.animals[1][4].engname
      japname4=this.state.animals[1][4].japname

      }

      if(this.state.animals[1].length>5){

      engname5=this.state.animals[1][5].engname
      japname5=this.state.animals[1][5].japname

      }

      if(this.state.animals[1].length>6){

      engname6=this.state.animals[1][6].engname
      japname6=this.state.animals[1][6].japname

      }

      if(this.state.animals[1].length>7){

      engname7=this.state.animals[1][7].engname
      japname7=this.state.animals[1][7].japname

      }

      if(this.state.animals[1].length>8){

      engname8=this.state.animals[1][8].engname
      japname8=this.state.animals[1][8].japname

      } 

      if(this.state.animals[1].length>9){

      engname9=this.state.animals[1][9].engname
      japname9=this.state.animals[1][9].japname

      }

      }
       
        
        return(
            <div>


                <div style={{display: this.state.displaymodal}} className="bg-modal" id="bg-modal1">
                   <div id="modal-content">

                   <div id="englishcolumn">
 <div>
    <h3>English</h3>
  </div>
  <div>
     <h4 style={{display:this.state.display0}}>{engname0}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display1}}>{engname1}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display2}}>{engname2}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display3}}>{engname3}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display4}}>{engname4}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display5}}>{engname5}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display6}}>{engname6}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display7}}>{engname7}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display8}}>{engname8}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display9}}>{engname9}</h4>
  </div>
</div>

<div id="japanesecolumn">
 <div>
    <h3>Japanese</h3>
  </div>
  <div>
     <h4 style={{display:this.state.display0}}>{japname0}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display1}}>{japname1}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display2}}>{japname2}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display3}}>{japname3}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display4}}>{japname4}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display5}}>{japname5}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display6}}>{japname6}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display7}}>{japname7}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display8}}>{japname8}</h4>
  </div>
  <div>
     <h4 style={{display:this.state.display9}}>{japname9}</h4>
  </div>
  
</div>
                       
                       <div id="closemodalbutton" onClick={this.closemodalfunction}>+</div>
                        
                        </div>
                        
              </div>

            
            <div id="librarycontainer1">
        <Child1 functionCallFromParent={this.parentFunction.bind(this)} displaythecat={"none"}/>
        </div>

       
            </div>
           

        )
    }
}
export default Library;



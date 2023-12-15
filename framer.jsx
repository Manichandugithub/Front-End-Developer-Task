import React, { Component } from 'react'
import './body.css'


class framer extends Component {



  render() {
    return (
      <div>
        
        <div className='img'>
        <img src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg" alt="" ></img>
        </div>
        


       
    <div>
    <div className="navbar navbar-left">
    <p>Compare</p>
    
  </div>

  <div className="navbar navbar-center">
    <p >Product</p>
  </div>

  <div className="navbar navbar-right">
    <p>Contact</p>
    
  </div>

  <div className="navbar navbar-last">
  <p>Pricing</p>
  
  </div>

  <div className='div'>

  <div>
    <input type="button" className='secoundbtn' value={"Let's Talk"}/>
    
  
  </div>
  <div>
  <input type="button" className='firstbtn' value={"Login"}/>
  </div>
  </div>


  <div className='imgs'>
  <img src={'https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png'} alt="Example" className="im" />
  </div>


  
  

  </div>

  <div>
    <input type="button" value="Financal Management" className='button'/>
  </div>


  <div >
    

    
  <h1 className='Contents'>A simpler,<br></br> smarter basic<br></br>credit <span className='Crads'>card.</span></h1>
  
  </div>

  <div>
    <p className='footertext'>Your powerful companion on the road to financial success! <br></br>Explore personal budget management, investment opportunities.</p>
  </div>
  </div>

  
     
    )
  }
}

export default framer
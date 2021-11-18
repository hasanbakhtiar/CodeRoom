import React, { Component } from 'react'
import Models from './Models'
import  img1  from "../img/img1.jpg";



class Header extends Component{


      render(){
      const myCar = {
        bmw:[
          {
            name: 'x51'
          },
          {
            name:'x6'
          }
        ]
      };

        return(
              <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img width='100' src={img1} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
  
      <Models title="Mercedes" model1="S500" model2="S600" />
      <Models title="BMW" model1={myCar.bmw[0].name} model2="X6" />
      <Models title="Tesla" model1="Series5" model2="Series6" />
  

      
      
      </ul>
 
    </div>
  </div>
</nav>
              </header>
        )
      }
}

export default Header;
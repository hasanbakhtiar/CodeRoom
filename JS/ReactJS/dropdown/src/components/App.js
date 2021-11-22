import React from 'react'



const  DropdownItem = (props)=>{
  return(
    <div>
       <li><a className="dropdown-item" href="#">{props.dritem}</a></li>
    </div>
  )
}

const Dropdown1 =(props)=>{
  return(
    <div>
       <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dr}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
              </ul>
            </li>
      
    </div>
  )
}

const Dropdown2 =(props)=>{
  return(
    <div>
       <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dr}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <DropdownItem dritem = "akjhdas" />
              <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            <DropdownItem dritem = "akjhdas" />
            
              </ul>
            </li>
      
    </div>
  )
}

 const App =()=>{

    return(
      <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

           <Dropdown1 dr="New" />
           <Dropdown2 dr="New" />
          </ul>

        </div>
      </div>
    </nav></div>

    )
}
export default App;
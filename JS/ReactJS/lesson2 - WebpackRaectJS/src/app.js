import React from "react";
import ReactDOM from 'react-dom'
import img1 from './img/img1.jpg'
import './sass/style.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const root = document.getElementById('root');

const temp = (
 <>
 <h1 className="btn">Hello</h1>
 <img src={img1} alt="" />
 </>
)


ReactDOM.render(temp,root)
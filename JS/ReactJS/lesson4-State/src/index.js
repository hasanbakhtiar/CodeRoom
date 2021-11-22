import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import img1 from './bookimg/1.jpg'
import img2 from './bookimg/2.jpg'
import './style.css';


class Book extends Component{
    constructor(props){
        super(props);
        this.newBook = this.newBook.bind(this);
        this.state={
            name:'1984',
            author: 'George Orwell',
            pagecount:200,
            img: img1,
            mode:'light'
        }
    }
    newBook(){
        this.setState({
            name:'cinayet ve ceza',
            author: 'Fiedor Dostayevski',
            pagecount:300,
            img: img2,
            mode:'dark'
        })
    }
    render(){
        return(
            <div className= 'container'>
            <h1 className={this.state.mode}>Book </h1>
            <img src={this.state.img} width='100'/>
            <p>Name: {this.state.name}</p>
            <p>Author: {this.state.author}</p>
            <p>Page Count: {this.state.pagecount}</p>
            <button className='btn btn-primary' onClick={this.newBook}>New Book </button> 
            </div>
        )
    }
}

ReactDOM.render(<Book />,document.getElementById('root'));



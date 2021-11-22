class App extends Component{
    constructor(props){
        super(props);
        this.addCount = this.addCount.bind(this);
        this.clearCount = this.clearCount.bind(this);
        this.state= {
            count:0
        }
    }
addCount(){
             this.setState({
        count:this.state.count +1
    })
}

clearCount(){
    if (this.state.count > 0) {
    this.setState({count: this.state.count  - 1})
        
    }
}
    render(){
        return(
            <div className ="container">
            <h1>U Clicked: {this.state.count} </h1>
            <button type="button" className="btn btn-danger me-3" onClick={this.clearCount}>-1</button>
            <button type="button" className="btn btn-success" onClick={this.addCount}>+1</button>
            </div>
        )
    }
}


// LifeCycle StateLess component

class App extends Component{
    constructor(props){
        console.log('construtor');
        super(props);
        this.addCount = this.addCount.bind(this);
        this.clearCount = this.clearCount.bind(this);
        this.state={
            count:0
        }
    }

componentDidMount(){
    console.log("component didMount runing...");
}

componentDidUpdate(){
    console.log('update');
    // document.querySelector('p').innerHTML = "new";
    for (let i = 0; i < 2; i++) {
        document.querySelectorAll('button')[i].style.background = 'red';
    
        
    }
}

componentWillUnmount(){
    console.log('delete');
}


    clearCount(){
            this.setState({
                count: this.state.count - 1
            })
    }

    addCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <p>U clicked {this.state.count}</p>
                <button onClick={this.clearCount}>-1</button>
                <button onClick={this.addCount}>+1</button>
            </div>
        )
    }
}


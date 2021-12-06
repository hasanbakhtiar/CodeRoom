

const App =(props)=>{ //state FULL


    

    const [count, action] = useState(props.count)
    const [state, setstate] = useState(props.sta)


    useEffect(() => {
        console.log("use Effect");
     },[count])




     
    const clearCount=()=>{
        if (count > 0) {
            action(count-1);
        }
    }
       return(
           <div>
               <p>U clicked {count}</p>
               <button onClick={clearCount}>-1</button>
               <button onClick={()=>{action(count+1)}}>+1</button>
           </div>
       )
   }
   
   App.defaultProps ={
       count :0
   }
   


import { useState } from "react"

const Counter = () => {
    const [count,setCount]=useState(0)
    const [age,setAge]=useState(5);
    const[id,setId]=useState()
    
  return (
    <>
<h2 style={{color:'#03C6C7'}}>Age of the person-{count}</h2>
<button style={{background:'#E03B8B',border:'none',borderRadius:'20px,20px',color:"#ffffff"}} onClick={()=>(count>10?setCount(0):setCount(count+1))}>Reset Counter</button>
<button style={{background:'#E03B8B',border:'none',borderRadius:'20px,20px',color:"#ffffff"}} onClick={()=> setCount(count+1)}>Increase Counter</button>
<button style={{background:'#E03B8B',border:'none',borderRadius:'15px,15px',color:"#ffffff"}}  onClick={()=> setCount(count-1)}>Decrease Counter</button>
<h2 style={{color:'#03C6C7'}}>person-{age}</h2>
<button style={{background:'#E03B8B',border:'none',borderRadius:'25px,25px',color:"#ffffff"}} onClick={()=> (count<16?setAge("child"):setAge("adult"))}>kind of person</button>
<h2 style={{color:'#03C6C7'}}>Access-{id}</h2>
<button style={{background:'#E03B8B',border:'none',borderRadius:'15px,15px',color:"#ffffff"}} onClick={()=>(count>16?setId("Allow"):setId("not Allow"))}>permission</button>
</>
     )
}
export default Counter

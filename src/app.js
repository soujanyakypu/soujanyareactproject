import './app.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Counter from './components/Counter'
import axios from "axios";
import { useEffect, useState } from 'react';


function App(){
    const [details,setDetails]=useState({})
    const fetchDetails = async() => {
       const { data } = await axios.get("https://randomuser.me/api/");
       const details = data.results[0];
       setDetails(details);
       console.log(details);
    }
    useEffect(() => {
     fetchDetails() 
        
    }, [])
    
    return(
    <div className="App">
     <Navbar />  
        
    <h2>this is reactapp function -souji</h2>
        <h3>this is what react</h3>
        <p>this is a react paragraph</p> 
        <Card details = {details} />
        {/* <Card imgurl="https://images.pexels.com/photos/13734112/pexels-photo-13734112.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ptext="Some quick example text to build on the card title and make up the bulk of the card's content." /> */}
        {/* <Card imgurl="https://images.pexels.com/photos/13926115/pexels-photo-13926115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ptext="This is second image paragraph"/> */}
        ter 
        <Counter /> 
        </div>


        )
}
export default App
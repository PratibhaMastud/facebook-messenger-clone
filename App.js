import React, { useState,useEffect } from 'react';
import './App.css';
import { Button ,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';


function App() {
  const [input, setInput] =useState('');
  const [username , setUsername] =useState('');
  const [messeges, setMesseges] = useState([
        {username :'Akki', text: 'Hello everyone'},
        {username :'pratiz', text: 'whats up'}]);
//    useEffect is typically block of code run on a condition (run code on condition in React.) */
  //run code here...if its blank inside[](means there is no condition it run once when page loads. )its run code once when page loads.

  useEffect(()=> 
      db.collection('facebook-messeger-cln').onSnapshot(snapshot => {
      setMesseges(snapshot.docs.map(doc => doc.data())
      )}),[])

    useEffect(() => {
      setUsername(prompt('Please enter your name'))
    }, []) //condition- if we have every  

  
  const sendMessege = (event) => {
    event.preventDefault();
    setMesseges([...messeges, {username : username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
     <h1>Hello Clever Programmer</h1>
     {/*input ,button ,messege themeselves state is slow time piece of memory */}
     <h2>Welcome {username}</h2>
     <br></br> <br/>
      
     <form>
     <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessege}>Send Message</Button>

    </FormControl>
     </form>
     
     {
       messeges.map((message)=> (
         <Message username={username} message={message}/>
       ))
     }
    </div>
  ); 
}
export default App;

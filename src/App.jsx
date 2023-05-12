import { useState, useEffect } from 'react'
import randomColor from './util/randomColor'
import randomName from './util/randomName'
import { v4 as key } from 'uuid';
import './App.css'

const App = () => {
  const [messages, setMessages] = useState([
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon"
      }
    }
  ])

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  })

  useEffect(() => {
    const drone = new window.Scaledrone(import.meta.env.VITE_API_KEY, {
      data: member,
    });
    console.log(drone)
  }, []);

  return (
    <>
      <ul>
        {messages.map((m) => <li key={key()}>{m.text}</li>)}
      </ul>
  
      {member.username} 
      <br />
      {member.color}
    </>
  )
}

export default App

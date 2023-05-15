import { useState, useEffect } from 'react'
import randomColor from './util/randomColor'
import randomName from './util/randomName'
import Chat from './components/Chat';
import './App.scss'

const App = () => {
  const [messages, setMessages] = useState([])

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  })

  const [text, setText] = useState('');

  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const newDrone = new window.Scaledrone(import.meta.env.VITE_API_KEY, {
      data: member,
    });

    setDrone(newDrone)
  }, []);

  useEffect(() => {
    if (drone) {
      const room = drone.subscribe("observable-room");

      drone.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          const prevMember = { ...member };
          prevMember.id = drone.clientId;
          setMember(prevMember);
        }
      });

      room.on("data", (message, member) => {
        const newMessage = { 
          text: message, 
          member: member
        };
        newMessage.fromMe = (member && member.id === drone.clientId) ? true : false;
        setMessages(prevMessages => [...prevMessages, newMessage]);
      });
    }
  }, [drone]);

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    onSendMessage(text)
  }

  return (
    <div className='app'>
      <Chat messages={messages}/>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type='text'
          placeholder='Enter message'
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App

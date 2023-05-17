import { useRef, useEffect } from 'react';
import Message from '../Message';
import { v4 as uuid } from 'uuid';
import './chat.scss'

const Chat = ({messages}) => {
  const bottomDiv = useRef();

  useEffect(() => {
    bottomDiv.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return(
    <ul className='chat'>
      {
        messages &&
        messages.map((m) =><Message key={uuid()} m={m}/>)
      }
      <div ref={bottomDiv} />
    </ul>
  )
}

export default Chat

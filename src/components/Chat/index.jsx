import { useRef, useEffect } from 'react';
import ChatCard from '../Message';
import { v4 as uuid } from 'uuid';
import './chat.scss'

const Chat = ({messages}) => {
  const bottomDiv = useRef();

  useEffect(() => {
    bottomDiv.current.scrollIntoView();
  }, [messages.length]);

  return(
    <ul className='chat'>
      {
        messages &&
        messages.map((m) =><ChatCard key={uuid()} m={m}/>)
      }
      <div ref={bottomDiv} />
    </ul>
  )
}

export default Chat

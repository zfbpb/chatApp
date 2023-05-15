import { useRef, useEffect } from 'react';
import ChatCard from '../ChatCard';
import { v4 as uuid } from 'uuid';

const Chat = ({messages}) => {
  const bottomDiv = useRef();

  useEffect(() => {
    bottomDiv.current.scrollIntoView();
  }, [messages.length]);

  return(
    <ul className='messages'>
      {
        messages &&
        messages.map((m) =><ChatCard key={uuid()} m={m}/>)
      }
      <div ref={bottomDiv} />
    </ul>
  )
}

export default Chat

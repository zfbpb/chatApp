import ChatCard from '../ChatCard';
import { v4 as uuid } from 'uuid';

const Chat = ({messages}) => {

  return(
    <>
      <ul>
        {
          messages &&
          messages.map((m, key) =><ChatCard key={uuid()} m={m}/>)
        }
      </ul>
    </>
  )
}

export default Chat

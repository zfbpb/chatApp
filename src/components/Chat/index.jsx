import { v4 as key } from 'uuid';

const Chat = ({messages}) => {
  return(
    <ul>
      {messages.map((m) => <li key={key()} className={m.fromMe ? 'sent' : 'received'}>{m.text} {m.member.clientData.username}</li>)}
  </ul>
  )
}

export default Chat

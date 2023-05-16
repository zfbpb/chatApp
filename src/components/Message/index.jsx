import './message.scss'

const Message = ({m}) => {
  return(
    <li className={`message ${m.fromMe ? 'message--sent' : 'message--received'} `}>
      <span>{m.text} {m.member.clientData.username}</span>
    </li> 
  )
}

export default Message

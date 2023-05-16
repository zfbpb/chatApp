import './message.scss'

const Message = ({m}) => {
  return(
    <li className={`message ${m.fromMe ? 'message--sent' : 'message--received'} `}>
      {m.text} {m.member.clientData.username}
    </li> 
  )
}

export default Message

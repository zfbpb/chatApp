const ChatCard = ({m}) => {
  return(
    <li 
     className={m.fromMe ? 'sent' : 'received'}>{m.text} {m.member.clientData.username}
    </li>
  )
}

export default ChatCard

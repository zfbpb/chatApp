{/* 
  <li className={`mojaklasa ${m.fromMe ? 'sent' : 'received'} `}>
    {m.text} {m.member.clientData.username}
  </li> 
*/}

const ChatCard = ({m}) => {
  return(
    <li className={`message ${m.fromMe ? 'sent' : 'received'} `}>
    {m.text} {m.member.clientData.username}
  </li> 
    // <li className={m.fromMe ? 'sent' : 'received'}>
    //   {m.text} {m.member.clientData.username}
    // </li>
  )
}

export default ChatCard

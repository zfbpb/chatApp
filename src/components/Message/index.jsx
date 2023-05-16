import './message.scss'

const Message = ({m}) => {
  const messageClasses = `message message--${m.fromMe ? 'sent' : 'received'}`;
  const containerClasses = 'message__container';
  const senderClasses = 'message__sender';
  const textClasses = 'message__text';

  return(
    <li className={messageClasses}>
      <div className={containerClasses}>
        <span className={senderClasses}>{m.member.clientData.username}</span>
        <span className={textClasses}>{m.text}</span>
      </div>
    </li>
  )
}

export default Message

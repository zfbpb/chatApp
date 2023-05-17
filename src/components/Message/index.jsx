import './message.scss';

const Message = ({m}) => {
  const messageClasses = `message message--${m.fromMe ? 'sent' : 'received'}`;
  const containerClasses = 'message__container';
  const senderClasses = 'message__sender';
  const textClasses = 'message__text';
  const usernameColor = m.member.clientData.color;
  const borderStyle = `1rem solid ${usernameColor}`;

  return(
    <li className={messageClasses}>
      <div className={containerClasses} style={{ borderBottom: borderStyle }}>
        <span className={senderClasses}>{m.member.clientData.username}</span>
        <span className={textClasses}>{m.text}</span>
      </div>
    </li>
  )
}

export default Message

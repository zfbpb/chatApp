import './message.scss';

const Message = ({m: { fromMe, member, text }}) => {
  //const {text, member, fromMe} = m;
  const messageClasses = `message message--${fromMe ? 'sent' : 'received'}`;
  const containerClasses = 'message__container';
  const senderClasses = 'message__sender';
  const textClasses = 'message__text';
  const usernameColor = member.clientData.color;
  const borderStyle = `1rem solid ${usernameColor}`;

  return(
    <li className={messageClasses}>
      <div className={containerClasses} style={{ borderBottom: borderStyle }}>
        <span className={senderClasses}>{member.clientData.username}</span>
        <span className={textClasses}>{text}</span>
      </div>
    </li>
  )
}

export default Message

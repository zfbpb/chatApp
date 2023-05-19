import PropTypes from 'prop-types';
import './message.scss';

const Message = ({m: { fromMe, member, text }, checked}) => {
  //const {text, member, fromMe} = m;
  const messageClasses = `message message--${fromMe ? 'sent' : 'received'}`;
  const containerClasses = 'message__container';
  const senderClasses = 'message__sender';
  const textClasses = 'message__text';
  const usernameColor = member.clientData.color;
  //const borderStyle = `1rem solid ${usernameColor}`;
  const borderStyle = `1rem solid ${checked ? usernameColor : 'transparent'}`;

  return(
    <li className={messageClasses}>
      <div className={containerClasses} style={{ borderBottom: borderStyle }}>
        <span className={senderClasses}>{member.clientData.username}</span>
        <span className={textClasses}>{text}</span>
      </div>
    </li>
  )
}

Message.propTypes = {
  m: PropTypes.shape({
    fromMe: PropTypes.bool.isRequired,
    member: PropTypes.shape({
      clientData: PropTypes.shape({
        color: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message

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
  const circleStyle = `${checked ? 'defalut' : 'none'}`;


  return(
    <li className={messageClasses}>
      <div className={containerClasses} style={{ borderBottom: borderStyle }}>
        <div><span className='circle' style={{ display: circleStyle }}></span><span className={senderClasses}>{member.clientData.username}</span></div>
        <div className={textClasses}>{text}</div>
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

import PropTypes from "prop-types";
import "./message.scss";

const Message = ({ m: { fromMe, member, text }, checked }) => {
  //const {text, member, fromMe} = m;
  const messageClasses = `message message--${fromMe ? "sent" : "received"}`;
  const containerClasses = "message__container";
  const senderClasses = "message__sender";
  const textClasses = "message__text";
  const circleClass = "circle";
  const usernameColor = member.clientData.color;
  const borderStyle = `0.5rem solid ${checked ? usernameColor : "transparent"}`;
  const circleStyle = `${checked ? "none" : "default"}`;

  return (
    <li className={messageClasses}>
      <div className={containerClasses} style={{ borderBottom: borderStyle }}>
        <div>
          <span
            className={circleClass}
            style={{ display: circleStyle, backgroundColor: usernameColor }}
          ></span>
          <span className={senderClasses}>{member.clientData.username}</span>
        </div>
        <div className={textClasses}>{text}</div>
      </div>
    </li>
  );
};

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
  checked: PropTypes.bool.isRequired,
};

export default Message;

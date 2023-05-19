import { useRef, useEffect } from "react";
import Message from "../Message";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';
import "./chat.scss";

const Chat = ({ messages, checked }) => {
  const bottom = useRef();

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <ul className="chat">
      {messages && messages.map((m) => <Message key={uuid()} m={m} checked={checked} />)}
      <li ref={bottom} style={{ visibility: 'hidden' }}></li>
    </ul>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      fromMe: PropTypes.bool.isRequired,
      member: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Chat;

import { useRef, useEffect } from "react";
import Message from "../Message";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';
import "./chat.scss";

const Chat = ({ messages, checked }) => {
  const bottomDiv = useRef();

  useEffect(() => {
    bottomDiv.current.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <ul className="chat">
      {messages && messages.map((m) => <Message key={uuid()} m={m} checked={checked} />)}
      <div ref={bottomDiv} />
    </ul>
  );
};

Chat.propTypes = {

};

export default Chat;

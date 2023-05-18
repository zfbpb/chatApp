import { useState } from "react";
import "./chat-input.scss";

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => { // nakon poziva setText(""), unutar funkcije onSendMessage vrijednost text još uvijek sadrži prethodno uneseni tekst, a ne prazan string jer je setText() asinkrona
    e.preventDefault();
    setText(""); // ažuriranje stanja se odgodi do sljedećeg renderiranja komponente
    onSendMessage(text); 
  };

  return (
    <div className="chat-input">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form__input"
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter message"
          autoFocus={true}
        />
        <button className="form__button">Send</button>
      </form>
    </div>
  );
};

export default ChatInput;

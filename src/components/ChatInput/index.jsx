import { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    onSendMessage(text);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={text}
        type='text'
        placeholder='Enter message'
        autoFocus={true}
      />
      <button>Send</button>
    </form>
  );
};

export default ChatInput;

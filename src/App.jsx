import { useState, useEffect } from "react";
import randomColor from "./util/randomColor";
import randomName from "./util/randomName";
import Header from "./components/Header";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import "./App.scss";

const App = () => {
  const [messages, setMessages] = useState([]);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  const [checked, setChecked] = useState(true);

  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const newDrone = new window.Scaledrone(import.meta.env.VITE_API_KEY, {
      data: member,
    });

    setDrone(newDrone);
  }, []);

  useEffect(() => {
    if (drone) {
      const room = drone.subscribe("observable-room");

      drone.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          const prevMember = { ...member };
          prevMember.id = drone.clientId;
          setMember(prevMember);
        }
      });

      room.on("data", (message, member) => {
        const newMessage = {
          text: message,
          member: member,
        };
        newMessage.fromMe =
          member && member.id === drone.clientId ? true : false;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    }
  }, [drone]);

  const handleChange = () => {
    setChecked(!checked)
  }

  const onSendMessage = (message) => {
    if (message.trim()) {
      drone.publish({
        room: "observable-room",
        message,
      });
    } // else console.log("Empty string not allowed");
  };

  return (
    <div className="app">
      <Header checked={checked} handleChange={handleChange} />
      <Chat messages={messages} checked={checked} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default App;

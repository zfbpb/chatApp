import { useState, useEffect } from "react";
import randomColor from "./util/randomColor";
import randomName from "./util/randomName";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import "./App.scss";

const App = () => {
  const [messages, setMessages] = useState([]);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

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

  const onSendMessage = (message) => {
    if (message) {
      drone.publish({
        room: "observable-room",
        message,
      });
    } // else console.log("Empty string not alowed");
  };

  return (
    <div className="app">
      <Chat messages={messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default App;

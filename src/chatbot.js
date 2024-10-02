// import React, { useState, useEffect } from 'react';

// const Chatbot = () => {
//   const [isQuitting, setIsQuitting] = useState(false);
//   const [userInput, setUserInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const pairs = [
//     { pattern: /hi|hello|hey/i, responses: ["Hello!", "Hi there!", "Hey!"] },
//     { pattern: /how are you\??/i, responses: ["I am doing well, how about you?", "I am great, thank you!"] },
//     { pattern: /your name\??/i, responses: ["My name is JSChatbot.", "You can call me JSBot."] },
//     { pattern: /help/i, responses: ["I can help you with your queries.", "What do you need help with?"] },
//     { pattern: /bye|goodbye/i, responses: ["Goodbye!", "See you later!", "Have a great day!"] },
//   ];

//   useEffect(() => {
//     appendBotMessage("Hi, I'm the React chatbot. Type 'quit' to exit.");
//   }, []);

//   const handleUserInput = () => {
//     const userInputText = userInput.trim();
//     if (userInputText.toLowerCase() === 'quit') {
//       appendUserMessage(userInputText);
//       appendBotMessage('Goodbye!');
//       setIsQuitting(true);
//     } else {
//       appendUserMessage(userInputText);
//       const botResponse = getResponse(userInputText);
//       appendBotMessage(botResponse);
//     }
//     setUserInput('');
//   }

//   const getResponse = (input) => {
//     for (let pair of pairs) {
//       if (pair.pattern.test(input)) {
//         const responses = pair.responses;
//         return responses[Math.floor(Math.random() * responses.length)];
//       }
//     }
//     return "I'm sorry, I don't understand.";
//   }

//   const appendUserMessage = (message) => {
//     setMessages(prevMessages => [...prevMessages, { sender: 'You', message, type: 'user' }]);
//   }

//   const appendBotMessage = (message) => {
//     setMessages(prevMessages => [...prevMessages, { sender: 'Bot', message, type: 'bot' }]);
//   }

//   const handleInputChange = (event) => {
//     setUserInput(event.target.value);
//   }

//   const handleButtonClick = () => {
//     handleUserInput();
//   }

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleUserInput();
//     }
//   }

//   return (
//     <>
//     <div className="chatbot-container">
//       <div id="chatbox" className="chatbox">
//         {messages.map((msg, index) => (
//           <div key={index} className={message-container ${msg.type}}>
//             <div className={message ${msg.type}}>
//               {msg.sender}: {msg.message}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           id="userInput"
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           placeholder="Type your message..."
//         />
//         <button id="submitBtn" onClick={handleButtonClick}>Send</button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Chatbot;






import React, { useState, useEffect } from 'react';
import './Chatbot.css'; // Make sure to import the CSS file

const Chatbot = () => {
  const [isQuitting, setIsQuitting] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'Bot', message: "Hi! How can I help you?", type: 'bot' }
  ]);

  const pairs = [
    { pattern: /hi|hello|hey/i, responses: ["Hi, I am Krys"] },
    { pattern: /how are you\??/i, responses: ["How may I help you today"] },
    { pattern: /your name\??/i, responses: ["I'll get you to the right person"] },
    { pattern: /help/i, responses: ["Thank you for your patience. If you couldn't get a response quicker, please contact via email or phone number from the website, someone will assist you"] },
    { pattern: /bye|goodbye/i, responses: ["Appreciate your patience"] },
  ];

  useEffect(() => {
    appendBotMessage("Hi, I'm the React chatbot. Type 'quit' to exit.");
  }, []);

  const handleUserInput = () => {
    const userInputText = userInput.trim();
    if (userInputText.toLowerCase() === 'quit') {
      appendUserMessage(userInputText);
      appendBotMessage('Goodbye!');
      setIsQuitting(true);
    } else {
      appendUserMessage(userInputText);
      const botResponse = getResponse(userInputText);
      appendBotMessage(botResponse);
    }
    setUserInput('');
  }

  const getResponse = (input) => {
    for (let pair of pairs) {
      if (pair.pattern.test(input)) {
        const responses = pair.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "I'm sorry, I don't understand.";
  }

  const appendUserMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, { sender: 'You', message, type: 'you' }]);
  }

  const appendBotMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, { sender: 'Bot', message, type: 'bot' }]);
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleButtonClick = () => {
    handleUserInput();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  }

  return (
    <div id="chat-container">
      <div className="chat-header">
        Hi! How can I help you?
      </div>
      <div id="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.type}`}>
            <span className={`message ${msg.type}`}>
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          id="userInput"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button id="submitBtn" onClick={handleButtonClick}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;

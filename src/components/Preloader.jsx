import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Preloader() {
  const navigate = useNavigate();
  const message = "Whhat objects hold meaning to you?";
  const [typewriterText, setTypewriterText] = useState("");
  const indexRef = useRef(0);
  const typingDone = useRef(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    const typeWriter = () => {
      if (indexRef.current < message.length-1) {
        console.log("Typing: ", message[indexRef.current]);
        setTypewriterText(prevText => prevText + message[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(typingIntervalId);
        // Set a timeout for a brief pause before starting the delete effect
        setTimeout(() => {
          typingDone.current = true;
          indexRef.current = message.length;
          deletingIntervalId = setInterval(deleteWriter, 100); // Start the delete effect
        }, 500); // Pause duration after typing completes
      }
    };

    const deleteWriter = () => {
      if (indexRef.current > 0) {
        setTypewriterText(prevText => prevText.slice(0, -1));
        indexRef.current -= 1;
      } else {
        clearInterval(deletingIntervalId);
        // Navigate to home after the text is fully deleted
        setFadeOut(true);
        setTimeout(() => {
          navigate('/home');
        }, 500); // Adjust the delay after deleting completes
      }
    };

    let typingIntervalId = setInterval(typeWriter, 100); // Adjust typing speed here
    let deletingIntervalId;

    return () => {
      clearInterval(typingIntervalId);
      clearInterval(deletingIntervalId);
    };
  }, [message, navigate]);

  return (
    <div id="preloader" className={`fade-out ${fadeOut ? 'hidden' : ''}`}>
      <h1>{typewriterText}</h1>
      {/* You can add more styling or a spinner here */}
    </div>
  );
}

export default Preloader;

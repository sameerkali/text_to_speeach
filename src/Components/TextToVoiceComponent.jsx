import React, { useState, useEffect } from "react";
import { useTextToVoice } from "react-speakup";

const TextToVoiceComponent = () => {
  const { speak, pause, resume, ref, setVoice, voices } = useTextToVoice();
  const [story, setStory] = useState(""); 

  console.log("story",story)
  useEffect(() => {
    const storedStory = localStorage.getItem("story");
    if (storedStory) {
      setStory(JSON.parse(storedStory).text); 
    }
  }, []); 

  const handleSpeak = () => {
    speak(story); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSpeak} 
        >
          Speak
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={pause}
        >
          Pause
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={resume}
        >
          Resume
        </button>
      </div>
      <select
        className="p-2 border border-gray-300 rounded"
        onChange={(event) => setVoice(event.target.value)}
      >
        {voices.map((voice, index) => (
          <option key={index}>{voice}</option>
        ))}
      </select>
      <div ref={ref} className="mt-4">
        <h1 className="text-xl font-bold">{story}</h1> 
      </div>
    </div>
  );
};

export default TextToVoiceComponent;

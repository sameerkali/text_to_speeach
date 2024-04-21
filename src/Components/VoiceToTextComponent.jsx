import React from "react";
import { useVoiceToText } from "react-speakup";

const VoiceToTextComponent = () => {
  const { startListening, stopListening, transcript } = useVoiceToText();

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <span>{transcript}</span>
    </div>
  );
};

export default VoiceToTextComponent; 
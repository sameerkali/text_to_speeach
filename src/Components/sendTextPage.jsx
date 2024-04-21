import React, { useState } from "react";

const SendTextPage = () => {
  const [formData, setFormData] = useState({
    text: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    localStorage.setItem("story", JSON.stringify(formData));
  };

  console.log("story" , localStorage.getItem("story")) // {"text":" sameer "}
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form data:", JSON.stringify(formData));
    console.log("Success!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SendTextPage;

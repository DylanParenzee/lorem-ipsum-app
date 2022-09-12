import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem-Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          sapiente cumque, doloremque incidunt officiis possimus iure placeat
          labore corrupti, tenetur consectetur dolorum. Laborum tempore expedita
          quae molestias dolores minima vitae!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          sapiente cumque, doloremque incidunt officiis possimus iure placeat
          labore corrupti, tenetur consectetur dolorum. Laborum tempore expedita
          quae molestias dolores minima vitae!
        </p>
      </article>
    </section>
  );
};

export default App;

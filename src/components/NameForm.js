import React, { useState } from "react";
import '../styles/NameForm.css';

function NameForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setError("O nome não pode estar vazio.");
    } else {
      setError("");
    }
  };

  return (
    <section className="name-section">
      <form className="name-container" onSubmit={handleSubmit}>
        <div className="name-form">
          <h2 className="form-title">Informe seu nome</h2>
          <label className="form-label">
            <input className="form-input" value={name} onChange={handleChange} placeholder="Nome" />
          </label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <div>
          <button className="form-name-button">Start</button>
        </div>
      </form>
    </section>
  );
}

export default NameForm;
import React, { useContext, useEffect, useState } from "react";
import { summaryContex } from "./Context";
import "../Components/Summary.css";
import "./Form.css";
const Summary = () => {
  const [model, setModel] = useState(false);
  const { summary } = useContext(summaryContex);
  const [show, setShow] = useState(summary);
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  console.log(name);
  console.log(summary);
  const content = show?.summary.replace(/<[^>]+>/g, "");
  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name, date, number };
    console.log(userData);
    localStorage.setItem("userDetailes", JSON.stringify(userData));
    setName("");
    setDate("");
    setNumber("");
  }
  function handleClose(e) {
    e.preventDefault();
    setModel(false);
  }

  return (
    <div className="movie-card">
      <div className="container">
        <div>
          <img src={show.image?.original} className="imageTag" />
        </div>

        <div className="hero">
          <div>
            <img
              src={show.image?.original}
              alt="Image"
              className="Images-sum"
            />
          </div>
          <div class="details">
            <h1 class="title1">{show?.name}</h1>
            <h3 class="title2">{show?.language}</h3>
          </div>
        </div>

        <div class="description">
          <div class="column1">
            {show?.genres.map((item, index) => {
              return <span class="tag">{item}</span>;
            })}
          </div>

          <div class="column2">
            <p>{content}</p>

            <div class="avatars">
              <button onClick={() => setModel(!model)}>Book Ticket</button>
            </div>
            {model && (
              <div className="modal-overlay">
                <form className="modal">
                  <h2>{show?.name}</h2>
                  <div className="input-group">
                    <label htmlFor="name"> Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="date"> Date:</label>

                    <input
                      type="text"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="number"
                      id="phoneNumber"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <button onClick={handleSubmit}>Submit</button>

                  <button onClick={handleClose} className="cancel-Btn">
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

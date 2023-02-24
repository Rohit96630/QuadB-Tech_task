import React, { useContext, useEffect, useState } from "react";
import "../Components/UserList.css";
import { Link, useNavigate } from "react-router-dom";
import { summaryContex } from "./Context";

const UserList = () => {
  const [show, setShow] = useState([]);
  const [data, setData] = useState([]);
  const [singleShow, setSingleShow] = useState();
  const { summary, setSummary } = useContext(summaryContex);
  console.log(data);
  const Navigate = useNavigate();
  console.log(show);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((error) => console.error(error));
  }, []);

  function handleClick(id) {
    Navigate("/Summary");
    const filterData = show.filter((x, z) => {
      return x.show.id === id;
    });
    setSummary(filterData[0]?.show);
  }
  return (
    <div className="main">
      <div className="header">
        <h1>Tv Show List</h1>
      </div>
      {show.map((item, id) => {
        return (
          <div
            className="card"
            key={id}
            onClick={() => handleClick(item.show.id)}
          >
            <img
              src={item.show.image?.medium}
              alt="John"
              className="movie-img"
            />
            <h1>{item.show.name}</h1>
            <p className="title">Language : {item.show.language}</p>
            <p>Type : {item.show.type}</p>

            <p>
              {/* {item.show.summary} */}
              {/* <Link to="/about"> Go to About page</Link> */}

              <button onClick={() => handleClick(item.show.id)}>Contact</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

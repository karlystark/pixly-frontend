import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm({ searchByCamera }) {

  const [keyword, setKeyword] = useState("");


  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target.value;
    setKeyword(input);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    searchByCamera(keyword);
    setKeyword("");
    navigate("/");
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <h3>Search by camera</h3>
      <div>
        <label htmlFor="camera">Camera: </label>
        <input
          name="camera"
          id="camera"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );

}

export default SearchForm;
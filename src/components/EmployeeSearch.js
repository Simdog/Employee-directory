import React from "react";

function EmployeeSearch(props) {

  return (
    <div className="col-6">
      <form className="mx-5">
        <div className="form-group">
          <label htmlFor="search">Search for an Employee by First or Last Name:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder=""
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default EmployeeSearch;
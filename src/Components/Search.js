import React, { useState } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  console.log("Check Validity ", maxValid >= selected && maxValid >= today);
  return maxValid >= selected && maxValid >= today;
}

function Search({
  handleChange,
  details,
  searchStudentList,
  confirmValidity,
  setErrorType,
  setData,
  data,
  setDetails,
  setErrorName,
}) {
  function addStudent() {
    if (searchStudentList()) {
      if (checkValidity(details.date, confirmValidity())) {
        let nameSearch = data.find((person) => {
          if (person.name.toLowerCase() == details.name.toLowerCase()) {
            return true;
          }
        });
        !nameSearch && setData([...data, details]);
      } else {
        setErrorType("error2");
      }
    }
    setDetails({ name: "", date: "" });
    setErrorName(details.name);
  }

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            value={details.name}
            onChange={handleChange}
            name="name"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            value={details.date}
            onChange={handleChange}
            name="date"
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={addStudent}
      >
        Add
      </button>
    </div>
  );
}

export default Search;

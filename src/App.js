import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { STUDENTS as studentList } from "./studentsList";

const title = "Tizeti";
function App() {
  const [errorType, setErrorType] = useState("");
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    date: "",
    name: "",
  });
  const [errorName, setErrorName] = useState("");

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const searchStudentList = () => {
    let nameSearch = studentList.find((person) => {
      if (person.name.toLowerCase() == details.name.toLowerCase()) {
        setErrorType("");
        return true;
      }
      setErrorType("error1");
    });
    return nameSearch;
  };

  const confirmValidity = () => {
    let dateSearch = studentList.find((person) => {
      if (person.name.toLowerCase() == details.name.toLowerCase()) {
        return person;
      }
    });
    return dateSearch.validityDate;
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          handleChange={handleChange}
          details={details}
          searchStudentList={searchStudentList}
          confirmValidity={confirmValidity}
          setErrorType={setErrorType}
          setData={setData}
          data={data}
          setDetails={setDetails}
          setErrorName={setErrorName}
        />
        {errorType == "" ? null : (
          <Error error={errorType} name={details.name} errorName={errorName} />
        )}
        <ResidentsList data={data} />
      </div>
    </div>
  );
}

export default App;

import React from "react";

const capitalize = (str) => str && str[0].toUpperCase() + str.substring(1) ;

function Error({ error, name, errorName }) {
  const errorMessage = () => {
    if (error == "error1") {
      return <p>Sorry, {errorName} is not a verified student!</p>;
    }

    if (error == "error2") {
      return <p>Sorry, {capitalize(errorName)}'s validity has Expired!</p>;
    }
  };

  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {errorMessage()}
    </div>
  );
}

export default Error;

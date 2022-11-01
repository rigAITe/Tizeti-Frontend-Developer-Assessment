import React from "react";

function ResidentsList({ data }) {
	
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {data.map((res) => (
          <li key={res.name} className="slide-up-fade-in">
            {res.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;

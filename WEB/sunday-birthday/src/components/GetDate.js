import { useState } from "react";
import ShowErrorMessage from "./ShowErrorMessage";
function GetDate({ birthdate, setBirthdate, setHasError }) {
  const [errorMessage, setErrorMessage] = useState({
    day: null,
    year: null,
    month: null,
  });
  const validateDay = () => {
    var day = birthdate["day"];
    if (day < 1 || day > 31) {
        setHasError(true);
      setErrorMessage({ ...errorMessage, day: "Choose a day from 1-31" });
    } else {
        setErrorMessage({ ...errorMessage, day: null });
        setHasError(!!(errorMessage.day || errorMessage.month || errorMessage.year));
    }
  };
  const validateMonth = () => {
    var month = birthdate["month"];
    if (month < 1 || month > 12) {
        setHasError(true);
        setErrorMessage({ ...errorMessage, month: "Choose a month from 1-12" });
    } else {
        setErrorMessage({ ...errorMessage, month: null });
        setHasError(!!(errorMessage.day || errorMessage.month || errorMessage.year));
    }
  };
  const validateYear = () => {
    var year = birthdate["year"];
    if (year < 1800 || year > 2200) {
        setHasError(true);
        setErrorMessage({
        ...errorMessage,
        year: "Choose a year from 1800-2200",
      });
    } else {
        setErrorMessage({ ...errorMessage, year: null });
        setHasError(!!(errorMessage.day || errorMessage.month || errorMessage.year));
    }
  };
  return (
    <div>
      <div>Enter Your birth date:</div>
      <div>
      <ShowErrorMessage errorMessage={errorMessage.day} />
      <input
        id="day"
        type="number"
        value={birthdate.day}
        placeholder="dd"
        onChange={(e) => {
          setBirthdate({ ...birthdate, day: e.target.value });
        }}
        onBlur={validateDay}
      />
      </div>
      <div>
      <ShowErrorMessage errorMessage={errorMessage.month} />
      <input
        id="month"
        type="number"
        value={birthdate.month}
        placeholder="mm"
        onChange={(e) => {
          setBirthdate({ ...birthdate, month: e.target.value });
        }}
        onBlur={validateMonth}
      />
      </div>
      <div>
      <ShowErrorMessage errorMessage={errorMessage.year} />
      <input
        id="year"
        type="number"
        value={birthdate.year}
        placeholder="yyyy"
        onChange={(e) => {
          setBirthdate({ ...birthdate, year: e.target.value });
        }}
        onBlur={validateYear}
      />
      </div>
      {console.log(errorMessage)}

    </div>
  );
}

export default GetDate;

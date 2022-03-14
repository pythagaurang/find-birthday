import { useEffect, useState } from "react";
import ShowErrorMessage from "./ShowErrorMessage";
function GetDate({ birthdate, setBirthdate, setHasError }) {
  const [errorMessage, setErrorMessage] = useState({
    day: null,
    year: null,
    month: null,
  });
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    if (day && (day < 1 || day > 31)) {
      setHasError(true);
      setErrorMessage({ ...errorMessage, day: "Invalid day" });
    } else {
      setErrorMessage({ ...errorMessage, day: null });
      setHasError(errorMessage.month != null || errorMessage.year != null);
    }
  }, [day]);
  useEffect(() => {
    if (month && (month < 1 || month > 12)) {
      setHasError(true);
      setErrorMessage({ ...errorMessage, month: "Invalid month" });
    } else {
      setErrorMessage({ ...errorMessage, month: null });
      setHasError(errorMessage.day != null || errorMessage.year != null);
    }
  }, [month]);
  useEffect(() => {
    if (year && (year < 1800 || year > 2200)) {
      setHasError(true);
      setErrorMessage({
        ...errorMessage,
        year: "Invalid Year",
      });
    } else {
      setErrorMessage({ ...errorMessage, year: null });
      setHasError(errorMessage.day != null || errorMessage.month != null);
    }
  }, [year]);
  useEffect(() => {
    setBirthdate({
      day,
      month,
      year,
    });
  }, [day, month, year]);
  return (
    <div className="getDate">
      <div className="getDateText">Enter Your birth date</div>
      <div className="getDateInputs">
      <div className="getDateInput">
        <ShowErrorMessage className="inputError" errorMessage={errorMessage.day} />
        <input
          id="day"
          type="number"
          value={birthdate.day}
          autoComplete="off"
          placeholder="dd"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="getDateInput">
        <ShowErrorMessage className="inputError" errorMessage={errorMessage.month} />
        <input
          id="month"
          type="number"
          value={birthdate.month}
          autoComplete="off"
          placeholder="mm"
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
      </div>
      <div className="getDateInput">
        <ShowErrorMessage className="inputError" errorMessage={errorMessage.year} />
        <input
          id="year"
          type="number"
          value={birthdate.year}
          autoComplete="off"
          placeholder="yyyy"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      </div>
    </div>
  );
}

export default GetDate;

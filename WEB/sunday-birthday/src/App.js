import { useState } from "react";
import "./App.css";
import GetDate from "./components/GetDate";
import GetWeekdays from "./components/GetWeekdays";
import ShowBirthdays from "./components/ShowBirthdays";
import ShowErrorMessage from "./components/ShowErrorMessage";

function App() {
  const [birthdate, setBirthdate] = useState({ day: "", month: "", year: "" });
  const [weekdays, setWeekdays] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [data, setData] = useState({
    years: [],
    day: null,
    month: null,
  });
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const validDate = (day, month, year) => {
    let dt = new Date(year, month - 1, day),
      valid;
    if (dt.getDate() !== day) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  };
  const handleSubmit = () => {
    const day = parseInt(birthdate.day);
    const month = parseInt(birthdate.month);
    const year = parseInt(birthdate.year);
    setErrorMessage("");
    setData({
      years: [],
    });
    if (!day || !year || !month) {
      setErrorMessage("Please enter your birthdate.");
    } else if (hasError || !validDate(day, month, year)) {
      setErrorMessage("Enter a valid date");
    } else if (!weekdays.includes(true)) {
      setErrorMessage("Choose weekdays to find your birthdays that occur on.");
    } else {
      let c = 0,
        dt,
        years = [];
      for (let i = year; i < year + 100; i++) {
        dt = new Date(i, month - 1, day);
        if (weekdays[dt.getDay()] && validDate(day, month, i)) {
          years.push({ index: ++c, year: i, day: dt.getDay() });
        }
      }
      setData({
        years,
        day,
        month,
      });
    }
  };
  return (
    <div className="App">
      <GetDate
        birthdate={birthdate}
        setBirthdate={setBirthdate}
        setHasError={setHasError}
      />
      <GetWeekdays
        weekdays={weekdays}
        setWeekdays={setWeekdays}
        setHasError={setHasError}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ShowErrorMessage errorMessage={errorMessage} />
      {data.years.length !== 0 && <ShowBirthdays data={data} />}
      {console.log(hasError)}
    </div>
  );
}

export default App;

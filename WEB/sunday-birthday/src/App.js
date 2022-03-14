import { useEffect, useState } from "react";
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
    years: {
      0:[],
      1:[],
      2:[],
      3:[],
      4:[],
      5:[],
      6:[]
    },
    day: null,
    month: null,
  });
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const validDate = (day, month, year) => {
    let dt = new Date(year, month - 1, day),
      valid;
    if (dt.getDate() !== day || dt.getMonth()!==(month-1) || dt.getFullYear()!==year) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  };
  useEffect(() => {
    const day = parseInt(birthdate.day);
    const month = parseInt(birthdate.month);
    const year = parseInt(birthdate.year);
    setData(d=>{
      return {
      ...d,
      years: {
          0:[],
          1:[],
          2:[],
          3:[],
          4:[],
          5:[],
          6:[]
      }
    };})
    setErrorMessage("");
    if (!day || !year || !month || hasError) {
    } else if(!validDate(day, month, year)) {
      setErrorMessage("Invalid Date: Check if the month has that many days.")
    } else if (!weekdays.includes(true)){
    } else {
      let dt,
        years = {
          0:[],
          1:[],
          2:[],
          3:[],
          4:[],
          5:[],
          6:[]
        };
      for (let i = year; i < year + 100; i++) {
        dt = new Date(i, month - 1, day);
        if ( weekdays[dt.getDay()] && validDate(day, month, i)) {
          years[dt.getDay()].push(i);
        }
      }
      setData({
        years,
        day,
        month,
      });
    }
  },[birthdate,weekdays,hasError])
  return (
    <div className="App">
      <div className="title-logo">
        Find Birthdays
      </div>
      <div className="description">
        This site will help you find the years in which your birthday occurs on a sunday.
      </div>
      <GetDate
        birthdate={birthdate}
        setBirthdate={setBirthdate}
        setHasError={setHasError}
      />
      <ShowErrorMessage className="invalidDateError" errorMessage={errorMessage} />
      <GetWeekdays
        weekdays={weekdays}
        setWeekdays={setWeekdays}
        setHasError={setHasError}
      />
      {data.years.length !== 0 && <ShowBirthdays data={data}/>}
      <div className="footer">
        <div>Made by <a href="https://github.com/pythagaurang/find-birthday.git">@pythagaurang</a></div>
      </div>
    </div>
  );
}

export default App;

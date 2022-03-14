function ShowBirthdays({ data }) {
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="showBD">
      {data.day==29 && data.month==2 && <div>Bruh.</div>}
      {[...Array(7).keys()].filter((i)=>data.years[i].length).map((i) => {
        return (
          <div className="showBDEachDay">
            <div className="showBDWeekday">{WEEKDAY[i]}</div>
            <div>
              {data.years[i].reduce((a,b)=>a+", "+b)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowBirthdays;

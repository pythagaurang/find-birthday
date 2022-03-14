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
    <div>
      {[...Array(7).keys()].filter((i)=>data.years[i].length).map((i) => {
        return (
          <div>
            <div>{WEEKDAY[i]}</div>
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

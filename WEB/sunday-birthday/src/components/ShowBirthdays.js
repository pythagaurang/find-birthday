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
      <table>
        <tr>
          <th>No.</th>
          <th>Year</th>
          <th>Day</th>
        </tr>
        {data.years.map(({ index, year, day }) => {
          return (
            <tr>
              <td>{index}</td>
              <td>
                {data.day}/{data.month}/{year}
              </td>
              <td>{WEEKDAY[day]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ShowBirthdays;

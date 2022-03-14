function GetWeekdays({ weekdays, setWeekdays }) {
  const handleChange = (e) => {
    var change = [...weekdays];
    if (e.target.value === "all") {
      if (change.includes(false)) {
        for (let i = 0; i < change.length; i++) {
          change[i] = true;
        }
      } else {
        for (let i = 0; i < change.length; i++) {
          change[i] = false;
        }
      }
    } else {
      change[e.target.value] = !change[e.target.value];
    }
    setWeekdays(change);
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={weekdays[0]}
          onChange={handleChange}
          id="sunday"
          name="sunday"
          value="0"
        />{" "}
        Sunday
        <input
          type="checkbox"
          checked={weekdays[1]}
          onChange={handleChange}
          id="monday"
          name="monday"
          value="1"
        />{" "}
        Monday
        <input
          type="checkbox"
          checked={weekdays[2]}
          onChange={handleChange}
          id="tuesday"
          name="tuesday"
          value="2"
        />{" "}
        Tuesday
        <input
          type="checkbox"
          checked={weekdays[3]}
          onChange={handleChange}
          id="wednesday"
          name="wednesday"
          value="3"
        />{" "}
        Wednesday
        <input
          type="checkbox"
          checked={weekdays[4]}
          onChange={handleChange}
          id="thursday"
          name="thursday"
          value="4"
        />{" "}
        Thursday
        <input
          type="checkbox"
          checked={weekdays[5]}
          onChange={handleChange}
          id="friday"
          name="friday"
          value="5"
        />{" "}
        Friday
        <input
          type="checkbox"
          checked={weekdays[6]}
          onChange={handleChange}
          id="saturday"
          name="saturday"
          value="6"
        />{" "}
        Saturday
        <input
          type="checkbox"
          checked={weekdays.every((v) => v)}
          onChange={handleChange}
          id="all"
          name="all"
          value="all"
        />{" "}
        All
      </div>
      {/* < select
            multiple={true}
            value={weekdays}
            onChange={handleChange}
            >
                <option value="0">Sunday</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="all">All</option>
            
            </select> */}
    </div>
  );
}

export default GetWeekdays;

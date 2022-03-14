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
    <div className="getWeekdays">
    <div className="getWeekdaysRow">
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[0]}
          onChange={handleChange}
          id="sunday"
          name="sunday"
          value="0"
        />
        <label for="sunday">Sun</label>
      </div>
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[1]}
          onChange={handleChange}
          id="monday"
          name="monday"
          value="1"
        />{" "}
        <label for="monday">Mon</label>
        </div>
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[2]}
          onChange={handleChange}
          id="tuesday"
          name="tuesday"
          value="2"
        />{" "}
        <label for="tuesday">Tue</label>
        </div>
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[3]}
          onChange={handleChange}
          id="wednesday"
          name="wednesday"
          value="3"
        />{" "}
        <label for="wednesday">Wed</label>
        </div>
        </div>
    <div className="getWeekdaysRow">
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[4]}
          onChange={handleChange}
          id="thursday"
          name="thursday"
          value="4"
        />{" "}
        <label for="thursday">Thu</label>
        </div>
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[5]}
          onChange={handleChange}
          id="friday"
          name="friday"
          value="5"
        />{" "}

        <label for="friday">Fri</label>
        </div>
      <div className="getWeekdaysInput">
        <input
          type="checkbox"
          checked={weekdays[6]}
          onChange={handleChange}
          id="saturday"
          name="saturday"
          value="6"
        />{" "}
        <label for="saturday">Sat</label>
        </div>
      <div className="getWeekdaysInput all">
        <input
          type="checkbox"
          checked={weekdays.every((v) => v)}
          onChange={handleChange}
          id="all"
          name="all"
          value="all"
        />{" "}
        <label for="all">All</label>
        </div>
    </div>
    </div>
  );
}

export default GetWeekdays;

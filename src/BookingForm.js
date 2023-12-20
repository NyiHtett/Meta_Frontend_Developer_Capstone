import React from "react";

const BookingForm = ({
  formatData,
  handleFormChange,
  availableTimes,
  handleSubmit,
  updateWeekendTimes,
  updateWeekDayTimes,
}) => {
  return (
    <form
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <label for="res-date">Current Date: </label>
      <input
        type="date"
        id="res-date"
        value={formatData.date}
        onChange={(e) => {
            handleFormChange("date", e.target.value);
            var date = new Date(e.target.value);
            if(date.getDay() == 5 || date.getDay() == 6) {
                updateWeekendTimes()
            }
            else {
                updateWeekDayTimes()
            }
        }}
      ></input>

      <label for="res-time">Current Time: </label>
      <select
        id="res-time"
        value={formatData.time}
        onChange={(e) => handleFormChange("time", e.target.value)}
      >

        {availableTimes.length > 0 ? (
          availableTimes.map((time) => <option>{time}</option>)
        ) : (
          <option> No available times </option>
        )}
      </select>

      <label for="guests"> Number of guests: </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formatData.guest}
        onChange={(e) => handleFormChange("guest", e.target.value)}
      />

      <label for="occasion"> Occasion</label>
      <select
        id="occasion"
        value={formatData.occasion}
        onChange={(e) => handleFormChange("occasion", e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make your reservation"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default BookingForm;
